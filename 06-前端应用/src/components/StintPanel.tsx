import { useEffect, useMemo, useState } from 'react'
import { StintInfo, TeamItem, PitAnalysis, AccurateDriverData } from '../App'

interface PitStatusData {
  inPit: boolean
  enterTime: number | null
}

interface ControlMsg {
  id: number
  cont: string
  c_time: string
}

interface LapItem {
  laps: number
  lapTm: number
  ri_time_of_day: string
}

interface Props {
  stint: StintInfo
  teamItem?: TeamItem
  pitAnalysis?: PitAnalysis | null
  pitStatus?: PitStatusData | null
  accurateDrivers?: AccurateDriverData | null
  controlMessages?: ControlMsg[]
  lapData?: LapItem[]
}

function formatDuration(ms: number): string {
  const totalSec = Math.floor(ms / 1000)
  const min = Math.floor(totalSec / 60)
  const sec = totalSec % 60
  return `${min}:${sec.toString().padStart(2, '0')}`
}

const MAX_STINT_MS = 70 * 60 * 1000 // 70 minutes
const WARN_STINT_MS = 60 * 60 * 1000 // 60 minutes warning
const MIN_PIT_MS = 2 * 60 * 1000 // 2 minutes minimum pit

function parseRiTime(s?: string | null): number | null {
  if (!s) return null
  const m = s.match(/(\d+)\/(\d+)\/(\d+)\s+(\d+):(\d+):(\d+)/)
  if (!m) return null
  return new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]).getTime()
}

