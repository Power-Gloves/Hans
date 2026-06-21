import { useState, useEffect } from 'react'
import { TeamItem, PitAnalysis } from '../App'

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
  teamItem?: TeamItem
  controlMessages?: ControlMsg[]
  lapData?: LapItem[]
  pitAnalysis?: PitAnalysis | null
  pitTimer?: PitTimerData | null
}

export interface PitTimerData {
  inPit: boolean
  enterTime: number | null
  events: { enterTime: number; exitTime: number; durationMs: number }[]
}

const MIN_PIT_MS = 2 * 60 * 1000 // 强制进站 2 分钟

// 圈速 ms → m:ss.mmm
function formatLap(ms: number): string {
  if (!ms || ms <= 0) return '--'
  const min = Math.floor(ms / 60000)
  const sec = Math.floor((ms % 60000) / 1000)
  const msec = ms % 1000
  return `${min}:${sec.toString().padStart(2, '0')}.${msec.toString().padStart(3, '0')}`
}

// 时长 ms → m:ss
function formatDur(ms: number): string {
  if (!ms || ms <= 0) return '--'
  const totalSec = Math.floor(ms / 1000)
  const min = Math.floor(totalSec / 60)
  const sec = totalSec % 60
  return `${min}:${sec.toString().padStart(2, '0')}`
}

