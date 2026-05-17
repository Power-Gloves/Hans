import type { TeamItem, StintInfo } from '../App'

// 耐力赛规则常量（来自秩序册）
export const REQUIRED_PIT_STOPS = 7        // 6小时赛至少 7 次进站换人（8 棒）
export const MIN_PIT_DURATION_MS = 120000  // 单次进站 ≥ 2 分钟
export const MAX_STINT_MS = 70 * 60 * 1000 // 单棒最多 70 分钟
// 估算每次"额外进站"的净时间损失：进站停 2 分钟 + 进出维修区赛道损失约 30 秒
export const EST_PIT_LOSS_MS = 150000

export interface RealRankItem extends TeamItem {
  pitsRemaining: number       // 还需进站次数（综合：规则下限 + 单棒上限推算）
  pitsByRule: number          // 仅按 7 次强制规则
  pitsByStintCap: number      // 仅按 70min 单棒上限推算
  estimatedPenaltyLaps: number // 估算已产生的罚圈数（基于本地追踪数据）
  realGap: number             // 调整后差距（毫秒）
  realPos: number             // 真实排位
  pitDeficitMs: number        // 进站时长不足总和（监控期内）
  warnings: string[]          // 风险提示
}

/**
 * 计算真实"还需进站次数"
 * 取以下两个约束的最大值：
 *  1) 规则强制：max(0, 7 - 已进站次数)
 *  2) 单棒 70 分钟上限：剩余时间内最少要再进几次站
 */
export function calcPitsRemaining(
  pitsDone: number,
  currentStintMs: number,
  raceLeftTimeMs: number
): { combined: number; byRule: number; byStintCap: number } {
  const byRule = Math.max(0, REQUIRED_PIT_STOPS - pitsDone)

  let byStintCap = 0
  if (raceLeftTimeMs > 0) {
    // 当前棒还能开多久
    const availableInCurrent = Math.max(0, MAX_STINT_MS - currentStintMs)
    if (raceLeftTimeMs > availableInCurrent) {
      // 当前棒结束后还需多少新棒，每新棒前必须进一次站
      byStintCap = Math.ceil((raceLeftTimeMs - availableInCurrent) / MAX_STINT_MS)
    }
  }

  return {
    combined: Math.max(byRule, byStintCap),
    byRule,
    byStintCap,
  }
}

/**
 * 估算单棒超时罚圈数（规则 8.20）
 * 71-75 → 1, 76-80 → 2, 81-85 → 3, 86-90 → 4, 每+5min +1圈
 */
function calcStintOverPenalty(stintMs: number): number {
  const minutes = stintMs / 60000
  if (minutes <= 70) return 0
  return Math.ceil((minutes - 70) / 5)
}

/**
 * 估算进站时长不足罚圈数（规则 8.21）
 * 差 1-10s → 1, 差 11-20s → 2, 差 21-30s → 3, 差 31-40s → 4, 每+10s +1
 */
function calcPitShortPenalty(pitDurationMs: number): number {
  if (pitDurationMs >= MIN_PIT_DURATION_MS) return 0
  const shortSec = (MIN_PIT_DURATION_MS - pitDurationMs) / 1000
  return Math.ceil(shortSec / 10)
}

/**
 * 计算真实排名
 * @param items API 返回的实时排名
 * @param stintTracker 后端追踪的进站/单棒数据（仅监控期内）
 * @param raceLeftTimeMs 比赛剩余时间（毫秒），用于推算单棒上限约束下的进站次数
 */
export function computeRealRanking(
  items: TeamItem[],
  stintTracker: Record<string, StintInfo>,
  raceLeftTimeMs: number = 0
): RealRankItem[] {
  if (items.length === 0) return []

  // 1. 找到 API 当前榜首作为差距基准
  const leader = items[0]
  const leaderStint = stintTracker[String(leader.id)]
  const leaderPitsInfo = calcPitsRemaining(
    leader.pitstops || 0,
    leaderStint?.currentStintDuration || 0,
    raceLeftTimeMs
  )
  const leaderPitsRemaining = leaderPitsInfo.combined

  // 平均圈速估算（用所有 bestTm 的中位数，处理脏数据）
  const validBests = items.map(i => i.bestTm).filter(t => t > 30000 && t < 300000)
  const avgLapMs = validBests.length > 0
    ? validBests.sort((a, b) => a - b)[Math.floor(validBests.length / 2)]
    : 70000

  // 2. 对每队计算调整后差距
  const enriched: RealRankItem[] = items.map(item => {
    const pitsDone = item.pitstops || 0
    const stint = stintTracker[String(item.id)]
    const pitsInfo = calcPitsRemaining(
      pitsDone,
      stint?.currentStintDuration || 0,
      raceLeftTimeMs
    )
    const pitsRemaining = pitsInfo.combined

    let estimatedPenaltyLaps = 0
    let pitDeficitMs = 0
    const warnings: string[] = []

    if (stint) {
      // 单棒超时罚圈
      for (const s of stint.stints) {
        if (s.end !== null) {
          estimatedPenaltyLaps += calcStintOverPenalty(s.duration)
        }
      }
      // 当前进行中的棒，如果已超 70 分钟也提示
      if (stint.currentStintDuration > MAX_STINT_MS) {
        warnings.push(`当前棒已超 ${Math.round(stint.currentStintDuration / 60000)} 分钟`)
      }

      // 进站时长不足罚圈
      for (const p of stint.pitStops) {
        if (p.duration && p.duration > 0) {
          estimatedPenaltyLaps += calcPitShortPenalty(p.duration)
          if (p.duration < MIN_PIT_DURATION_MS) {
            pitDeficitMs += MIN_PIT_DURATION_MS - p.duration
          }
        }
      }
    }

    // 风险提示
    if (pitsRemaining > 0) {
      warnings.push(`还需进站 ${pitsRemaining} 次`)
    }
    if (estimatedPenaltyLaps > 0) {
      warnings.push(`预计罚圈 +${estimatedPenaltyLaps}`)
    }

    // 调整后差距 = API 差距 + 强制进站次数差 × 单次损失 + 罚圈 × 平均圈速 + 进站时长不足
    let realGap = item.gap
    // gap 单位：> 0 是毫秒，-N 是落后 N 圈（CRKC API 约定）
    // 落后圈数转换为毫秒
    if (realGap < 0) {
      realGap = Math.abs(realGap) * avgLapMs
    }
    // 加上比榜首多出的进站义务
    realGap += (pitsRemaining - leaderPitsRemaining) * EST_PIT_LOSS_MS
    // 加上预估罚圈
    realGap += estimatedPenaltyLaps * avgLapMs
    // 加上进站时长不足
    realGap += pitDeficitMs

    return {
      ...item,
      pitsRemaining,
      pitsByRule: pitsInfo.byRule,
      pitsByStintCap: pitsInfo.byStintCap,
      estimatedPenaltyLaps,
      realGap,
      realPos: 0,
      pitDeficitMs,
      warnings,
    }
  })

  // 3. 按 realGap 升序重新排序
  enriched.sort((a, b) => {
    // 圈数多的优先（防止 gap 计算误差）
    if (Math.abs(a.laps - b.laps) > 5) return b.laps - a.laps
    return a.realGap - b.realGap
  })

  // 4. 标记真实排位
  enriched.forEach((item, idx) => { item.realPos = idx + 1 })

  return enriched
}
