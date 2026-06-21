import { useState, useMemo } from 'react'
import { TeamItem, StintInfo, RaceItem } from '../App'
import { computeRealRanking, REQUIRED_PIT_STOPS } from '../utils/realRanking'

interface ControlMsg {
  id: number
  cont: string
  c_time: string
}

interface Props {
  items: TeamItem[]
  stintTracker: Record<string, StintInfo>
  raceInfo: RaceItem | null
  trackedTeamId: string | null
  onSelectTeam: (teamId: string) => void
  controlMessages?: ControlMsg[]
}

function formatTime(ms: number): string {
  if (!ms || ms <= 0) return '--'
  const min = Math.floor(ms / 60000)
  const sec = Math.floor((ms % 60000) / 1000)
  const msec = ms % 1000
  return `${min}:${sec.toString().padStart(2, '0')}.${msec.toString().padStart(3, '0')}`
}

function formatGap(gap: number): string {
  if (gap === 0) return '--'
  if (gap === -1) return '+1 Lap'
  if (gap < -1) return `+${Math.abs(gap)} Laps`
  return `+${(gap / 1000).toFixed(3)}`
}

function formatRealGap(ms: number): string {
  if (ms <= 0) return '--'
  if (ms < 60000) return `+${(ms / 1000).toFixed(1)}s`
  const min = Math.floor(ms / 60000)
  const sec = Math.floor((ms % 60000) / 1000)
  return `+${min}m${sec.toString().padStart(2, '0')}s`
}

function getStatusColor(st: number): string {
  switch (st) {
    case 0: return ''
    case 1: return 'bg-green-900/30'
    case 3: case 4: return 'bg-yellow-900/30'
    default: return ''
  }
}

function getPitStatus(st: number): { label: string; color: string } | null {
  // st >= 2 表示车辆在维修区 (P = 进站)
  if (st >= 2) return { label: 'P', color: 'bg-yellow-500 text-black' }
  return null
}

// 关注车队：队名包含以下任一关键词即高亮+打标（按需在此增删）
const WATCHED_TEAMS = ['麦浪']
function isWatched(team: string): boolean {
  return WATCHED_TEAMS.some(k => (team || '').includes(k))
}

