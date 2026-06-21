const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { WebSocketServer } = require('ws');
const cors = require('cors');

// ============ Data persistence ============
const DATA_DIR = path.join(__dirname, 'race-data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

/**
 * 保存当前比赛状态到磁盘
 * 文件名: {pid}_{timestamp}.json (完整快照) / {pid}_latest.json (滚动覆盖)
 */
function saveStateToDisk(tag = 'latest') {
    if (!state.pid) return;
    const filename = `${state.pid}_${tag}.json`;
    const filepath = path.join(DATA_DIR, filename);
    const saveData = {
        savedAt: new Date().toISOString(),
        config: { ssid: state.ssid, pid: state.pid, trackedTeamId: state.trackedTeamId },
        raceInfo: state.raceInfo,
        items: state.items,
        controlMessages: state.controlMessages,
        lapData: state.lapData,
        pitAnalysis: state.pitAnalysis,
        stintTracker: state.stintTracker,
        driverObservations: state.driverObservations,
        snapshots: state.snapshots,
    };
    try {
        fs.writeFileSync(filepath, JSON.stringify(saveData, null, 2), 'utf8');
        return filepath;
    } catch (err) {
        console.error('Save error:', err.message);
        return null;
    }
}

/**
 * 抓取所有车队的 lapItems 并保存
 */
async function saveAllTeamsLapItems() {
    if (!state.ssid || !state.pid || !state.items.length) return;
    console.log(`Crawling lapItems for all ${state.items.length} teams...`);
    const allLapData = {};
    for (const item of state.items) {
        try {
            const data = await callXkartingApi({
                flag: 'get-result-realtime-race',
                ssid: state.ssid, uid: '1', tab: '3',
                pid: state.pid, itemid: String(item.id),
                timeStamp: Date.now().toString(), syskey: 'x',
            });
            const found = data.items?.find(i => i.id === item.id);
            if (found?.lapItems) {
                allLapData[item.id] = {
                    team: item.team, carNo: item.carNo,
                    bestTm: item.bestTm, name: item.name,
                    lapItems: found.lapItems,
                };
                console.log(`  #${item.carNo} ${item.team}: ${found.lapItems.length} laps`);
            }
            // 间隔 300ms 避免频率过高
            await new Promise(r => setTimeout(r, 300));
        } catch (err) {
            console.error(`  #${item.carNo} error:`, err.message);
        }
    }
    const filepath = path.join(DATA_DIR, `${state.pid}_all_laps.json`);
    fs.writeFileSync(filepath, JSON.stringify(allLapData, null, 2), 'utf8');
    console.log(`All teams lapItems saved to ${filepath}`);
    return filepath;
}

/**
 * 加载之前保存的比赛数据（回放模式）
 */
function loadSavedState(filepath) {
    try {
        const raw = fs.readFileSync(filepath, 'utf8');
        const saved = JSON.parse(raw);
        state.raceInfo = saved.raceInfo;
        state.items = saved.items || [];
        state.controlMessages = saved.controlMessages || [];
        state.lapData = saved.lapData || {};
        state.pitAnalysis = saved.pitAnalysis;
        state.stintTracker = saved.stintTracker || {};
        state.driverObservations = saved.driverObservations || {};
        state.snapshots = saved.snapshots || [];
        if (saved.config) {
            state.ssid = saved.config.ssid;
            state.pid = saved.config.pid;
            state.trackedTeamId = saved.config.trackedTeamId;
        }
        // 用新版进站识别从真实 lapData 重算 pitAnalysis（兼容旧存档的字段差异）
        recomputePitAnalysis();
        console.log(`Loaded saved state from ${filepath}`);
        console.log(`  Race: ${state.raceInfo?.ri_name}, Items: ${state.items.length}, Snapshots: ${state.snapshots.length}`);
        return true;
    } catch (err) {
        console.error('Load error:', err.message);
        return false;
    }
}

/**
 * 根据当前 trackedTeamId 的 lapData 重算 pitAnalysis（回放/切队时用）
 */
function recomputePitAnalysis() {
    const tid = state.trackedTeamId != null ? String(state.trackedTeamId) : null;
    if (!tid || !state.lapData[tid]) { state.pitAnalysis = null; return; }
    const item = state.items.find(i => String(i.id) === tid);
    state.pitAnalysis = analyzeLapItems(state.lapData[tid], item?.bestTm || 0, item?.pitstops);
}

/**
 * 列出已保存的数据文件
 */
function listSavedFiles() {
    if (!fs.existsSync(DATA_DIR)) return [];
    return fs.readdirSync(DATA_DIR)
        .filter(f => f.endsWith('.json'))
        .map(f => {
            const stat = fs.statSync(path.join(DATA_DIR, f));
            return { filename: f, size: stat.size, modified: stat.mtime };
        })
        .sort((a, b) => b.modified - a.modified);
}

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// ============ xkarting API proxy ============

function callXkartingApi(params) {
    return new Promise((resolve, reject) => {
        const body = Object.entries(params)
            .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
            .join('&');
        const options = {
            hostname: 'kart.xkarting.com',
            path: '/ajax/wxapi.ashx',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(body),
            },
        };
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => {
                try { resolve(JSON.parse(data)); }
                catch (e) { reject(new Error('Invalid JSON response')); }
            });
        });
        req.on('error', reject);
        req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout')); });
        req.write(body);
        req.end();
    });
}

