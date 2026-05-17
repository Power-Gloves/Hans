import { useState, useEffect, useRef, useCallback } from 'react'
import Leaderboard from './components/Leaderboard'
import RaceHeader from './components/RaceHeader'
import StintPanel from './components/StintPanel'
import ConnectPanel from './components/ConnectPanel'

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
  timeOfDay: string         // "13:42:15.123"
  ri_time_of_day: string    // "2026/5/17 13:42:15"
  lapTm: number
  pitDurationMs: number
  pitDurationSec: number
  belowMin: boolean
}

export interface PitAnalysis {
  baseLapTm: number
  pitThreshold: number
  totalLaps: number
  pits: PitInfo[]
  stints: { startLap: number; endLap: number; startTime: string; endTime: string; laps: number }[]
  currentStint: { startLap: number; currentLap: number; startTime: string; lastLapTime: string } | null
  lastPit: PitInfo | null
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
  const [pitStatus, setPitStatus] = useState<Record<string, { inPit: boolean; enterTime: number | null }>>({})
  const [accurateDrivers, setAccurateDrivers] = useState<AccurateDriverData | null>(null)
  const [lapData, setLapData] = useState<Record<string, { laps: number; lapTm: number; ri_time_of_day: string }[]>>({})
  const [trackedTeamId, setTrackedTeamId] = useState<string | null>(null)
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
        if (msg.pitStatus) setPitStatus(msg.pitStatus)
        setAccurateDrivers(msg.accurateDrivers || null)
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
  }

  const selectTeam = (teamId: string) => {
    setTrackedTeamId(teamId)
    // 立刻清掉旧车队的进站/车手数据，等待新车队的数据到来
    setPitAnalysis(null)
    setAccurateDrivers(null)
    wsRef.current?.send(JSON.stringify({ type: 'set_tracked_team', teamId }))
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

        {/* Connect / Race Info */}
        {!polling ? (
          <ConnectPanel onStart={startPolling} />
        ) : (
          <>
            <RaceHeader raceInfo={raceInfo} onStop={stopPolling} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
              {/* Left: Leaderboard */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <Leaderboard
                  items={items}
                  stintTracker={stintTracker}
                  raceInfo={raceInfo}
                  trackedTeamId={trackedTeamId}
                  onSelectTeam={selectTeam}
                  controlMessages={controlMessages}
                />
              </div>

              {/* Right: Strategy Panel */}
              <div className="space-y-3 sm:space-y-4 order-1 lg:order-2 lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
                {trackedTeamId && stintTracker[trackedTeamId] && (
                  <StintPanel
                    stint={stintTracker[trackedTeamId]}
                    teamItem={items.find(i => String(i.id) === trackedTeamId)}
                    pitAnalysis={pitAnalysis}
                    pitStatus={pitStatus[trackedTeamId] || null}
                    accurateDrivers={accurateDrivers}
                    controlMessages={controlMessages}
                    lapData={trackedTeamId ? lapData[trackedTeamId] : undefined}
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
