interface ResultItem {
  pos: number
  carNo: string
  name: string
  carTeam: string
  laps: number
  bestTm: number
  totalTm: number
  gap: number
  diff: number
  st: number
}

interface ResultGroup { name: string; total?: number; items: ResultItem[] }

export interface ResultData {
  round?: string
  sessionName?: string
  groupList?: { name: string; total: number }[]
  groups: ResultGroup[]
}

interface Props {
  data: ResultData
  onBack: () => void
}

function formatTime(ms: number): string {
  if (!ms || ms <= 0) return '--'
  const min = Math.floor(ms / 60000)
  const sec = Math.floor((ms % 60000) / 1000)
  const msec = ms % 1000
  return `${min}:${sec.toString().padStart(2, '0')}.${msec.toString().padStart(3, '0')}`
}

// 总用时 ms → H:MM:SS
function formatTotal(ms: number): string {
  if (!ms || ms <= 0) return '--'
  const h = Math.floor(ms / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

// 对榜首差距：用 totalTm（总用时）精确计算；落后整圈显示圈数
function formatGapToLeader(item: ResultItem, leader: ResultItem): string {
  if (item.pos === 1) return '--'
  const lapsBehind = leader.laps - item.laps
  if (lapsBehind > 0) return `+${lapsBehind} 圈`
  if (item.totalTm > 0 && leader.totalTm > 0) {
    const d = item.totalTm - leader.totalTm
    return d > 0 ? `+${(d / 1000).toFixed(3)}` : '--'
  }
  return '--'
}

export default function ResultsView({ data, onBack }: Props) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between bg-gray-800 rounded-lg px-4 py-3">
        <div className="min-w-0">
          <div className="text-sm font-semibold text-orange-400 truncate">
            {data.round ? `${data.round} · ` : ''}{data.sessionName || '最终成绩'}
          </div>
          <div className="text-xs text-gray-500">已结束比赛 · 最终成绩</div>
        </div>
        <button
          className="bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded text-xs whitespace-nowrap"
          onClick={onBack}
        >
          ← 返回选择
        </button>
      </div>

      {data.groups.length === 0 && (
        <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-500">暂无成绩数据</div>
      )}

      {data.groups.map((g, gi) => {
        const leader = g.items[0]
        return (
          <div key={gi} className="bg-gray-800 rounded-lg overflow-hidden">
            {data.groups.length > 1 && (
              <div className="bg-gray-700 px-3 py-2 text-sm font-semibold">{g.name}</div>
            )}
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-700/50 text-gray-300">
                    <th className="px-2 py-2 text-left w-10">名次</th>
                    <th className="px-2 py-2 text-left w-14">车号</th>
                    <th className="px-2 py-2 text-left">车队</th>
                    <th className="px-2 py-2 text-right">圈数</th>
                    <th className="px-2 py-2 text-right hidden sm:table-cell">最快圈</th>
                    <th className="px-2 py-2 text-right hidden md:table-cell">总用时</th>
                    <th className="px-2 py-2 text-right">差距</th>
                  </tr>
                </thead>
                <tbody>
                  {g.items.map((it, i) => (
                    <tr key={`${it.carNo}-${i}`} className={`border-t border-gray-700 ${it.pos <= 3 ? 'bg-orange-900/10' : ''}`}>
                      <td className="px-2 py-1.5 font-bold">
                        {it.pos === 1 ? '🥇' : it.pos === 2 ? '🥈' : it.pos === 3 ? '🥉' : it.pos}
                      </td>
                      <td className="px-2 py-1.5 font-mono">{it.carNo}</td>
                      <td className="px-2 py-1.5 font-semibold truncate max-w-[140px]">{it.carTeam || it.name}</td>
                      <td className="px-2 py-1.5 text-right font-mono">{it.laps}</td>
                      <td className="px-2 py-1.5 text-right font-mono text-purple-300 hidden sm:table-cell">{formatTime(it.bestTm)}</td>
                      <td className="px-2 py-1.5 text-right font-mono text-gray-400 hidden md:table-cell">{formatTotal(it.totalTm)}</td>
                      <td className="px-2 py-1.5 text-right font-mono text-yellow-300">{formatGapToLeader(it, leader)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      })}
    </div>
  )
}