// ============ State tracking ============

const state = {
    // Current polling config
    polling: false,
    ssid: null,
    pid: null,
    pollInterval: null,
    trackedTeamId: null, // itemid for lap data

    // Accumulated data
    raceInfo: null,
    items: [],
    controlMessages: [],
    lapData: {},          // { teamId: lapItems[] }
    pitAnalysis: null,    // 当前追踪车队的进站分析（基于 lapItems 解析）

    // 实时进站状态追踪: { teamId: { inPit: bool, enterTime: ms, lastSt: number } }
    pitStatus: {},

    // 基于 st 跳变的精确进站计时（轮询时刻为准）：
    // { teamId: { inPit, enterTime, lastSt, events: [{enterTime, exitTime, durationMs}] } }
    pitTimers: {},

    // 自适应轮询定时器句柄
    pollTimer: null,

    // Driver stint tracking
    stintTracker: {},     // { teamId: { currentDriver, stintStart, stints: [{driver, start, end, duration}], pitStops: [] } }

    // Driver observation history: 每次 API 返回 name 时记录
    // { teamId: [{ time: ms, driver: name }] }
    driverObservations: {},

    // History for charts
    snapshots: [],        // [{timestamp, items: [{id, posx, lastTm, bestTm, gap, diff, laps}]}]
};

function trackDriverStints(items, timestamp) {
    items.forEach(item => {
        if (!state.stintTracker[item.id]) {
            state.stintTracker[item.id] = {
                teamName: item.team,
                currentDriver: item.name,
                stintStart: timestamp,
                stints: [{ driver: item.name, start: timestamp, end: null, duration: 0 }],
                pitStops: [],
                lastSt: item.st,
                lastPitstops: item.pitstops,
            };
        }

        // 记录车手观察历史（仅在变化时）
        if (!state.driverObservations[item.id]) {
            state.driverObservations[item.id] = [];
        }
        const obsList = state.driverObservations[item.id];
        const lastObs = obsList[obsList.length - 1];
        if (!lastObs || lastObs.driver !== item.name) {
            obsList.push({ time: timestamp, driver: item.name });
        }

        const tracker = state.stintTracker[item.id];

        // Detect driver change
        if (item.name !== tracker.currentDriver && item.name) {
            const now = timestamp;
            // Close current stint
            const currentStint = tracker.stints[tracker.stints.length - 1];
            if (currentStint && !currentStint.end) {
                currentStint.end = now;
                currentStint.duration = now - currentStint.start;
            }
            // Start new stint
            tracker.stints.push({ driver: item.name, start: now, end: null, duration: 0 });
            tracker.currentDriver = item.name;
        }

        // Detect pit stop (pitstops count increased)
        if (item.pitstops > tracker.lastPitstops) {
            tracker.pitStops.push({
                timestamp,
                enterSt: tracker.lastSt,
                count: item.pitstops,
            });
        }

        // Detect pit entry/exit via st field change
        if (item.st !== tracker.lastSt) {
            const lastPit = tracker.pitStops[tracker.pitStops.length - 1];
            if ((item.st === 3 || item.st === 4) && tracker.lastSt <= 1) {
                // Entering pit
                if (!lastPit || lastPit.exitTime) {
                    tracker.pitStops.push({ enterTime: timestamp, exitTime: null, duration: null, count: item.pitstops });
                }
            } else if (item.st <= 1 && (tracker.lastSt === 3 || tracker.lastSt === 4)) {
                // Exiting pit
                if (lastPit && !lastPit.exitTime) {
                    lastPit.exitTime = timestamp;
                    lastPit.duration = timestamp - lastPit.enterTime;
                }
            }
        }

        tracker.lastSt = item.st;
        tracker.lastPitstops = item.pitstops;
    });
}

/**
 * 解析 "2026/5/17 13:42:15" 格式时间字符串为 ms 时间戳
 */