// "2026/5/17 13:59:48" → 13:59:48 时间戳(ms)
function parseRiTime(s?: string | null): number | null {
  if (!s) return null
  const m = s.match(/(\d+)\/(\d+)\/(\d+)\s+(\d+):(\d+):(\d+)/)
  if (!m) return null
  return new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]).getTime()
}
// epoch ms → HH:MM:SS
function clockFromMs(ms: number | null): string {
  if (!ms) return '--'
  const d = new Date(ms)
  return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`
}
// 取 "HH:MM:SS"
function clock(s?: string | null): string {
  const m = (s || '').match(/(\d+:\d+:\d+)$/)
  return m ? m[1] : ''
}

/**
 * 右侧面板 —— 只展示接口直接返回的真实数据：
 *  - 当前车手 / 圈数 / 进站次数 / 最快圈 / 最后圈（实时排名字段，真实）
 *  - 圈速曲线（lapItems 的真实每圈时间）
 *  - 罚单（赛事控制消息，真实）
 * 不含任何估算/推断（进站时长、单棒计时、历史车手归属等已移除）。
 */
export default function StintPanel({ teamItem, controlMessages = [], lapData, pitAnalysis, pitTimer }: Props) {
  const [hoverLap, setHoverLap] = useState<{ idx: number; lapNo: number; time: number; x: number; y: number } | null>(null)
  // 图表棒次选择：null = 全部
  const [chartStint, setChartStint] = useState<number | null>(null)
  // 本地秒级时钟，用于实时计算「进行中」棒的时长
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  if (!teamItem) return null

  // 棒次区间（用于图表按棒切分）：[{no, startLap, endLap, isCurrent}]
  const stintRanges: { no: number; startLap: number; endLap: number; isCurrent: boolean }[] = []
  if (pitAnalysis) {
    pitAnalysis.stints.forEach((s, i) => {
      stintRanges.push({ no: i + 1, startLap: s.startLap, endLap: s.endLap, isCurrent: false })
    })
    if (pitAnalysis.currentStint) {
      stintRanges.push({
        no: stintRanges.length + 1,
        startLap: pitAnalysis.currentStint.startLap,
        endLap: pitAnalysis.currentStint.currentLap,
        isCurrent: true,
      })
    }
  }
  const activeRange = chartStint != null ? stintRanges.find(r => r.no === chartStint) : null

  return (
    <div className="bg-gray-800 rounded-lg p-3 sm:p-4 space-y-3">
      {/* 车队名 + 当前车手 */}
      <div>
        <h3 className="font-semibold text-orange-400 text-sm">
          {teamItem.team} #{teamItem.carNo}
        </h3>
        <div className="text-xs text-gray-400 mt-0.5">
          当前车手：<span className="text-white font-semibold">{teamItem.name || '--'}</span>
        </div>
      </div>

      {/* 真实统计：圈数 / 进站次数 / 最快圈 / 最后圈 */}
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-gray-700/40 rounded p-2">
          <div className="text-[10px] text-gray-500">圈数</div>
          <div className="font-mono font-bold text-sm">{teamItem.laps}</div>
        </div>
        <div className="bg-gray-700/40 rounded p-2">
          <div className="text-[10px] text-gray-500">进站</div>
          <div className="font-mono font-bold text-sm">{teamItem.pitstops ?? 0}</div>
        </div>
        <div className="bg-gray-700/40 rounded p-2">
          <div className="text-[10px] text-gray-500">最快圈</div>
          <div className="font-mono font-bold text-sm text-purple-300">{formatLap(teamItem.bestTm)}</div>
        </div>
        <div className="bg-gray-700/40 rounded p-2">
          <div className="text-[10px] text-gray-500">最后圈</div>
          <div className="font-mono font-bold text-sm">{formatLap(teamItem.lastTm)}</div>
        </div>
      </div>

      {/* 圈速曲线（真实每圈时间，可按棒切分；隐藏明显异常的进站圈以便看清） */}
      {stintRanges.length > 0 && (
        <div className="flex flex-wrap gap-1">
          <button
            className={`px-2 py-0.5 text-[11px] rounded ${chartStint == null ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            onClick={() => setChartStint(null)}
          >全部</button>
          {stintRanges.map(r => (
            <button
              key={r.no}
              className={`px-2 py-0.5 text-[11px] rounded ${chartStint === r.no ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              onClick={() => setChartStint(r.no)}
              title={`L${r.startLap}-${r.endLap}`}
            >
              {r.isCurrent ? '当前棒' : `第${r.no}棒`}
            </button>
          ))}
        </div>
      )}
      {(() => {
        if (!lapData || lapData.length < 2) return null
        // 选中某棒 → 只取该棒区间；否则取最近 40 圈
        const source = activeRange
          ? lapData.filter(l => l.laps >= activeRange.startLap && l.laps <= activeRange.endLap)
          : lapData.slice(-40)
        const recent = source
        // 中位数估算正常圈速，仅用于「图表缩放/隐藏异常圈」，不产生任何对外数据
        const sortedAll = recent.map(l => l.lapTm).filter(t => t > 0).sort((a, b) => a - b)
        const median = sortedAll[Math.floor(sortedAll.length / 2)] || 70000
        const laps = recent.filter(l => l.lapTm > 0 && l.lapTm < median * 1.6)
        if (laps.length < 2) return (
          <div className="bg-gray-900/60 rounded-lg p-3 text-xs text-gray-600 text-center">该棒圈数不足，无法绘图</div>
        )

        const times = laps.map(l => l.lapTm)
        const minT = Math.min(...times)
        const maxT = Math.max(...times)
        const range = Math.max(maxT - minT, 800)
        const padT = range * 0.2
        const lo = minT - padT
        const hi = maxT + padT
        const avgTm = times.reduce((a, b) => a + b, 0) / times.length
        const hiddenCount = recent.length - laps.length

        const fmt = (ms: number) => (ms / 1000).toFixed(1)
        const fmtFull = (ms: number) => (ms / 1000).toFixed(3)

        const ML = 4, MR = 4, MT = 14, MB = 12
        const W = 300, H = 120
        const cW = W - ML - MR, cH = H - MT - MB
        const toX = (i: number) => ML + (i / Math.max(laps.length - 1, 1)) * cW
        const toY = (t: number) => MT + cH - ((t - lo) / (hi - lo)) * cH

        const polyPts = laps.map((l, i) => `${toX(i)},${toY(l.lapTm)}`).join(' ')
        const areaPts = `${toX(0)},${MT + cH} ${polyPts} ${toX(laps.length - 1)},${MT + cH}`
        const avgY = toY(avgTm)
        const yLabels = [
          { val: minT, color: '#a78bfa', label: fmt(minT) },
          { val: maxT, color: '#6b7280', label: fmt(maxT) },
        ]
        const xStep = Math.max(1, Math.ceil(laps.length / 6))
        const xIdxs = laps.map((_, i) => i).filter(i => i % xStep === 0 || i === laps.length - 1)
        const bestIdx = times.indexOf(minT)
        const worstIdx = times.indexOf(maxT)

        return (
          <div className="bg-gray-900/60 rounded-lg p-2">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-gray-400">{activeRange ? `${activeRange.isCurrent ? '当前棒' : '第' + activeRange.no + '棒'} ${laps.length}圈` : `近 ${laps.length} 圈`}</span>
                <span className="text-xs font-mono font-bold text-purple-300">{fmtFull(minT)}s</span>
                <span className="text-[10px] text-gray-500">最快</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-500">均</span>
                <span className="text-xs font-mono text-gray-300">{fmt(avgTm)}s</span>
                {hiddenCount > 0 && (
                  <span className="text-[10px] text-gray-600">· 隐藏{hiddenCount}进站圈</span>
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
              {yLabels.map((t, i) => (
                <g key={`y${i}`}>
                  <line x1={ML} y1={toY(t.val)} x2={W - MR} y2={toY(t.val)} stroke="#374151" strokeWidth="0.4" />
                  <text x={ML + 2} y={toY(t.val) - 2} textAnchor="start" fill={t.color} fontSize="7" fontFamily="monospace" opacity="0.7">{t.label}</text>
                </g>
              ))}
              <line x1={ML} y1={avgY} x2={W - MR} y2={avgY} stroke="#8b5cf6" strokeWidth="0.6" strokeDasharray="3,3" opacity="0.4" />
              <text x={W - MR - 2} y={avgY - 2} textAnchor="end" fill="#8b5cf6" fontSize="6.5" opacity="0.6">avg</text>
              {xIdxs.map(i => (
                <text key={`x${i}`} x={toX(i)} y={H - 1} textAnchor="middle" fill="#4b5563" fontSize="7">{laps[i].laps}</text>
              ))}
              <polygon points={areaPts} fill="url(#areaGrad)" />
              <polyline points={polyPts} fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
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
                    <circle cx={x} cy={y} r={10} fill="transparent"
                      onMouseEnter={() => setHoverLap({ idx: i, lapNo: l.laps, time: l.lapTm, x, y })}
                      onMouseLeave={() => setHoverLap(null)}
                      style={{ cursor: 'crosshair' }} />
                  </g>
                )
              })}
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
              <text x={toX(bestIdx)} y={toY(minT) - 8} textAnchor="middle" fill="#c084fc" fontSize="9" fontWeight="bold" fontFamily="monospace">{fmt(minT)}</text>
              <text x={toX(bestIdx)} y={toY(minT) - 17} textAnchor="middle" fill="#c084fc" fontSize="6.5" opacity="0.7">★ L{laps[bestIdx].laps}</text>
              <text x={toX(worstIdx)} y={toY(maxT) + 13} textAnchor="middle" fill="#f87171" fontSize="8" fontFamily="monospace">{fmt(maxT)}</text>
            </svg>
          </div>
        )
      })()}

      {/* 进站实时计时（基于 st 跳变，进站期间加密轮询，秒级精度） */}
      {pitTimer?.inPit && !pitTimer.enterTime && (
        <div className="bg-yellow-900/30 border border-yellow-700/50 rounded p-2 text-xs text-yellow-400">
          🅿️ 进站中（开始监控前已进站，进P时刻未捕捉，本次不计时）
        </div>
      )}
      {pitTimer?.inPit && pitTimer.enterTime && (() => {
        const elapsed = Math.max(0, now - pitTimer.enterTime)
        const remaining = Math.max(0, MIN_PIT_MS - elapsed)
        const done = remaining <= 0
        return (
          <div className="bg-yellow-900/40 border border-yellow-600 rounded p-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-yellow-300 font-semibold text-sm">进站中</span>
                <span className="ml-2 text-[10px] text-gray-400">进P {clockFromMs(pitTimer.enterTime)}</span>
              </div>
              <span className={`font-mono text-2xl font-bold ${done ? 'text-green-400' : 'text-yellow-300 animate-pulse'}`}>
                {formatDur(elapsed)}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div className={`h-2 rounded-full ${done ? 'bg-green-500' : 'bg-yellow-500'}`}
                style={{ width: `${Math.min(100, (elapsed / MIN_PIT_MS) * 100)}%` }} />
            </div>
            <div className="text-xs text-right mt-1">
              <span className={done ? 'text-green-400 font-semibold' : 'text-yellow-400'}>
                {done ? '✓ 已满 2 分钟，可出站' : `还需 ${formatDur(remaining)}`}
              </span>
            </div>
          </div>
        )
      })()}

      {/* 真实棒次记录（圈数/进站时刻/单棒时长，全来自真实过线时刻） */}
      {pitAnalysis && (pitAnalysis.stints.length > 0 || pitAnalysis.currentStint) && (() => {
        const rows = pitAnalysis.stints.map((s, i) => {
          const startMs = parseRiTime(s.startTime)
          const endMs = parseRiTime(s.endTime)
          return {
            no: i + 1,
            startLap: s.startLap,
            endLap: s.endLap,
            laps: s.laps,
            pitTime: clock(s.endTime),       // 进站时刻 = 该棒结束(进站圈)过线时刻
            duration: startMs && endMs ? endMs - startMs : 0,
            current: false,
          }
        })
        const cs = pitAnalysis.currentStint
        if (cs) {
          const startMs = parseRiTime(cs.startTime)
          rows.push({
            no: rows.length + 1,
            startLap: cs.startLap,
            endLap: cs.currentLap,
            laps: cs.currentLap - cs.startLap + 1,
            pitTime: '',
            duration: startMs ? Math.max(0, now - startMs) : 0,
            current: true,
          })
        }
        return (
          <div>
            <div className="text-xs text-gray-400 mb-1">
              棒次记录 <span className="text-gray-300 font-semibold">{rows.length}</span> 棒
              <span className="ml-1">/ 进站 <span className="text-gray-300 font-semibold">{pitAnalysis.pitCount}</span> 次</span>
              {pitAnalysis.realPitstops !== null && pitAnalysis.realPitstops !== pitAnalysis.pitCount && (
                <span className="ml-1 text-yellow-500">(接口计数 {pitAnalysis.realPitstops})</span>
              )}
            </div>
            <table className="w-full text-xs">
              <thead>
                <tr className="text-gray-500 border-b border-gray-700">
                  <th className="text-left py-1 w-6">#</th>
                  <th className="text-right py-1">起止圈</th>
                  <th className="text-right py-1 w-10">圈数</th>
                  <th className="text-right py-1 w-16">进站时刻</th>
                  <th className="text-right py-1 w-14">单棒时长</th>
                </tr>
              </thead>
              <tbody>
                {rows.slice().reverse().map(r => (
                  <tr key={r.no} className={`border-b border-gray-700/50 ${r.current ? 'bg-orange-900/20' : ''}`}>
                    <td className="py-1 text-gray-500">
                      {r.current ? <span className="text-orange-400 font-semibold">‣{r.no}</span> : r.no}
                    </td>
                    <td className="py-1 text-right font-mono text-gray-400">L{r.startLap}-{r.endLap}</td>
                    <td className="py-1 text-right font-mono">{r.laps}</td>
                    <td className="py-1 text-right font-mono text-gray-400">{r.current ? '进行中' : r.pitTime}</td>
                    <td className={`py-1 text-right font-mono font-medium ${r.current ? 'text-orange-300' : 'text-gray-200'}`}>{formatDur(r.duration)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-[10px] text-gray-600 mt-1">数据来自真实过线时刻；进站圈经 pitstops 交叉校验。</div>
          </div>
        )
      })()}

      {/* 进站记录（进P/出P/时长，基于 st 跳变，秒级精度） */}
      {pitTimer && pitTimer.events.length > 0 && (
        <div>
          <div className="text-xs text-gray-400 mb-1">
            进站记录（进P / 出P）<span className="text-gray-300 font-semibold ml-1">{pitTimer.events.length}</span> 次
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="text-gray-500 border-b border-gray-700">
                <th className="text-left py-1 w-6">#</th>
                <th className="text-right py-1">进P</th>
                <th className="text-right py-1">出P</th>
                <th className="text-right py-1 w-16">停留</th>
              </tr>
            </thead>
            <tbody>
              {pitTimer.events.slice().reverse().map((e, ri) => {
                const no = pitTimer.events.length - ri
                const below = e.durationMs < MIN_PIT_MS
                return (
                  <tr key={no} className="border-b border-gray-700/50">
                    <td className="py-1 text-gray-500">{no}</td>
                    <td className="py-1 text-right font-mono text-gray-400">{clockFromMs(e.enterTime)}</td>
                    <td className="py-1 text-right font-mono text-gray-400">{clockFromMs(e.exitTime)}</td>
                    <td className={`py-1 text-right font-mono font-medium ${below ? 'text-red-400' : 'text-green-400/80'}`}>
                      {formatDur(e.durationMs)}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="text-[10px] text-gray-600 mt-1">基于车辆状态(st)跳变捕捉，精度≈轮询间隔（进站时已加密）。非赛会官方计时。</div>
        </div>
      )}

      {/* 罚单（真实赛事控制消息） */}
      {(() => {
        const carNo = teamItem.carNo
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
