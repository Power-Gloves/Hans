import { useState, useEffect } from 'react'

interface Station { id: number; name: string; sname: string }
interface Race { id: number; name: string }
interface Round { id: number; name: string; isDefault: number }
interface Session {
  id: number
  name: string
  status: number       // 0等待 1准备 2进行中 3已完成
  stName: string
  type: number         // 1练习 2排位 3正赛
  typeName: string
  startTime: string
  time: string
}
interface SessionGroup { id: number; name: string; sessions: Session[]; loaded: boolean }

interface Props {
  onStart: (ssid: string, pid: string, teamId?: string) => void
  onViewResults: (ssid: string, pid: string, name: string) => void
  onReplay: (filename: string) => void
}

// 把名称含关键词的项排到最前（稳定排序，其余保持原顺序）
function pinFirst<T>(arr: T[], match: (v: T) => boolean): T[] {
  return arr
    .map((v, i) => ({ v, i }))
    .sort((a, b) => {
      const am = match(a.v) ? 0 : 1
      const bm = match(b.v) ? 0 : 1
      return am !== bm ? am - bm : a.i - b.i
    })
    .map(x => x.v)
}
const isCRKC = (s: Station) => /CRKC/i.test(s.name || '') || /CRKC/i.test(s.sname || '')

// 状态徽章样式
function statusBadge(status: number, stName: string) {
  switch (status) {
    case 2: return { text: stName || '进行中', cls: 'bg-red-500 text-white animate-pulse' }
    case 1: return { text: stName || '准备中', cls: 'bg-yellow-600 text-yellow-50' }
    case 0: return { text: stName || '等待中', cls: 'bg-gray-600 text-gray-200' }
    case 3: return { text: stName || '已完成', cls: 'bg-green-900/60 text-green-300' }
    default: return { text: stName || '', cls: 'bg-gray-600 text-gray-200' }
  }
}