function parseRiTime(s) {
    if (!s) return null;
    const m = s.match(/(\d+)\/(\d+)\/(\d+)\s+(\d+):(\d+):(\d+)/);
    if (!m) return null;
    return new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]).getTime();
}

/**
 * 在某个时刻，根据观察历史推断当时的车手
 * observations: [{ time, driver }] 已按 time 升序
 */
function findDriverAtTime(observations, atMs) {
    if (!observations || observations.length === 0) return null;
    // 找到 time <= atMs 的最近一次观察
    let result = null;
    for (const obs of observations) {
        if (obs.time <= atMs) result = obs.driver;
        else break;
    }
    // 如果 atMs 早于最早观察，但与最早观察非常接近（< 5 分钟），也认为是该车手
    if (!result && observations[0].time - atMs < 5 * 60 * 1000) {
        result = observations[0].driver;
    }
    return result;
}

/**
 * 基于 lapItems 解析的精确棒次时段 + 我们观察到的车手历史，
 * 计算每个车手的真实驾驶总时长。
 * 监控期外的棒次（无车手观察）归到「未知车手」。
 */
function computeAccurateDriverTotals(teamId, pitAnalysis, currentDriver) {
    if (!pitAnalysis) return { totals: {}, perStint: [] };
    const observations = state.driverObservations[teamId] || [];
    const totals = {};
    const perStint = [];

    // 已结束的棒次
    for (const s of pitAnalysis.stints) {
        const startMs = parseRiTime(s.startTime);
        const endMs = parseRiTime(s.endTime);
        if (!startMs || !endMs) continue;
        const duration = endMs - startMs;
        if (duration <= 0) continue;
        // 用棒次中点猜车手（避免恰好换人时刻的歧义）
        const midMs = (startMs + endMs) / 2;
        const driver = findDriverAtTime(observations, midMs) || '未知车手';
        totals[driver] = (totals[driver] || 0) + duration;
        perStint.push({
            startLap: s.startLap,
            endLap: s.endLap,
            laps: s.laps,
            duration,
            driver,
            startTime: s.startTime,
            endTime: s.endTime,
        });
    }

    // 当前进行中的棒
    if (pitAnalysis.currentStint && currentDriver) {
        const lapItemsStart = parseRiTime(pitAnalysis.currentStint.startTime);

        // 用车手观察历史找出 currentDriver 当前连续段的起点
        // 处理"已换人但 lapItems 还没显示进站圈"的延迟情况
        let segmentStartIdx = observations.length;
        for (let i = observations.length - 1; i >= 0; i--) {
            if (observations[i].driver === currentDriver) {
                segmentStartIdx = i;
            } else {
                break;
            }
        }
        const driverObsStart = segmentStartIdx < observations.length
            ? observations[segmentStartIdx].time
            : null;

        // 选择起点：如果观察起点比 lapItems 起点更晚（说明换人了但 lap 数据滞后），
        // 用观察起点；并把中间的差值归还给前一个车手
        let effectiveStart = lapItemsStart;
        if (driverObsStart && lapItemsStart && driverObsStart > lapItemsStart + 30000) {
            // 差异 > 30 秒才认为是真换人（避免抖动）
            effectiveStart = driverObsStart;
            // 把 lapItemsStart→driverObsStart 这段时间归给上一个车手
            if (segmentStartIdx > 0) {
                const prevDriver = observations[segmentStartIdx - 1].driver;
                const prevDuration = driverObsStart - lapItemsStart;
                if (prevDuration > 0) {
                    totals[prevDriver] = (totals[prevDriver] || 0) + prevDuration;
                }
            }
        } else if (!lapItemsStart && driverObsStart) {
            effectiveStart = driverObsStart;
        }

        if (effectiveStart) {
            const duration = Date.now() - effectiveStart;
            if (duration > 0) {
                totals[currentDriver] = (totals[currentDriver] || 0) + duration;
                perStint.push({
                    startLap: pitAnalysis.currentStint.startLap,
                    endLap: pitAnalysis.currentStint.currentLap,
                    laps: pitAnalysis.currentStint.currentLap - pitAnalysis.currentStint.startLap + 1,
                    duration,
                    driver: currentDriver,
                    startTime: new Date(effectiveStart).toLocaleString('zh-CN', { hour12: false }),
                    endTime: null,
                    isCurrent: true,
                });
            }
        }
    }

    return { totals, perStint };
}

