import { useState, useEffect, useRef, useCallback } from 'react'
import Leaderboard from './components/Leaderboard'
import RaceHeader from './components/RaceHeader'
import StintPanel from './components/StintPanel'
import ConnectPanel from './components/ConnectPanel'
import ResultsView, { ResultData } from './components/ResultsView'

export interface RaceItem {
  id: number
  ri_name?: string
  ri_start?: string       // "2026/5/17 13:00:00"
  ri_end?: string         // "2026/5/17 19:00:00"
  ri_race_time?: number   // 总时长（分钟）
  ri_status?: number
  ri_laps_last?: number
  raceName?: string
  raceTime: number | string   // 已用秒数
  leftTime: number | string   // 剩余秒数
  raceStatus?: number
  laps?: number
  isPause?: number
}

export interface TeamItem {
  id: number
  posx: number
  carNo: string
  team: string
  name: string
  laps: number
  lastTm: number
  bestTm: number
  gap: number
  diff: number
  pitstops: number
  st: number
}

export interface StintInfo {
  teamName: string
  currentDriver: string
  currentStintDuration: number
  stintCount: number
  driverTotals: Record<string, number>
  pitStops: { enterTime?: number; exitTime?: number; duration?: number; count: number }[]
  stints: { driver: string; start: number; end: number | null; duration: number }[]
}

export interface PitInfo {
  lapNumber: number
  timeOfDay: string
  ri_time_of_day: string
  lapTm: number
}

export interface PitAnalysis {
  baseLapTm: number
  totalLaps: number
  pitCount: number
  realPitstops: number | null
  pits: PitInfo[]
  stints: { startLap: number; endLap: number; startTime: string; endTime: string; laps: number }[]
  currentStint: { startLap: number; currentLap: number; startTime: string; lastLapTime: string } | null
  lastPit: PitInfo | null
}

export interface PitTimer {
  inPit: boolean
  enterTime: number | null
  events: { enterTime: number; exitTime: number; durationMs: number }[]
}

export interface AccurateDriverData {
  totals: Record<string, number>
  perStint: {
    startLap: number
    endLap: number
    laps: number
    duration: number
    driver: string
    startTime: string
    endTime: string | null
    isCurrent?: boolean
  }[]
}

export interface RaceUpdate {
  type: string
  raceInfo: RaceItem | null
  items: TeamItem[]
  controlMessages: { id: number; cont: string; c_time: string }[]
  stintTracker: Record<string, StintInfo>
  lapData: Record<string, unknown[]>
  pitAnalysis: PitAnalysis | null
  timestamp: number
}

