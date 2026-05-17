import { useEffect, useState } from 'react'
import { RaceItem } from '../App'

interface Props {
  raceInfo: RaceItem | null
  onStop: () => void
}

function formatHMS(totalSec: number): string {
  if (totalSec < 0) totalSec = 0
  const h = Math.floor(totalSec / 3600)
  const m = Math.floor((totalSec % 3600) / 60)
  const s = totalSec % 60
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

function formatClock(s?: string): string {
  if (!s) return '--'
  // "2026/5/17 13:00:00" → 取时分秒
  const parts = s.split(' ')
  if (parts.length === 2) {
    const date = parts[0].split('/').slice(1).join('/')  // 5/17
    return `${date} ${parts[1]}`
  }
  return s
}

export default function RaceHeader({ raceInfo, onStop }: Props) {
  // 本地倒计时刻度
  const [tick, setTick] = useState(Date.now())
  useEffect(() => {
    const t = setInterval(() => setTick(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  const apiLeftSec = Number(raceInfo?.leftTime) || 0
  const apiUsedSec = Number(raceInfo?.raceTime) || 0

  // 本地推算：每次 API 更新时记录基准时刻，UI 按秒平滑递减
  const [baseLeft, setBaseLeft] = useState(apiLeftSec)
  const [baseTime, setBaseTime] = useState(Date.now())
  useEffect(() => {
    setBaseLeft(apiLeftSec)
    setBaseTime(Date.now())
  }, [apiLeftSec])

  if (!raceInfo) return <div className="bg-gray-800 rounded-lg p-2 animate-pulse h-8" />

  const isPaused = raceInfo.isPause === 1
  const elapsedSinceUpdate = Math.floor((tick - baseTime) / 1000)
  const liveLeftSec = isPaused ? baseLeft : Math.max(0, baseLeft - elapsedSinceUpdate)
  const liveUsedSec = apiUsedSec + (isPaused ? 0 : elapsedSinceUpdate)
  const totalSec = apiUsedSec + apiLeftSec

  const leftPercent = totalSec > 0 ? Math.max(0, Math.min(100, (liveUsedSec / totalSec) * 100)) : 0

  const isLastHour = liveLeftSec < 3600 && liveLeftSec > 0
  const isLastMin = liveLeftSec < 60 && liveLeftSec > 0
  const leftColor = liveLeftSec === 0
    ? 'text-gray-500'
    : isLastMin
      ? 'text-red-400 animate-pulse'
      : isLastHour
        ? 'text-orange-400'
        : 'text-green-400'

  return (
    <div className="bg-gray-800 rounded-lg px-4 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* 左：赛事名 + 时间 */}
        <div className="flex items-center gap-3 min-w-0">
          <h2 className="text-sm font-semibold truncate">
            {raceInfo.ri_name || raceInfo.raceName || '比赛'}
          </h2>
          {isPaused && (
            <span className="text-[10px] bg-yellow-600 text-yellow-50 px-1.5 py-0.5 rounded shrink-0">暂停</span>
          )}
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 shrink-0">
            <span>{formatClock(raceInfo.ri_start)}</span>
            <span>→</span>
            <span>{formatClock(raceInfo.ri_end)}</span>
          </div>
        </div>
        {/* 右：停止按钮 */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs text-gray-500 font-mono hidden sm:inline">{formatHMS(liveUsedSec)}</span>
          <span className={`font-mono text-base font-bold ${leftColor}`}>{formatHMS(liveLeftSec)}</span>
          <button
            className="bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded text-xs whitespace-nowrap"
            onClick={onStop}
          >
            停止
          </button>
        </div>
      </div>
      {/* 进度条：全宽 */}
      <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
        <div
          className={`h-1 rounded-full transition-all ${
            isLastMin ? 'bg-red-500' : isLastHour ? 'bg-orange-500' : 'bg-green-500'
          }`}
          style={{ width: `${leftPercent}%` }}
        />
      </div>
    </div>
  )
}