/**
 * 解析 lapItems，识别进站圈（基于真实数据 + pitstops 交叉校验）。
 * 进站圈判据：
 *   1) 该圈耗时比正常圈多出 ≥ PIT_EXTRA_MS（娱乐车强制停 2 分钟，进站圈必然 +120s 以上）
 *   2) 排除第 1 圈（起步/暖胎圈，圈速偏高但非进站）
 *   3) 若已知真实进站次数 pitstops，且候选数 > pitstops，则只保留耗时最大的 N 个
 *      → 自动排除「赛道事故慢圈 / 暖胎圈 / 全场黄旗」等非进站的高耗时圈
 * 棒次的圈数、过线时刻、单棒时长全部来自真实 lapItems，无估算。
 */
const PIT_EXTRA_MS = 90000; // 进站圈相对正常圈的最小额外耗时（真进站约 +120~160s）

/**
 * 基于 st 状态跳变的精确进站计时（以轮询采样时刻为准）。
 * st >= 2 视为在维修区。进P = st 从 ≤1 升到 ≥2 的时刻；出P = 从 ≥2 回到 ≤1 的时刻。
 * 精度 = 轮询间隔（选中车队进站时会自动加密到 1 秒）。
 */
function trackPitTimers(items, timestamp) {
    items.forEach(item => {
        const id = String(item.id);
        let pt = state.pitTimers[id];
        if (!pt) {
            // 首次观察：即使已在维修区，也不假设进P时刻（标 null = 未捕捉到进站瞬间）
            pt = { inPit: item.st >= 2, enterTime: null, lastSt: item.st, events: [] };
            state.pitTimers[id] = pt;
            return;
        }
        const wasInPit = pt.lastSt >= 2;
        const nowInPit = item.st >= 2;
        if (!wasInPit && nowInPit) {
            pt.inPit = true;
            pt.enterTime = timestamp;
        } else if (wasInPit && !nowInPit) {
            pt.inPit = false;
            if (pt.enterTime) {
                pt.events.push({ enterTime: pt.enterTime, exitTime: timestamp, durationMs: timestamp - pt.enterTime });
            }
            pt.enterTime = null;
        }
        pt.lastSt = item.st;
    });
}

function analyzeLapItems(lapItems, bestTm, pitstops) {
    if (!lapItems || lapItems.length === 0) return null;

    // 正常圈速基准：用 bestTm，或所有圈速的较低四分位
    const sortedTms = lapItems.map(l => l.lapTm).filter(t => t > 0).sort((a, b) => a - b);
    const baseLapTm = bestTm > 0 ? bestTm : (sortedTms[Math.floor(sortedTms.length / 4)] || 70000);

    // 1) 找候选进站圈：额外耗时 ≥ PIT_EXTRA_MS（不再硬跳第1圈，避免漏掉「第1圈就进站」的队）
    //    起步暖胎圈通常 < 90s，达不到阈值，自然被排除
    let candidates = lapItems
        .map((lap, idx) => ({ lap, idx, extra: lap.lapTm - baseLapTm }))
        .filter(c => c.extra >= PIT_EXTRA_MS);

    // 2) pitstops 交叉校验：候选多于真实进站次数时，保留额外耗时最大的 N 个
    const realPits = Number(pitstops);
    if (Number.isFinite(realPits) && realPits > 0 && candidates.length > realPits) {
        candidates = [...candidates]
            .sort((a, b) => b.extra - a.extra)
            .slice(0, realPits)
            .sort((a, b) => a.idx - b.idx);
    }
    const pitIdxSet = new Set(candidates.map(c => c.idx));

    const pits = [];
    const stints = [];
    let currentStintStartLap = 1;
    let currentStintStartTime = null;

    lapItems.forEach((lap, idx) => {
        if (idx === 0) currentStintStartTime = lap.ri_time_of_day;
        if (pitIdxSet.has(idx)) {
            pits.push({
                lapNumber: lap.laps,
                timeOfDay: lap.timeOfDay,
                ri_time_of_day: lap.ri_time_of_day,
                lapTm: lap.lapTm,
            });
            // 关闭当前棒
            if (currentStintStartTime) {
                stints.push({
                    startLap: currentStintStartLap,
                    endLap: lap.laps,
                    startTime: currentStintStartTime,
                    endTime: lap.ri_time_of_day,
                    laps: lap.laps - currentStintStartLap + 1,
                });
            }
            currentStintStartLap = lap.laps + 1;
            currentStintStartTime = lap.ri_time_of_day;
        }
    });

    // 当前进行中的棒
    const lastLap = lapItems[lapItems.length - 1];
    const currentStint = lastLap && currentStintStartTime && !pitIdxSet.has(lapItems.length - 1) ? {
        startLap: currentStintStartLap,
        currentLap: lastLap.laps,
        startTime: currentStintStartTime,
        lastLapTime: lastLap.ri_time_of_day,
    } : null;

    return {
        baseLapTm,
        totalLaps: lastLap ? lastLap.laps : lapItems.length,
        pitCount: pits.length,
        realPitstops: Number.isFinite(realPits) ? realPits : null,
        pits,
        stints,
        currentStint,
        lastPit: pits[pits.length - 1] || null,
    };
}