function App() {
  const [connected, setConnected] = useState(false)
  const [polling, setPolling] = useState(false)
  const [raceInfo, setRaceInfo] = useState<RaceItem | null>(null)
  const [items, setItems] = useState<TeamItem[]>([])
  const [controlMessages, setControlMessages] = useState<{ id: number; cont: string; c_time: string }[]>([])
  const [stintTracker, setStintTracker] = useState<Record<string, StintInfo>>({})
  const [pitAnalysis, setPitAnalysis] = useState<PitAnalysis | null>(null)
  const [pitTimer, setPitTimer] = useState<PitTimer | null>(null)
  const [lapData, setLapData] = useState<Record<string, { laps: number; lapTm: number; ri_time_of_day: string }[]>>({})
  const [trackedTeamId, setTrackedTeamId] = useState<string | null>(null)
  const [resultData, setResultData] = useState<ResultData | null>(null)
  const [resultLoading, setResultLoading] = useState(false)
  const [replay, setReplay] = useState(false)
  const wsRef = useRef<WebSocket | null>(null)

  const connectWs = useCallback(() => {
    const ws = new WebSocket(`ws://${window.location.hostname}:3001`)

    ws.onopen = () => {
      setConnected(true)
    }

    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data)
      if (msg.type === 'race_update') {
        setRaceInfo(msg.raceInfo)
        setItems(msg.items || [])
        setControlMessages(msg.controlMessages || [])
        setStintTracker(msg.stintTracker || {})
        setPitAnalysis(msg.pitAnalysis || null)
        setPitTimer(msg.pitTimer || null)
        if (msg.lapData) setLapData(msg.lapData)
      }
      if (msg.type === 'status') {
        if (typeof msg.polling === 'boolean') setPolling(msg.polling)
        if (msg.trackedTeamId) setTrackedTeamId(msg.trackedTeamId)
      }
    }

    ws.onclose = () => {
      setConnected(false)
      setTimeout(connectWs, 3000)
    }

    wsRef.current = ws
  }, [])

  useEffect(() => {
    connectWs()
    return () => { wsRef.current?.close() }
  }, [connectWs])

  const startPolling = (ssid: string, pid: string, teamId?: string) => {
    wsRef.current?.send(JSON.stringify({
      type: 'start_polling',
      ssid,
      pid,
      trackedTeamId: teamId || null,
    }))
    setPolling(true)
    if (teamId) setTrackedTeamId(teamId)
  }

  const stopPolling = () => {
    wsRef.current?.send(JSON.stringify({ type: 'stop_polling' }))
    setPolling(false)
    setReplay(false)
  }

  // 开发/回放：加载本地存档并进入看板视图
  const startReplay = (filename: string) => {
    fetch('/api/load', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename }),
    })
      .then(r => r.json())
      .then(res => { if (res.success) setReplay(true) })
  }

  const selectTeam = (teamId: string) => {
    setTrackedTeamId(teamId)
    setPitAnalysis(null)  // 清掉旧车队的棒次数据，等新数据
    wsRef.current?.send(JSON.stringify({ type: 'set_tracked_team', teamId }))
  }

  // 查看已结束比赛的最终成绩
  const viewResults = (ssid: string, pid: string, name: string) => {
    setResultLoading(true)
    fetch(`/api/result/${ssid}/${pid}`)
      .then(r => r.json())
      .then(data => {
        setResultData({ ...data, sessionName: name })
      })
      .catch(() => setResultData({ groups: [], sessionName: name }))
      .finally(() => setResultLoading(false))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-2 sm:p-4">
      <div className="max-w-7xl mx-auto space-y-3 sm:space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg sm:text-2xl font-bold text-orange-400">🏁 myRacing</h1>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${connected ? 'bg-green-400' : 'bg-red-400'}`}></span>
            <span className="text-sm text-gray-400">{connected ? '已连接' : '断开'}</span>
          </div>
        </div>

        {/* Connect / Results / Live */}
        {resultData || resultLoading ? (
          resultLoading ? (
            <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400">加载最终成绩...</div>
          ) : (
            <ResultsView data={resultData!} onBack={() => setResultData(null)} />
          )
        ) : !polling && !replay ? (
          <ConnectPanel onStart={startPolling} onViewResults={viewResults} onReplay={startReplay} />
        ) : (
          <>
            <RaceHeader raceInfo={raceInfo} onStop={stopPolling} />
            {replay && (
              <div className="bg-indigo-900/30 border border-indigo-700/40 rounded px-3 py-1.5 text-xs text-indigo-300">
                🔁 回放模式（本地存档，非实时）。点选车队查看其棒次/圈速。
              </div>
            )}

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {/* Left: Leaderboard */}
              <div className="col-span-2">
                <Leaderboard
                  items={items}
                  stintTracker={stintTracker}
                  raceInfo={raceInfo}
                  trackedTeamId={trackedTeamId}
                  onSelectTeam={selectTeam}
                  controlMessages={controlMessages}
                />
              </div>

              {/* Right: Strategy Panel — 仅真实数据 */}
              <div className="space-y-3 sm:space-y-4 lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
                {trackedTeamId && items.find(i => String(i.id) === trackedTeamId) && (
                  <StintPanel
                    teamItem={items.find(i => String(i.id) === trackedTeamId)}
                    controlMessages={controlMessages}
                    lapData={trackedTeamId ? lapData[trackedTeamId] : undefined}
                    pitAnalysis={pitAnalysis}
                    pitTimer={pitTimer}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App
