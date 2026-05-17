const https = require('https');
const fs = require('fs');

function callApi(params) {
    return new Promise((resolve, reject) => {
        const body = Object.entries(params).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
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
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    resolve({ _raw: data.substring(0, 500), _error: 'Not JSON' });
                }
            });
        });
        req.on('error', e => resolve({ _error: e.message }));
        req.setTimeout(10000, () => { req.destroy(); resolve({ _error: 'timeout' }); });
        req.write(body);
        req.end();
    });
}

const ts = () => Date.now().toString();

// Known params from HAR
const ssid = '22';
const uid = '1360605';
const pid = '2132008';
const itemid = '618251'; // 速擎-torpedo

async function main() {
    const results = {};

    const apis = [
        // === 核心实时 ===
        { name: 'get-result-realtime-race (排名)', params: { flag: 'get-result-realtime-race', ssid, uid, tab: '3', pid, itemid: '0', timeStamp: ts(), syskey: 'x' } },
        { name: 'get-result-realtime-race (车队圈速)', params: { flag: 'get-result-realtime-race', ssid, uid, tab: '3', pid, itemid, timeStamp: ts(), syskey: 'x' } },
        { name: 'get-result-realtime', params: { flag: 'get-result-realtime', uid, ssid, itemId: '0', timeStamp: ts(), syskey: 'x' } },

        // === 赛事列表 ===
        { name: 'get-race-list-group', params: { flag: 'get-race-list-group', ssid, userId: uid, pid: '0', timeStamp: ts(), syskey: 'x' } },
        { name: 'get-race-round-list', params: { flag: 'get-race-round-list', ssid, userId: uid, pid, timeStamp: ts(), syskey: 'x' } },
        { name: 'get-race-station-list', params: { flag: 'get-race-station-list', ssid, timeStamp: ts(), syskey: 'x' } },

        // === 赛事控制 ===
        { name: 'get-race-control-by-pid', params: { flag: 'get-race-control-by-pid', pid, ssid, timeStamp: ts(), syskey: 'x' } },

        // === 结果/历史 ===
        { name: 'get-race-result-by-pid', params: { flag: 'get-race-result-by-pid', pid, ssid, uid, timeStamp: ts(), syskey: 'x' } },
        { name: 'get-race-result-item', params: { flag: 'get-race-result-item', pid, ssid, uid, itemid, timeStamp: ts(), syskey: 'x' } },
        { name: 'get-race-result-ritem-list', params: { flag: 'get-race-result-ritem-list', pid, ssid, uid, itemid, timeStamp: ts(), syskey: 'x' } },
        { name: 'get-race-result-round-list', params: { flag: 'get-race-result-round-list', pid, ssid, uid, timeStamp: ts(), syskey: 'x' } },
        { name: 'get-race-result-top', params: { flag: 'get-race-result-top', pid, ssid, uid, timeStamp: ts(), syskey: 'x' } },
        { name: 'get-result-top', params: { flag: 'get-result-top', ssid, uid, timeStamp: ts(), syskey: 'x' } },

        // === 赛历 ===
        { name: 'get-race-calendar-init', params: { flag: 'get-race-calendar-init', ssid, userId: uid, timeStamp: ts(), syskey: 'x' } },
        { name: 'get-race-calendar-list', params: { flag: 'get-race-calendar-list', ssid, userId: uid, timeStamp: ts(), syskey: 'x' } },

        // === 文件 ===
        { name: 'get-race-docs-init', params: { flag: 'get-race-docs-init', ssid, userId: uid, timeStamp: ts(), syskey: 'x' } },
        { name: 'get-race-docs-list', params: { flag: 'get-race-docs-list', ssid, userId: uid, pid, timeStamp: ts(), syskey: 'x' } },

        // === 排名 ===
        { name: 'get-race-list-user', params: { flag: 'get-race-list-user', ssid, userId: uid, timeStamp: ts(), syskey: 'x' } },

        // === 用户 ===
        { name: 'get-user-msg-count', params: { flag: 'get-user-msg-count', userID: uid, ssid, timeStamp: ts(), syskey: 'x' } },
        { name: 'get-userinfo-by-id', params: { flag: 'get-userinfo-by-id', userId: uid, ssid, timeStamp: ts(), syskey: 'x' } },

        // === 商城/票务 ===
        { name: 'get-ticket-list', params: { flag: 'get-ticket-list', ssid, userId: uid, timeStamp: ts(), syskey: 'x' } },
        { name: 'get-goods-buy', params: { flag: 'get-goods-buy', ssid, userId: uid, timeStamp: ts(), syskey: 'x' } },
        { name: 'get-order-list', params: { flag: 'get-order-list', ssid, userId: uid, timeStamp: ts(), syskey: 'x' } },
        { name: 'get-member-point-logs-list', params: { flag: 'get-member-point-logs-list', ssid, userId: uid, timeStamp: ts(), syskey: 'x' } },

        // === 消息 ===
        { name: 'get-msg-list', params: { flag: 'get-msg-list', userId: uid, ssid, timeStamp: ts(), syskey: 'x' } },
    ];

    console.log(`Crawling ${apis.length} API endpoints...\n`);

    for (const api of apis) {
        process.stdout.write(`  ${api.name}... `);
        const data = await callApi(api.params);
        results[api.name] = data;

        // Summary
        if (data._error) {
            console.log(`ERROR: ${data._error}`);
        } else if (data.flag === 1) {
            const keys = Object.keys(data).filter(k => k !== 'flag');
            const summary = keys.map(k => {
                const v = data[k];
                if (Array.isArray(v)) return `${k}[${v.length}]`;
                if (typeof v === 'object' && v !== null) return `${k}{${Object.keys(v).length} keys}`;
                return `${k}=${JSON.stringify(v).substring(0, 50)}`;
            });
            console.log(`OK → ${summary.join(', ')}`);
        } else {
            console.log(`flag=${data.flag}, msg=${data.msg || data.message || JSON.stringify(data).substring(0, 100)}`);
        }
    }

    // Save full results
    const outFile = 'd:/项目/个人学习/tools/myRacing/api_data.json';
    fs.writeFileSync(outFile, JSON.stringify(results, null, 2), 'utf8');
    console.log(`\nFull data saved to ${outFile}`);

    // Print detailed structure for successful responses
    console.log('\n=== DETAILED DATA STRUCTURE ===\n');
    for (const [name, data] of Object.entries(results)) {
        if (data.flag !== 1) continue;
        console.log(`--- ${name} ---`);
        printStructure(data, '  ');
        console.log('');
    }
}