async function pollRaceData() {
    if (!state.ssid || !state.pid) return;

    try {
        const ts = Date.now().toString();

        // Main request: leaderboard
        const params = {
            flag: 'get-result-realtime-race',
            ssid: state.ssid,
            uid: '1',
            tab: '3',
            pid: state.pid,
            itemid: state.trackedTeamId || '0',
            timeStamp: ts,
            syskey: 'x',
        };

        const data = await callXkartingApi(params);
        if (data.flag !== 1) return;

        const timestamp = Date.now();
        state.raceInfo = data.raceItem;
        state.items = data.items || [];

        // Track driver stints
        trackDriverStints(state.items, timestamp);

        // Store lap data if available + analyze for pit stops
        if (state.trackedTeamId && data.items) {
            const trackedItem = data.items.find(i => i.id == state.trackedTeamId);
            if (trackedItem && trackedItem.lapItems) {
                state.lapData[state.trackedTeamId] = trackedItem.lapItems;
                state.pitAnalysis = analyzeLapItems(trackedItem.lapItems, trackedItem.bestTm, trackedItem.pitstops);
            }
        }

        // Control messages
        if (data.controlTop && data.controlTop.length > 0) {
            data.controlTop.forEach(msg => {
                if (!state.controlMessages.find(m => m.id === msg.id)) {
                    state.controlMessages.push(msg);
                }
            });
        }

        // 基于 st 跳变的精确进站计时（所有车队）
        trackPitTimers(state.items, timestamp);

        // 实时追踪所有车队的进站状态（旧逻辑，保留兼容）
        state.items.forEach(item => {
            const id = String(item.id);
            if (!state.pitStatus[id]) {
                state.pitStatus[id] = { inPit: false, enterTime: null, lastSt: item.st };
            }
            const ps = state.pitStatus[id];
            const nowInPit = item.st >= 2;
            if (nowInPit && !ps.inPit) {
                ps.inPit = true;
                ps.enterTime = timestamp;
            } else if (!nowInPit && ps.inPit) {
                ps.inPit = false;
                ps.enterTime = null;
            }
            ps.lastSt = item.st;
        });

        // Snapshot for history
        const snapshot = {
            timestamp,
            items: state.items.map(i => ({
                id: i.id, posx: i.posx, lastTm: i.lastTm, bestTm: i.bestTm,
                gap: i.gap, diff: i.diff, laps: i.laps, st: i.st,
                pitstops: i.pitstops, name: i.name, team: i.team, carNo: i.carNo,
            })),
        };
        state.snapshots.push(snapshot);
        // Keep last 30 minutes of snapshots (360 at 5s interval)
        if (state.snapshots.length > 360) state.snapshots.shift();

        // Compute accurate driver totals for tracked team
        let accurateDrivers = null;
        if (state.trackedTeamId && state.pitAnalysis) {
            const trackedItem = state.items.find(i => i.id == state.trackedTeamId);
            accurateDrivers = computeAccurateDriverTotals(
                state.trackedTeamId,
                state.pitAnalysis,
                trackedItem?.name
            );
        }

        // Broadcast to all connected clients
        broadcast({
            type: 'race_update',
            raceInfo: state.raceInfo,
            items: state.items,
            controlMessages: state.controlMessages,
            stintTracker: getStintSummary(),
            lapData: state.lapData,
            pitAnalysis: state.pitAnalysis,
            pitStatus: state.pitStatus,
            pitTimer: state.trackedTeamId ? (state.pitTimers[String(state.trackedTeamId)] || null) : null,
            accurateDrivers,
            timestamp,
        });

        // Auto-save: 每次 poll 滚动覆盖 latest, 每 5 分钟存一个时间戳快照
        saveStateToDisk('latest');
        if (Date.now() % (5 * 60 * 1000) < 5500) {
            const tag = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
            saveStateToDisk(tag);
        }

    } catch (err) {
        console.error('Poll error:', err.message);
    }
}