export default function StintPanel({ stint, teamItem, pitAnalysis, pitStatus, accurateDrivers, controlMessages = [], lapData }: Props) {
  const [now, setNow] = useState(Date.now())
  const [selectedStintNo, setSelectedStintNo] = useState<number | null>(null)
  const [hoverLap, setHoverLap] = useState<{ idx: number; lapNo: number; time: number; x: number; y: number } | null>(null)

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  // 当前棒精确时长：优先用 lapItems 起点 + 本地 tick 实时计算
  const currentStintStart = pitAnalysis?.currentStint?.startTime
    ? parseRiTime(pitAnalysis.currentStint.startTime)
    : null
  const currentStintMs = currentStintStart
    ? Math.max(0, now - currentStintStart)
    : stint.currentStintDuration  // fallback

  const stintPercent = Math.min((currentStintMs / MAX_STINT_MS) * 100, 100)
  const isWarning = currentStintMs >= WARN_STINT_MS
  const isDanger = currentStintMs >= MAX_STINT_MS

  // Pit stop timer: 后端追踪 st 变化并记录精确进站时间
  const inPit = pitStatus?.inPit || (teamItem && teamItem.st >= 2) || false
  const pitEnterTime = pitStatus?.enterTime || null
  const pitElapsed = inPit && pitEnterTime ? now - pitEnterTime : 0
  const pitRemaining = inPit ? Math.max(0, MIN_PIT_MS - pitElapsed) : 0

  // 合并棒次列表
  const stintList = useMemo(() => {
    if (!pitAnalysis) return []
    const pits = pitAnalysis.pits
    const stints = pitAnalysis.stints
    const list: { stintNo: number; driver: string; laps: number; startLap: number; endLap: number; duration: number; startTime: string; endTime: string; pitSec: number | null; pitBelowMin: boolean }[] = []

    stints.forEach((s, idx) => {
      const pit = pits[idx] || null
      const startMs = parseRiTime(s.startTime)
      const endMs = parseRiTime(s.endTime)
      const duration = (startMs && endMs) ? endMs - startMs : 0
      const driverData = accurateDrivers?.perStint[idx]
      // 提取时分秒 (从 "2026/5/17 13:06:08" 取 "13:06")
      const timeStr = s.startTime?.match(/(\d+:\d+):\d+$/)?.[1] || ''
      const endTimeStr = s.endTime?.match(/(\d+:\d+):\d+$/)?.[1] || ''
      list.push({
        stintNo: idx + 1,
        driver: driverData?.driver || '未知',
        laps: s.laps,
        startLap: s.startLap,
        endLap: s.endLap,
        duration,
        startTime: timeStr,
        endTime: endTimeStr,
        pitSec: pit ? pit.pitDurationSec : null,
        pitBelowMin: pit ? pit.belowMin : false,
      })
    })

    // 当前棒
    if (pitAnalysis.currentStint) {
      const cs = pitAnalysis.currentStint
      const timeStr = cs.startTime?.match(/(\d+:\d+):\d+$/)?.[1] || ''
      list.push({
        stintNo: stints.length + 1,
        driver: stint.currentDriver,
        laps: cs.currentLap - cs.startLap + 1,
        startLap: cs.startLap,
        endLap: cs.currentLap,
        duration: currentStintMs,
        startTime: timeStr,
        endTime: '',
        pitSec: null,
        pitBelowMin: false,
      })
    }

    return list
  }, [pitAnalysis, accurateDrivers, stint.currentDriver, currentStintMs])

  const totalStints = stintList.length

  // 选中的棒次 (null = 当前棒)
  const viewStint = selectedStintNo
    ? stintList.find(s => s.stintNo === selectedStintNo) || stintList[stintList.length - 1]
    : stintList[stintList.length - 1]
  const isViewingCurrent = !selectedStintNo || selectedStintNo === totalStints

  return (
    <div className="bg-gray-800 rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3">
      {/* 车队名 */}
      <h3 className="font-semibold text-orange-400 text-sm">
        {stint.teamName} {teamItem && `#${teamItem.carNo}`}
      </h3>

      {/* 1. 棒次信息: 车手 + 第几棒 + 时长 */}
      {viewStint && (
        <div className={`rounded p-3 ${isViewingCurrent ? 'bg-gray-700/50' : 'bg-indigo-900/30 border border-indigo-700/40'}`}>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xs text-gray-400">第{viewStint.stintNo}棒{!isViewingCurrent && ' (历史)'}</span>
              <span className="ml-2 text-sm font-semibold text-white">{viewStint.driver}</span>
              {!isViewingCurrent && viewStint.startTime && (
                <span className="ml-2 text-[10px] text-gray-500">{viewStint.startTime}-{viewStint.endTime}</span>
              )}
            </div>
            <div className="text-right">
              <span className={`font-mono text-lg font-bold ${isViewingCurrent ? (isDanger ? 'text-red-400 animate-pulse' : isWarning ? 'text-yellow-400' : 'text-green-400') : 'text-indigo-300'}`}>
                {formatDuration(viewStint.duration)}
              </span>
              {!isViewingCurrent && (
                <div className="text-[10px] text-gray-500">L{viewStint.startLap}-{viewStint.endLap} ({viewStint.laps}圈)</div>
              )}
            </div>
          </div>
          {isViewingCurrent && (
            <>
              <div className="w-full bg-gray-600 rounded-full h-1.5 mt-2">
                <div
                  className={`h-1.5 rounded-full transition-all ${isDanger ? 'bg-red-500' : isWarning ? 'bg-yellow-500' : 'bg-green-500'}`}
                  style={{ width: `${stintPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 mt-0.5">
                <span>0</span>
                <span>60min</span>
                <span>70min MAX</span>
              </div>
            </>
          )}
          {!isViewingCurrent && (
            <button onClick={() => setSelectedStintNo(null)} className="text-[10px] text-indigo-400 hover:text-indigo-300 mt-1">← 返回当前棒</button>
          )}
        </div>
      )}

      {/* 2. 圈速曲线 */}
      {(() => {
        if (!lapData || !viewStint) return null
        const startLap = viewStint.startLap
        const endLap = viewStint.endLap
        const baseTm = pitAnalysis?.baseLapTm || 60000
        const threshold = baseTm * 1.6
        const laps = lapData.filter(l => l.laps >= startLap && l.laps <= endLap && l.lapTm > 0 && l.lapTm < threshold)
        if (laps.length < 2) return null

        const times = laps.map(l => l.lapTm)
        const minT = Math.min(...times)
        const maxT = Math.max(...times)
        const range = Math.max(maxT - minT, 800)
        const padT = range * 0.2
        const lo = minT - padT
        const hi = maxT + padT
        const avgTm = times.reduce((a, b) => a + b, 0) / times.length

        // 趋势（线性回归）
        const n = times.length
        const sumX = times.reduce((s, _, i) => s + i, 0)
        const sumY = times.reduce((s, v) => s + v, 0)
        const sumXY = times.reduce((s, v, i) => s + i * v, 0)
        const sumX2 = times.reduce((s, _, i) => s + i * i, 0)
        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX)
        const intercept = (sumY - slope * sumX) / n
        const trendStart = intercept
        const trendEnd = intercept + slope * (n - 1)
        const recent5 = times.slice(-Math.min(5, Math.floor(n / 2)))
        const first5 = times.slice(0, Math.min(5, Math.floor(n / 2)))
        const recent5Avg = recent5.reduce((a, b) => a + b, 0) / recent5.length
        const first5Avg = first5.reduce((a, b) => a + b, 0) / first5.length
        const delta = recent5Avg - first5Avg

        // 秒数格式: 69541 → "69.5"
        const fmt = (ms: number) => (ms / 1000).toFixed(1)
        const fmtFull = (ms: number) => (ms / 1000).toFixed(3)

        // 布局：最小边距，最大化图表区域
        const ML = 4, MR = 4, MT = 14, MB = 12
        const W = 300, H = 120
        const cW = W - ML - MR, cH = H - MT - MB

        const toX = (i: number) => ML + (i / Math.max(laps.length - 1, 1)) * cW
        const toY = (t: number) => MT + cH - ((t - lo) / (hi - lo)) * cH

        const polyPts = laps.map((l, i) => `${toX(i)},${toY(l.lapTm)}`).join(' ')
        // 渐变填充区域
        const areaPts = `${toX(0)},${MT + cH} ${polyPts} ${toX(laps.length - 1)},${MT + cH}`
        const avgY = toY(avgTm)

        // Y 轴只标 2 条: 最快和最慢
        const yLabels = [
          { val: minT, color: '#a78bfa', label: fmt(minT) },
          { val: maxT, color: '#6b7280', label: fmt(maxT) },
        ]
        // X 轴圈号
        const xStep = Math.max(1, Math.ceil(laps.length / 6))
        const xIdxs = laps.map((_, i) => i).filter(i => i % xStep === 0 || i === laps.length - 1)

        // 找最快和最慢的索引
        const bestIdx = times.indexOf(minT)
        const worstIdx = times.indexOf(maxT)

        return (
          <div className="bg-gray-900/60 rounded-lg p-2">
            {/* 统计栏 */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-gray-400">{laps.length}圈</span>
                <span className="text-xs font-mono font-bold text-purple-300">{fmtFull(minT)}s</span>
                <span className="text-[10px] text-gray-500">最快</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-500">均</span>
                <span className="text-xs font-mono text-gray-300">{fmt(avgTm)}s</span>
                {n >= 4 && (
                  <>
                    <span className="text-[10px] text-gray-600">|</span>
                    <span className={`text-xs font-mono font-semibold ${delta > 500 ? 'text-red-400' : delta < -500 ? 'text-green-400' : 'text-gray-500'}`}>
                      {delta > 0 ? '↑' : delta < -500 ? '↓' : '→'}{Math.abs(delta / 1000).toFixed(1)}s
                    </span>
                  </>
                )}
              </div>
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: '120px' }}>
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              {/* Y 轴刻度 */}
              {yLabels.map((t, i) => (
                <g key={`y${i}`}>
                  <line x1={ML} y1={toY(t.val)} x2={W - MR} y2={toY(t.val)} stroke="#374151" strokeWidth="0.4" />
                  <text x={ML + 2} y={toY(t.val) - 2} textAnchor="start" fill={t.color} fontSize="7" fontFamily="monospace" opacity="0.7">{t.label}</text>
                </g>
              ))}
              {/* 均值虚线 */}
              <line x1={ML} y1={avgY} x2={W - MR} y2={avgY} stroke="#8b5cf6" strokeWidth="0.6" strokeDasharray="3,3" opacity="0.4" />
              <text x={W - MR - 2} y={avgY - 2} textAnchor="end" fill="#8b5cf6" fontSize="6.5" opacity="0.6">avg</text>
              {/* X 轴圈号 */}
              {xIdxs.map(i => (
                <text key={`x${i}`} x={toX(i)} y={H - 1} textAnchor="middle" fill="#4b5563" fontSize="7">{laps[i].laps}</text>
              ))}
              {/* 趋势线 */}
              {n >= 4 && (
                <line x1={toX(0)} y1={toY(trendStart)} x2={toX(n - 1)} y2={toY(trendEnd)}
                  stroke={delta > 500 ? '#f87171' : delta < -500 ? '#34d399' : '#6b7280'}
                  strokeWidth="1.2" strokeDasharray="6,4" opacity="0.5" />
              )}
              {/* 面积填充 */}
              <polygon points={areaPts} fill="url(#areaGrad)" />
              {/* 主折线 */}
              <polyline points={polyPts} fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
              {/* 数据点 */}
              {laps.map((l, i) => {
                const x = toX(i)
                const y = toY(l.lapTm)
                const isBest = i === bestIdx
                const isWorst = i === worstIdx
                const r = isBest ? 5 : isWorst ? 4 : 2.5
                const fill = isBest ? '#c084fc' : isWorst ? '#f87171' : '#a78bfa'
                return (
                  <g key={i}>
                    {(isBest || isWorst) && <circle cx={x} cy={y} r={r + 3} fill={fill} opacity="0.15" />}
                    <circle cx={x} cy={y} r={r} fill={fill}
                      stroke={isBest ? '#e9d5ff' : isWorst ? '#fecaca' : '#1f2937'} strokeWidth={isBest || isWorst ? 1.5 : 0.8} />
                    {/* 透明热区，加大点击/hover 范围 */}
                    <circle cx={x} cy={y} r={10} fill="transparent"
                      onMouseEnter={() => setHoverLap({ idx: i, lapNo: l.laps, time: l.lapTm, x, y })}
                      onMouseLeave={() => setHoverLap(null)}
                      style={{ cursor: 'crosshair' }} />
                  </g>
                )
              })}
              {/* hover 指示线 + 标签 */}
              {hoverLap && (() => {
                const hx = hoverLap.x, hy = hoverLap.y
                const isBest = hoverLap.idx === bestIdx
                const isWorst = hoverLap.idx === worstIdx
                const diffFromBest = hoverLap.time - minT
                return (
                  <>
                    <line x1={hx} y1={MT} x2={hx} y2={MT + cH} stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5" />
                    <rect x={hx - 30} y={hy - 32} width="60" height="22" rx="4" fill="#1f2937" stroke="#4b5563" strokeWidth="0.5" opacity="0.95" />
                    <text x={hx} y={hy - 22} textAnchor="middle" fill="#f3f4f6" fontSize="9" fontWeight="bold" fontFamily="monospace">
                      {fmtFull(hoverLap.time)}s
                    </text>
                    <text x={hx} y={hy - 13} textAnchor="middle" fill={isBest ? '#c084fc' : isWorst ? '#f87171' : '#9ca3af'} fontSize="7">
                      L{hoverLap.lapNo}{isBest ? ' ★' : isWorst ? ' ▼' : diffFromBest > 0 ? ` +${(diffFromBest / 1000).toFixed(1)}` : ''}
                    </text>
                  </>
                )
              })()}
              {/* 最快标注 */}
              <text x={toX(bestIdx)} y={toY(minT) - 8} textAnchor="middle" fill="#c084fc" fontSize="9" fontWeight="bold" fontFamily="monospace">{fmt(minT)}</text>
              <text x={toX(bestIdx)} y={toY(minT) - 17} textAnchor="middle" fill="#c084fc" fontSize="6.5" opacity="0.7">★ L{laps[bestIdx].laps}</text>
              {/* 最慢标注 */}
              <text x={toX(worstIdx)} y={toY(maxT) + 13} textAnchor="middle" fill="#f87171" fontSize="8" fontFamily="monospace">{fmt(maxT)}</text>
              {/* 最后一圈标注 */}
              {laps.length > 2 && bestIdx !== laps.length - 1 && worstIdx !== laps.length - 1 && (
                <text x={toX(laps.length - 1)} y={toY(times[times.length - 1]) - 7} textAnchor="end" fill="#9ca3af" fontSize="7.5" fontFamily="monospace">{fmt(times[times.length - 1])}</text>
              )}
            </svg>
          </div>
        )
      })()}

      {/* 3. 进站计时 (仅进站时显示) */}
      {inPit && (
        <div className="bg-yellow-900/40 border border-yellow-600 rounded p-3">
          <div className="flex justify-between items-center">
            <span className="text-yellow-300 font-semibold text-sm">进站中</span>
            <span className={`font-mono text-2xl font-bold ${pitRemaining > 0 ? 'text-yellow-300 animate-pulse' : 'text-green-400'}`}>
              {formatDuration(pitElapsed)}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full transition-all ${pitRemaining > 0 ? 'bg-yellow-500' : 'bg-green-500'}`}
              style={{ width: `${Math.min(100, (pitElapsed / MIN_PIT_MS) * 100)}%` }}
            />
          </div>
          <div className="text-xs text-right mt-1">
            <span className={pitRemaining > 0 ? 'text-yellow-400' : 'text-green-400 font-semibold'}>
              {pitRemaining > 0 ? `还需 ${formatDuration(pitRemaining)}` : '✓ 可出站'}
            </span>
          </div>
        </div>
      )}

      {/* 3. 棒次记录表格 */}
      {stintList.length > 0 && (
        <div>
          <div className="text-xs text-gray-400 mb-1">
            棒次记录 <span className="text-gray-300 font-semibold">{stintList.length}</span> 棒 / 进站 <span className="text-gray-300 font-semibold">{pitAnalysis?.pits.length || 0}</span> 次
          </div>
          <div>
            <table className="w-full text-xs">
              <thead>
                <tr className="text-gray-500 border-b border-gray-700">
                  <th className="text-left py-1 w-6">#</th>
                  <th className="text-left py-1">车手</th>
                  <th className="text-right py-1 w-10">圈</th>
                  <th className="text-right py-1 w-12">出站</th>
                  <th className="text-right py-1 w-12">进站</th>
                  <th className="text-right py-1 w-14">时长</th>
                  <th className="text-right py-1 w-12">停站</th>
                </tr>
              </thead>
              <tbody>
                {stintList.slice().reverse().map((s, ri) => {
                  const isCurrent = ri === 0
                  return (
                  <tr
                    key={s.stintNo}
                    className={`border-b border-gray-700/50 cursor-pointer ${isCurrent ? 'bg-orange-900/20' : s.stintNo === selectedStintNo ? 'bg-indigo-900/30' : 'hover:bg-gray-700/30'}`}
                    onClick={() => setSelectedStintNo(isCurrent ? null : s.stintNo)}
                  >
                    <td className="py-1 text-gray-500">
                      {isCurrent ? <span className="text-orange-400 font-semibold">‣{s.stintNo}</span> : s.stintNo}
                    </td>
                    <td className={`py-1 truncate max-w-[80px] ${isCurrent ? 'text-orange-300 font-semibold' : 'text-gray-200'}`}>{s.driver}</td>
                    <td className="py-1 text-right text-gray-400">{s.laps}</td>
                    <td className="py-1 text-right text-gray-400 font-mono">{s.startTime}</td>
                    <td className="py-1 text-right text-gray-400 font-mono">{isCurrent ? '-' : s.endTime}</td>
                    <td className={`py-1 text-right font-mono font-medium ${isCurrent ? 'text-orange-300' : 'text-gray-200'}`}>{formatDuration(s.duration)}</td>
                    <td className="py-1 text-right font-mono">
                      {s.pitSec !== null ? (
                        <span className={s.pitBelowMin ? 'text-red-400' : 'text-green-400/80'}>
                          {Math.floor(s.pitSec / 60)}:{Math.round(s.pitSec % 60).toString().padStart(2, '0')}
                        </span>
                      ) : (
                        <span className="text-gray-600">-</span>
                      )}
                    </td>
                  </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* 4. 罚单 */}
      {(() => {
        const carNo = teamItem?.carNo
        const teamPenalties = carNo ? controlMessages.filter(m => m.cont.includes(`#${carNo}`)) : []
        return (
          <div className="border-t border-gray-700 pt-2">
            <div className="text-xs text-gray-400 mb-1">
              罚单 <span className={teamPenalties.length > 0 ? 'text-red-400 font-semibold' : 'text-gray-500'}>{teamPenalties.length}</span>
            </div>
            {teamPenalties.length > 0 ? (
              <div className="space-y-1 text-xs max-h-24 overflow-y-auto">
                {teamPenalties.map(p => (
                  <div key={p.id} className="text-gray-300 border-l-2 border-red-600 pl-2 bg-red-900/10 rounded-r px-1 py-0.5">
                    <span className="text-gray-500 mr-1">{p.c_time.split(' ').pop()}</span>
                    {p.cont.replace(/^NO \d+: \S+ /, '').slice(0, 80)}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-xs text-gray-600">暂无罚单</div>
            )}
          </div>
        )
      })()}
    </div>
  )
}