function printStructure(obj, indent = '', depth = 0) {
    if (depth > 3) { console.log(indent + '...'); return; }
    for (const [key, val] of Object.entries(obj)) {
        if (key === 'flag') continue;
        if (Array.isArray(val)) {
            console.log(`${indent}${key}: Array[${val.length}]`);
            if (val.length > 0) {
                if (typeof val[0] === 'object' && val[0] !== null) {
                    console.log(`${indent}  [0] keys: ${Object.keys(val[0]).join(', ')}`);
                    // Show first item values
                    for (const [k2, v2] of Object.entries(val[0])) {
                        const display = JSON.stringify(v2);
                        console.log(`${indent}    ${k2}: ${display.length > 80 ? display.substring(0, 80) + '...' : display}`);
                    }
                } else {
                    console.log(`${indent}  [0]: ${JSON.stringify(val[0]).substring(0, 100)}`);
                }
            }
        } else if (typeof val === 'object' && val !== null) {
            console.log(`${indent}${key}: Object{${Object.keys(val).length} keys}`);
            printStructure(val, indent + '  ', depth + 1);
        } else {
            const display = JSON.stringify(val);
            console.log(`${indent}${key}: ${display.length > 100 ? display.substring(0, 100) + '...' : display}`);
        }
    }
}

main().catch(console.error);