function getStintSummary() {
    const summary = {};
    for (const [teamId, tracker] of Object.entries(state.stintTracker)) {
        const now = Date.now();
        const currentStint = tracker.stints[tracker.stints.length - 1];
        if (currentStint && !currentStint.end) {
            currentStint.duration = now - currentStint.start;
        }

        // Calculate per-driver totals
        const driverTotals = {};
        tracker.stints.forEach(s => {
            const dur = s.end ? s.duration : (now - s.start);
            driverTotals[s.driver] = (driverTotals[s.driver] || 0) + dur;
        });

        summary[teamId] = {
            teamName: tracker.teamName,
            currentDriver: tracker.currentDriver,
            currentStintDuration: currentStint ? currentStint.duration : 0,
            stintCount: tracker.stints.length,
            driverTotals,
            pitStops: tracker.pitStops,
            stints: tracker.stints,
        };
    }
    return summary;
}

const POLL_BASE_MS = 2000;  // 基础轮询间隔
const POLL_FAST_MS = 1000;  // 选中车队在维修区时加密，提高进/出P精度

function scheduleNextPoll() {
    if (!state.polling) return;
    // 选中车队在维修区 → 加密轮询，让出P时刻更精确
    const tracked = state.trackedTeamId
        ? state.items.find(i => String(i.id) === String(state.trackedTeamId))
        : null;
    const fast = tracked && (tracked.st || 0) >= 2;
    const delay = fast ? POLL_FAST_MS : POLL_BASE_MS;
    state.pollTimer = setTimeout(async () => {
        await pollRaceData();
        scheduleNextPoll();
    }, delay);
}

function startPolling() {
    if (state.pollTimer) { clearTimeout(state.pollTimer); state.pollTimer = null; }
    state.polling = true;
    console.log(`Polling started: ssid=${state.ssid}, pid=${state.pid}`);
    pollRaceData().finally(() => scheduleNextPoll()); // 首拉后开始自适应循环
}

function stopPolling() {
    if (state.pollTimer) { clearTimeout(state.pollTimer); state.pollTimer = null; }
    state.polling = false;
    // 停止时保存完整快照
    const tag = 'final_' + new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    saveStateToDisk(tag);
    saveStateToDisk('latest');
    console.log(`Polling stopped. Data saved as ${tag}`);
}

// ============ WebSocket ============

function broadcast(msg) {
    const str = JSON.stringify(msg);
    wss.clients.forEach(client => {
        if (client.readyState === 1) client.send(str);
    });
}

wss.on('connection', (ws) => {
    console.log('Client connected');

    // Send current state immediately
    if (state.raceInfo) {
        ws.send(JSON.stringify({
            type: 'race_update',
            raceInfo: state.raceInfo,
            items: state.items,
            controlMessages: state.controlMessages,
            stintTracker: getStintSummary(),
            lapData: state.lapData,
            timestamp: Date.now(),
        }));
    }

    // Send polling status
    ws.send(JSON.stringify({
        type: 'status',
        polling: state.polling,
        ssid: state.ssid,
        pid: state.pid,
        trackedTeamId: state.trackedTeamId,
    }));

    ws.on('message', async (raw) => {
        try {
            const msg = JSON.parse(raw);

            if (msg.type === 'start_polling') {
                state.ssid = msg.ssid;
                state.pid = msg.pid;
                state.trackedTeamId = msg.trackedTeamId || null;
                // Reset state for new race
                state.stintTracker = {};
                state.snapshots = [];
                state.controlMessages = [];
                state.lapData = {};
                state.pitTimers = {};
                state.pitStatus = {};
                startPolling();
            }

            if (msg.type === 'stop_polling') {
                stopPolling();
            }

            if (msg.type === 'set_tracked_team') {
                state.trackedTeamId = msg.teamId;
                // 切换车队后旧的 pitAnalysis 不再适用，先清掉
                state.pitAnalysis = null;
                broadcast({ type: 'status', trackedTeamId: state.trackedTeamId });
                // 立即触发一次拉取，避免等 5 秒
                if (state.polling) {
                    pollRaceData().catch(err => console.error('Immediate poll error:', err.message));
                } else if (state.lapData[String(state.trackedTeamId)]) {
                    // 回放模式：从已有 lapData 重算并广播
                    recomputePitAnalysis();
                    broadcast({
                        type: 'race_update',
                        raceInfo: state.raceInfo,
                        items: state.items,
                        controlMessages: state.controlMessages,
                        stintTracker: getStintSummary(),
                        lapData: state.lapData,
                        pitAnalysis: state.pitAnalysis,
                        timestamp: Date.now(),
                    });
                }
            }

            if (msg.type === 'get_snapshots') {
                ws.send(JSON.stringify({ type: 'snapshots', data: state.snapshots }));
            }

            // 数据持久化命令
            if (msg.type === 'save_data') {
                const tag = msg.tag || new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
                const f = saveStateToDisk(tag);
                ws.send(JSON.stringify({ type: 'save_result', success: !!f, filepath: f, tag }));
            }

            if (msg.type === 'save_all_laps') {
                saveAllTeamsLapItems().then(f => {
                    ws.send(JSON.stringify({ type: 'save_result', success: !!f, filepath: f, tag: 'all_laps' }));
                });
            }

            if (msg.type === 'load_data') {
                const filepath = msg.filepath || path.join(DATA_DIR, `${msg.pid || state.pid}_latest.json`);
                const ok = loadSavedState(filepath);
                if (ok) {
                    // 加载后广播一次更新给前端
                    let ad = null;
                    if (state.trackedTeamId && state.pitAnalysis) {
                        const ti = state.items.find(i => i.id == state.trackedTeamId);
                        ad = computeAccurateDriverTotals(state.trackedTeamId, state.pitAnalysis, ti?.name);
                    }
                    broadcast({
                        type: 'race_update',
                        raceInfo: state.raceInfo,
                        items: state.items,
                        controlMessages: state.controlMessages,
                        stintTracker: getStintSummary(),
                        lapData: state.lapData,
                        pitAnalysis: state.pitAnalysis,
                        accurateDrivers: ad,
                        timestamp: Date.now(),
                    });
                    broadcast({ type: 'status', polling: false, ssid: state.ssid, pid: state.pid, trackedTeamId: state.trackedTeamId });
                }
                ws.send(JSON.stringify({ type: 'load_result', success: ok }));
            }

            if (msg.type === 'list_saved') {
                ws.send(JSON.stringify({ type: 'saved_files', files: listSavedFiles() }));
            }

        } catch (err) {
            console.error('WS message error:', err.message);
        }
    });

    ws.on('close', () => console.log('Client disconnected'));
});

