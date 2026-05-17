import { useState, useEffect } from 'react'

interface Station { id: number; name: string; sname: string }
interface Race { id: number; name: string }
interface Round { id: number; name: string; isDefault: number }
interface RaceItem { id: number; name: string; status: number; stName: string; startTime: string }

interface Props {
  onStart: (ssid: string, pid: string, teamId?: string) => void
}

export default function ConnectPanel({ onStart }: Props) {
  const [stations, setStations] = useState<Station[]>([])
  const [races, setRaces] = useState<Race[]>([])
  const [rounds, setRounds] = useState<Round[]>([])
  const [raceItems, setRaceItems] = useState<RaceItem[]>([])

  const [ssid, setSsid] = useState('')
  const [raceId, setRaceId] = useState('')
  const [roundId, setRoundId] = useState('')
  const [pid, setPid] = useState('')
  const [loading, setLoading] = useState('')
  const [error, setError] = useState('')

  // 1. Fetch stations
  useEffect(() => {
    setLoading('stations')
    fetch('/api/stations')
      .then(r => r.json())
      .then(data => {
        setStations(data.items || [])
        setError('')
      })
      .catch(e => setError('获取赛场列表失败: ' + e.message))
      .finally(() => setLoading(''))
  }, [])

  // 2. Fetch races when station changes (get-race-list-group)
  useEffect(() => {
    if (!ssid) { setRaces([]); setRounds([]); setRaceItems([]); return }
    setRaceId(''); setRoundId(''); setPid('')
    setRaceItems([]); setRounds([])
    setLoading('races')
    fetch(`/api/races/${ssid}`)
      .then(r => r.json())
      .then(data => {
        const groups = data.items || []
        const allRaces: Race[] = []
        if (Array.isArray(groups)) {
          groups.forEach((g: { id?: number; name?: string }) => {
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
    if (!ssid || !raceId) { setRounds([]); setRaceItems([]); return }
    setRoundId(''); setPid('')
    setRaceItems([])
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

  // 4. Fetch race items (场次) when round changes
  useEffect(() => {
    if (!ssid || !raceId || !roundId) { setRaceItems([]); return }
    setPid('')
    setLoading('items')
    fetch(`/api/raceitems/${ssid}/${raceId}?roundid=${roundId}`)
      .then(r => r.json())
      .then(data => {
        const list: RaceItem[] = (data.RaceList || []).map((r: { id: number; name: string; status: number; stName?: string; startTime?: string }) => ({
          id: r.id,
          name: r.name,
          status: r.status,
          stName: r.stName || '',
          startTime: r.startTime || '',
        }))
        setRaceItems(list)
        const live = list.find(r => r.status === 2 || r.stName === '进行中')
        if (live) setPid(String(live.id))
        else if (list.length === 1) setPid(String(list[0].id))
        setError('')
      })
      .catch(e => setError('获取比赛场次失败: ' + e.message))
      .finally(() => setLoading(''))
  }, [ssid, raceId, roundId])

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
                <option key={s.id} value={String(s.id)}>{s.name}</option>
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

        {/* Step 3: Race item (场次) */}
        {raceItems.length > 0 && (
          <div>
            <label className="text-sm text-gray-400 block mb-1">比赛场次</label>
            <select
              className="w-full bg-gray-700 rounded px-3 py-2.5 text-white"
              value={pid}
              onChange={e => setPid(e.target.value)}
            >
              <option value="">-- 选择场次 --</option>
              {raceItems.map(r => (
                <option key={r.id} value={String(r.id)}>
                  {r.name} {r.stName ? `[${r.stName}]` : ''} {r.startTime}
                </option>
              ))}
            </select>
          </div>
        )}

        {loading && loading !== 'stations' && (
          <div className="text-gray-500 text-sm">加载中...</div>
        )}

        {/* Start button */}
        <button
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2.5 rounded mt-2 transition"
          onClick={() => onStart(ssid, pid)}
          disabled={!ssid || !pid}
        >
          开始监控{selectedStation ? ` — ${selectedStation.sname || selectedStation.name}` : ''}
        </button>
      </div>
    </div>
  )
}