export default function Leaderboard({ items, stintTracker, raceInfo, trackedTeamId, onSelectTeam, controlMessages = [] }: Props) {
  const [mode, setMode] = useState<'api' | 'real'>('api')

  // 比赛剩余时间（毫秒）— API 返回的 leftTime 是秒
  const raceLeftTimeMs = raceInfo ? Number(raceInfo.leftTime) * 1000 : 0

  const realItems = useMemo(
    () => computeRealRanking(items, stintTracker, raceLeftTimeMs),
    [items, stintTracker, raceLeftTimeMs]
  )

  // 解析罚单：从 controlMessages 提取被罚车号 → 罚单次数
  const penaltyMap = useMemo(() => {
    const map: Record<string, number> = {}
    controlMessages.forEach(msg => {
      const m = msg.cont.match(/#(\d+)/)
      if (m) {
        map[m[1]] = (map[m[1]] || 0) + 1
      }
    })
    return map
  }, [controlMessages])

  const isReal = mode === 'real'
  const display = isReal ? realItems : items

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      {/* Mode toggle */}
      <div className="flex items-center justify-between bg-gray-700 px-3 py-2">
        <div className="flex gap-1">
          <button
            className={`px-3 py-1 text-xs rounded transition ${
              !isReal ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => setMode('api')}
          >
            API 排名
          </button>
          <button
            className={`px-3 py-1 text-xs rounded transition ${
              isReal ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => setMode('real')}
            title="按强制进站次数和预估罚圈调整后的真实排名"
          >
            真实排名 *
          </button>
        </div>
        {isReal && (
          <div className="text-xs text-gray-400">
            * 基于 {REQUIRED_PIT_STOPS} 次强制进站规则 + 罚圈估算
          </div>
        )}
      </div>

      <div className="overflow-x-auto -mx-2 sm:mx-0">
      <table className="w-full text-xs sm:text-sm min-w-0">
        <thead>
          <tr className="bg-gray-700/50 text-gray-300">
            <th className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-left w-8 sm:w-10">P</th>
            <th className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-left w-12 sm:w-14">车号</th>
            <th className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-left">车队</th>
            <th className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-left hidden sm:table-cell">车手</th>
            <th className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-right">圈</th>
            <th className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-right hidden sm:table-cell">最后圈</th>
            <th className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-right hidden md:table-cell">最快圈</th>
            <th className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-right">{isReal ? '差距' : '差距'}</th>
            <th className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-right">进站</th>
            {isReal && <th className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-right">罚圈</th>}
          </tr>
        </thead>
        <tbody>
          {display.map((item) => {
            const isTracked = String(item.id) === trackedTeamId
            const realItem = isReal ? (item as typeof realItems[0]) : null
            const apiPos = items.findIndex(i => i.id === item.id) + 1
            const realPos = realItem?.realPos ?? apiPos
            const posChanged = isReal && realItem && apiPos !== realPos
            const pitsRemaining = realItem?.pitsRemaining ?? Math.max(0, REQUIRED_PIT_STOPS - (item.pitstops || 0))

            return (
              <tr
                key={item.id}
                className={`border-t border-gray-700 cursor-pointer hover:bg-gray-700/50 ${
                  isTracked ? 'bg-orange-900/30 border-l-2 border-l-orange-400'
                    : isWatched(item.team) ? 'bg-sky-900/30 border-l-2 border-l-sky-400' : ''
                } ${getStatusColor(item.st)}`}
                onClick={() => onSelectTeam(String(item.id))}
              >
                <td className="px-1.5 sm:px-2 py-1 sm:py-1.5 font-bold">
                  {isReal ? realPos : apiPos}
                  {posChanged && (
                    <span className={`ml-1 text-xs ${realPos < apiPos ? 'text-green-400' : 'text-red-400'}`}>
                      {realPos < apiPos ? '↑' : '↓'}{Math.abs(apiPos - realPos)}
                    </span>
                  )}
                </td>
                <td className="px-1.5 sm:px-2 py-1 sm:py-1.5 font-mono">
                  <span className="inline-flex items-center gap-1">
                    {item.carNo}
                    {getPitStatus(item.st) && (
                      <span className={`text-[10px] font-bold px-1 py-0.5 rounded ${getPitStatus(item.st)!.color} animate-pulse`}>
                        {getPitStatus(item.st)!.label}
                      </span>
                    )}
                  </span>
                </td>
                <td className="px-1.5 sm:px-2 py-1 sm:py-1.5 font-semibold truncate max-w-[80px] sm:max-w-[120px]">
                  <span className="inline-flex items-center gap-1">
                    {isWatched(item.team) && (
                      <span className="text-[10px] font-bold px-1 py-0.5 rounded bg-sky-500 text-white shrink-0">关注</span>
                    )}
                    {item.team}
                    {penaltyMap[item.carNo] && (
                      <span className="text-[10px] text-red-400" title={`${penaltyMap[item.carNo]}张罚单`}>
                        🚩{penaltyMap[item.carNo] > 1 ? penaltyMap[item.carNo] : ''}
                      </span>
                    )}
                  </span>
                </td>
                <td className="px-1.5 sm:px-2 py-1 sm:py-1.5 text-gray-300 truncate max-w-[80px] sm:max-w-[100px] hidden sm:table-cell">{item.name}</td>
                <td className="px-1.5 sm:px-2 py-1 sm:py-1.5 text-right font-mono">{item.laps}</td>
                <td className="px-1.5 sm:px-2 py-1 sm:py-1.5 text-right font-mono hidden sm:table-cell">{formatTime(item.lastTm)}</td>
                <td className="px-1.5 sm:px-2 py-1 sm:py-1.5 text-right font-mono text-purple-300 hidden md:table-cell">{formatTime(item.bestTm)}</td>
                <td className="px-1.5 sm:px-2 py-1 sm:py-1.5 text-right font-mono text-yellow-300">
                  {isReal && realItem ? formatRealGap(realItem.realGap) : formatGap(item.gap)}
                </td>
                <td className="px-1.5 sm:px-2 py-1 sm:py-1.5 text-right">
                  {isReal && realItem ? (
                    <span
                      className={pitsRemaining > 0 ? 'text-orange-300' : 'text-green-400'}
                      title={`规则强制剩余: ${realItem.pitsByRule}\n70分钟单棒上限推算: ${realItem.pitsByStintCap}\n取最大值`}
                    >
                      {item.pitstops || 0} (还需 {pitsRemaining})
                    </span>
                  ) : (
                    <span className={pitsRemaining > 0 ? 'text-orange-300' : 'text-green-400'}>
                      {item.pitstops || 0}/{REQUIRED_PIT_STOPS}
                    </span>
                  )}
                </td>
                {isReal && (
                  <td className="px-1.5 sm:px-2 py-1 sm:py-1.5 text-right">
                    {realItem && realItem.estimatedPenaltyLaps > 0 ? (
                      <span className="text-red-400">+{realItem.estimatedPenaltyLaps}</span>
                    ) : (
                      <span className="text-gray-600">-</span>
                    )}
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
      {display.length === 0 && (
        <div className="text-center py-8 text-gray-500">等待比赛数据...</div>
      )}

      {isReal && (
        <div className="bg-gray-900/50 px-3 py-2 text-xs text-gray-400 border-t border-gray-700 space-y-1">
          <div>💡 「还需 N」 = max(7次强制规则剩余, 单棒70分钟上限推算)。鼠标悬停看明细。</div>
          <div>📊 真实差距 = API差距 + (我剩余进站 - 榜首剩余进站) × 2分30秒 + 预估罚圈 × 平均圈速</div>
          <div>↑↓ 表示相对 API 原始排名的变化</div>
        </div>
      )}
    </div>
  )
}