export default function ConnectPanel({ onStart, onViewResults, onReplay }: Props) {
  const [stations, setStations] = useState<Station[]>([])
  const [races, setRaces] = useState<Race[]>([])
  const [rounds, setRounds] = useState<Round[]>([])
  const [groups, setGroups] = useState<SessionGroup[]>([])

  const [ssid, setSsid] = useState('')
  const [raceId, setRaceId] = useState('')
  const [roundId, setRoundId] = useState('')
  const [pid, setPid] = useState('')
  const [selected, setSelected] = useState<Session | null>(null)
  const [expandedGroup, setExpandedGroup] = useState<number | null>(null)
  const [groupLoading, setGroupLoading] = useState<number | null>(null)
  const [loading, setLoading] = useState('')
  const [error, setError] = useState('')
  // 开发/回放：本地存档
  const [savedFiles, setSavedFiles] = useState<{ filename: string; size: number }[]>([])
  const [showReplay, setShowReplay] = useState(false)

  // 1. Fetch stations
  useEffect(() => {
    setLoading('stations')
    fetch('/api/stations')
      .then(r => r.json())
      .then(data => {
        const list: Station[] = data.items || []
        setStations(pinFirst(list, isCRKC))   // 仅把 CRKC 排到最前，不自动选中
        setError('')
      })
      .catch(e => setError('获取赛场列表失败: ' + e.message))
      .finally(() => setLoading(''))
  }, [])

  // 2. Fetch races when station changes (get-race-list-group)
  useEffect(() => {
    if (!ssid) { setRaces([]); setRounds([]); setGroups([]); return }
    setRaceId(''); setRoundId(''); setPid(''); setSelected(null)
    setGroups([]); setRounds([])
    setLoading('races')
    fetch(`/api/races/${ssid}`)
      .then(r => r.json())
      .then(data => {
        const list = data.items || []
        const allRaces: Race[] = []
        if (Array.isArray(list)) {
          list.forEach((g: { id?: number; name?: string }) => {
            if (g.id) allRaces.push({ id: g.id, name: g.name || '' })
          })
        }
        setRaces(allRaces)
        if (allRaces.length) setRaceId(String(allRaces[0].id))
        setError('')
      })
      .catch(e => setError('获取赛事列表失败: ' + e.message))
      .finally(() => setLoading(''))
  }, [ssid])

  // 3. Fetch rounds (分站) when race changes (get-race-round-list)
  useEffect(() => {
    if (!ssid || !raceId) { setRounds([]); setGroups([]); return }
    setRoundId(''); setPid(''); setSelected(null)
    setGroups([])
    setLoading('rounds')
    fetch(`/api/rounds/${ssid}/${raceId}`)
      .then(r => r.json())
      .then(data => {
        const list = data.items || []
        setRounds(list)
        const def = list.find((r: Round) => r.isDefault === 1)
        if (def) setRoundId(String(def.id))
        else if (list.length) setRoundId(String(list[0].id))
        setError('')
      })
      .catch(e => setError('获取分站列表失败: ' + e.message))
      .finally(() => setLoading(''))
  }, [ssid, raceId])

  // 4. Fetch 场次「组」列表（懒加载）when round changes —— get-race-calendar-list
  useEffect(() => {
    if (!ssid || !roundId) { setGroups([]); return }
    setPid(''); setSelected(null); setExpandedGroup(null)
    setLoading('sessions')
    fetch(`/api/sessions/${ssid}/${roundId}`)
      .then(r => r.json())
      .then(data => {
        const gs: SessionGroup[] = data.groups || []
        setGroups(gs)
        // 默认展开第一个组（通常已带场次），并在其中自动选中进行中/等待中的场次
        const firstLoaded = gs.find(g => g.loaded && g.sessions.length > 0) || gs[0]
        if (firstLoaded) {
          setExpandedGroup(firstLoaded.id)
          const auto = firstLoaded.sessions.find(s => s.status === 2)
            || firstLoaded.sessions.find(s => s.status === 0 || s.status === 1)
          if (auto) { setPid(String(auto.id)); setSelected(auto) }
        }
        setError('')
      })
      .catch(e => setError('获取场次失败: ' + e.message))
      .finally(() => setLoading(''))
  }, [ssid, roundId])

  // 展开/收起某组：未加载过则按需拉取该组场次
  const toggleGroup = (g: SessionGroup) => {
    if (expandedGroup === g.id) { setExpandedGroup(null); return }
    setExpandedGroup(g.id)
    if (!g.loaded) {
      setGroupLoading(g.id)
      fetch(`/api/session-group/${ssid}/${roundId}/${g.id}`)
        .then(r => r.json())
        .then(data => {
          setGroups(prev => prev.map(x =>
            x.id === g.id ? { ...x, sessions: data.sessions || [], loaded: true } : x
          ))
        })
        .catch(e => setError('获取场次明细失败: ' + e.message))
        .finally(() => setGroupLoading(null))
    }
  }

  const selectedStation = stations.find(s => String(s.id) === ssid)

  return (
    <div className="bg-gray-800 rounded-lg p-6 max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">选择比赛</h2>

      {error && <div className="bg-red-900/30 border border-red-600 text-red-300 text-sm rounded p-2 mb-3">{error}</div>}

      <div className="space-y-4">
        {/* Step 1: Station */}
        <div>
          <label className="text-sm text-gray-400 block mb-1">赛场 / 赛事系列</label>
          {loading === 'stations' ? (
            <div className="text-gray-500 text-sm py-2">加载赛场列表...</div>
          ) : (
            <select
              className="w-full bg-gray-700 rounded px-3 py-2.5 text-white"
              value={ssid}
              onChange={e => setSsid(e.target.value)}
            >
              <option value="">-- 请选择 --</option>
              {stations.map(s => (
                <option key={s.id} value={String(s.id)}>{(isCRKC(s) ? '⭐ ' : '') + s.name}</option>
              ))}
            </select>
          )}
        </div>

        {/* Step 2: Race (赛事) */}
        {ssid && races.length > 0 && (
          <div>
            <label className="text-sm text-gray-400 block mb-1">赛事</label>
            <select
              className="w-full bg-gray-700 rounded px-3 py-2.5 text-white"
              value={raceId}
              onChange={e => setRaceId(e.target.value)}
            >
              {races.map(r => (
                <option key={r.id} value={String(r.id)}>{r.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* Step 2b: Round (分站) */}
        {ssid && rounds.length > 0 && (
          <div>
            <label className="text-sm text-gray-400 block mb-1">分站</label>
            <select
              className="w-full bg-gray-700 rounded px-3 py-2.5 text-white"
              value={roundId}
              onChange={e => setRoundId(e.target.value)}
            >
              {rounds.map(r => (
                <option key={r.id} value={String(r.id)}>{r.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* Step 3: 场次浏览器（按组展开） */}
        {loading === 'sessions' ? (
          <div className="text-gray-500 text-sm py-2">加载全部场次...</div>
        ) : groups.length > 0 && (
          <div>
            <label className="text-sm text-gray-400 block mb-1">比赛场次（点击展开组，选择具体场次）</label>
            <div className="border border-gray-700 rounded divide-y divide-gray-700 max-h-80 overflow-y-auto">
              {groups.map(g => {
                const open = expandedGroup === g.id
                const liveCount = g.sessions.filter(s => s.status === 2).length
                return (
                  <div key={g.id}>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-gray-700/50"
                      onClick={() => toggleGroup(g)}
                    >
                      <span className="font-semibold text-sm flex items-center gap-2">
                        <span className="text-gray-500">{open ? '▾' : '▸'}</span>
                        {g.name}
                        {liveCount > 0 && (
                          <span className="text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded animate-pulse">直播中</span>
                        )}
                      </span>
                      <span className="text-xs text-gray-500">{g.loaded ? `${g.sessions.length} 场` : '展开'}</span>
                    </button>
                    {open && (
                      <div className="bg-gray-900/40">
                        {groupLoading === g.id && (
                          <div className="px-6 py-2 text-xs text-gray-500">加载场次...</div>
                        )}
                        {g.loaded && g.sessions.length === 0 && (
                          <div className="px-6 py-2 text-xs text-gray-600">暂无场次</div>
                        )}
                        {g.sessions.map(s => {
                          const b = statusBadge(s.status, s.stName)
                          const isSel = pid === String(s.id)
                          return (
                            <button
                              key={s.id}
                              className={`w-full flex items-center justify-between px-6 py-2 text-left text-sm hover:bg-gray-700/50 ${
                                isSel ? 'bg-orange-900/40 border-l-2 border-l-orange-400' : ''
                              }`}
                              onClick={() => { setPid(String(s.id)); setSelected(s) }}
                            >
                              <span className="flex items-center gap-2 min-w-0">
                                {s.typeName && (
                                  <span className="text-[10px] text-gray-500 font-mono w-4 shrink-0">{s.typeName}</span>
                                )}
                                <span className="truncate">{s.name}</span>
                              </span>
                              <span className="flex items-center gap-2 shrink-0">
                                <span className="text-[10px] text-gray-500">{s.time}</span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded ${b.cls}`}>{b.text}</span>
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            {selected && (
              <div className="mt-2 text-xs text-gray-400">
                已选：<span className="text-orange-300 font-semibold">{selected.name}</span>
                <span className="ml-1">[{statusBadge(selected.status, selected.stName).text}]</span>
                {(selected.status === 0 || selected.status === 1) && selected.startTime && (
                  <span className="ml-2 text-gray-500">⏳ {selected.startTime} 开赛</span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Action button: 已结束→查看成绩 / 进行中→实时监控 / 未开始→禁用 */}
        {(() => {
          const isFinished = selected?.status === 3
          const isLive = selected?.status === 2
          const isWaiting = selected?.status === 0 || selected?.status === 1
          const label = !selected
            ? '请选择场次'
            : isFinished
              ? '📊 查看最终成绩'
              : isLive
                ? '🔴 开始实时监控'
                : `⏳ 未开赛${selected.startTime ? `（${selected.startTime}）` : ''}`
          return (
            <button
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2.5 rounded mt-2 transition"
              onClick={() => {
                if (!selected) return
                if (isFinished) onViewResults(ssid, pid, selected.name)
                else if (isLive) onStart(ssid, pid)
              }}
              disabled={!ssid || !pid || isWaiting}
            >
              {label}{selected && (isLive || isFinished) && selectedStation ? ` — ${selectedStation.sname || selectedStation.name}` : ''}
            </button>
          )
        })()}

        {/* 开发/回放：加载本地存档 */}
        <div className="border-t border-gray-700 pt-3 mt-1">
          <button
            className="text-xs text-gray-500 hover:text-gray-300"
            onClick={() => {
              const next = !showReplay
              setShowReplay(next)
              if (next && savedFiles.length === 0) {
                fetch('/api/saved').then(r => r.json()).then(d => setSavedFiles(d || []))
              }
            }}
          >
            {showReplay ? '▾' : '▸'} 🔁 加载本地存档回放（开发用）
          </button>
          {showReplay && (
            <div className="mt-2 border border-gray-700 rounded max-h-56 overflow-y-auto divide-y divide-gray-700/60">
              {savedFiles.length === 0 && (
                <div className="px-3 py-2 text-xs text-gray-600">无存档</div>
              )}
              {savedFiles.map(f => (
                <button
                  key={f.filename}
                  className="w-full flex items-center justify-between px-3 py-1.5 text-left text-xs hover:bg-gray-700/50"
                  onClick={() => onReplay(f.filename)}
                  title="加载该存档进入回放看板"
                >
                  <span className="truncate font-mono">{f.filename}</span>
                  <span className="text-gray-600 ml-2 shrink-0">{Math.round(f.size / 1024)}KB</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