// ============ REST API (for initial data loading) ============

app.post('/api/proxy', async (req, res) => {
    try {
        const data = await callXkartingApi(req.body);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/stations', async (req, res) => {
    try {
        const data = await callXkartingApi({
            flag: 'get-race-station-list',
            ssid: '1',
            timeStamp: Date.now().toString(),
            syskey: 'x',
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/races/:ssid', async (req, res) => {
    try {
        const data = await callXkartingApi({
            flag: 'get-race-list-group',
            ssid: req.params.ssid,
            userId: '1',
            pid: '0',
            timeStamp: Date.now().toString(),
            syskey: 'x',
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/init/:ssid', async (req, res) => {
    try {
        const data = await callXkartingApi({
            flag: 'get-race-result-init',
            ssid: req.params.ssid,
            uid: '1',
            timeStamp: Date.now().toString(),
            syskey: 'x',
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/raceitems/:ssid/:pid', async (req, res) => {
    try {
        const params = {
            flag: 'get-result-realtime-race',
            ssid: req.params.ssid,
            uid: '1',
            tab: '3',
            pid: req.params.pid,
            itemid: '0',
            timeStamp: Date.now().toString(),
            syskey: 'x',
        };
        if (req.query.roundid) params.roundid = req.query.roundid;
        const data = await callXkartingApi(params);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/rounds/:ssid/:pid', async (req, res) => {
    try {
        const data = await callXkartingApi({
            flag: 'get-race-round-list',
            ssid: req.params.ssid,
            userId: '1',
            pid: req.params.pid,
            timeStamp: Date.now().toString(),
            syskey: 'x',
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * 把 calendar-list 的 ritem 映射成精简场次对象
 */
function mapSession(s) {
    return {
        id: s.id,
        name: s.name,
        status: s.status,
        stName: s.stName || '',
        type: s.type,
        typeName: s.typeName || '',
        startTime: s.startTime || '',
        time: s.time || '',
    };
}

/**
 * 列出某分站(rid)下的全部场次「组」（懒加载：只拉一次，首个组自带场次，其余按需展开）。
 * 返回: { groups: [{ id, name, loaded, sessions: [...] }] }
 */
app.get('/api/sessions/:ssid/:rid', async (req, res) => {
    try {
        const { ssid, rid } = req.params;
        const data = await callXkartingApi({
            flag: 'get-race-calendar-list',
            ssid, userId: '1', itemId: '0', pid: rid,
            timeStamp: Date.now().toString(), syskey: 'x',
        });
        const groups = (data.items || []).map(g => ({
            id: g.id,
            name: g.name,
            loaded: Array.isArray(g.ritems),          // 首个组通常已带 ritems
            sessions: (g.ritems || []).map(mapSession),
        }));
        res.json({ groups });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * 按需拉取单个场次组(itemId)下的场次明细
 */
app.get('/api/session-group/:ssid/:rid/:itemId', async (req, res) => {
    try {
        const { ssid, rid, itemId } = req.params;
        const data = await callXkartingApi({
            flag: 'get-race-calendar-list',
            ssid, userId: '1', itemId, pid: rid,
            timeStamp: Date.now().toString(), syskey: 'x',
        });
        const matched = (data.items || []).find(x => String(x.id) === String(itemId));
        res.json({ sessions: (matched?.ritems || []).map(mapSession) });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * 已结束比赛的最终成绩（get-race-result-by-pid）
 * 先取 groupList，再按组名取每组成绩行（去重）。
 * 返回: { round, groupList, groups: [{ name, total, items:[...] }] }
 */
app.get('/api/result/:ssid/:pid', async (req, res) => {
    try {
        const { ssid, pid } = req.params;
        const base = { flag: 'get-race-result-by-pid', ssid, userId: '1', pid, isTest: '1', syskey: 'x' };
        // 1. 先拿组列表
        const head = await callXkartingApi({ ...base, group: '', timestamp: Date.now().toString() });
        const groupList = head.groupList || [];
        // 2. 指定组或全部组取成绩行
        const wanted = req.query.group ? [{ name: req.query.group }] : (groupList.length ? groupList : [{ name: '' }]);
        const groups = [];
        for (const g of wanted) {
            const r = await callXkartingApi({ ...base, group: g.name || '', timestamp: Date.now().toString() });
            // 按 carNo 去重（接口会重复返回每队多行）
            const seen = new Set();
            const items = [];
            for (const it of (r.items || [])) {
                if (seen.has(it.carNo)) continue;
                seen.add(it.carNo);
                items.push(it);
            }
            groups.push({ name: g.name || (groupList[0] && groupList[0].name) || '', total: g.total, items });
            await new Promise(rr => setTimeout(rr, 150));
        }
        res.json({ round: head.round, groupList, groups });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/control/:pid', async (req, res) => {
    try {
        const data = await callXkartingApi({
            flag: 'get-race-control-by-pid',
            pid: req.params.pid,
            ssid: state.ssid || '22',
            timeStamp: Date.now().toString(),
            syskey: 'x',
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/calendar/:ssid', async (req, res) => {
    try {
        const data = await callXkartingApi({
            flag: 'get-race-calendar-init',
            ssid: req.params.ssid,
            userId: '1',
            timeStamp: Date.now().toString(),
            syskey: 'x',
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/docs/:ssid/:pid', async (req, res) => {
    try {
        const data = await callXkartingApi({
            flag: 'get-race-docs-list',
            ssid: req.params.ssid,
            userId: '1',
            pid: req.params.pid,
            timeStamp: Date.now().toString(),
            syskey: 'x',
        });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/state', (req, res) => {
    res.json({
        polling: state.polling,
        ssid: state.ssid,
        pid: state.pid,
        trackedTeamId: state.trackedTeamId,
        itemCount: state.items.length,
        snapshotCount: state.snapshots.length,
        controlMessageCount: state.controlMessages.length,
    });
});

// 数据持久化 REST API
app.get('/api/saved', (req, res) => {
    res.json(listSavedFiles());
});

app.post('/api/save', (req, res) => {
    const tag = req.body.tag || new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const f = saveStateToDisk(tag);
    res.json({ success: !!f, filepath: f, tag });
});

app.post('/api/save-all-laps', async (req, res) => {
    const f = await saveAllTeamsLapItems();
    res.json({ success: !!f, filepath: f });
});

app.post('/api/load', (req, res) => {
    const filepath = req.body.filepath
        || (req.body.filename ? path.join(DATA_DIR, req.body.filename) : path.join(DATA_DIR, `${req.body.pid || state.pid}_latest.json`));
    const ok = loadSavedState(filepath);
    if (ok) {
        broadcast({
            type: 'race_update',
            raceInfo: state.raceInfo,
            items: state.items,
            controlMessages: state.controlMessages,
            stintTracker: getStintSummary(),
            lapData: state.lapData,
            pitAnalysis: state.pitAnalysis,
            timestamp: Date.now(),
        });
        broadcast({ type: 'status', polling: false, ssid: state.ssid, pid: state.pid, trackedTeamId: state.trackedTeamId });
    }
    res.json({ success: ok });
});

// 启动时自动加载最近数据（如果有）
const AUTO_LOAD = process.argv.includes('--replay');
if (AUTO_LOAD) {
    const files = listSavedFiles();
    const latest = files.find(f => f.filename.includes('latest'));
    if (latest) {
        loadSavedState(path.join(DATA_DIR, latest.filename));
        console.log('Auto-loaded latest saved state (replay mode)');
    }
}

// ============ Start ============

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`myRacing server running on http://localhost:${PORT}`);
    console.log(`WebSocket on ws://localhost:${PORT}`);
});
