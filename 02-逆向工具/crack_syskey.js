const crypto = require('crypto');

function md5(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}

// Known pairs from HAR
const pairs = [
    // get-result-realtime-race requests
    { flag: 'get-result-realtime-race', ssid: '22', uid: '1360605', tab: '3', pid: '2132008', itemid: '618251', ts: '1779004792250', syskey: '77b72c8177c0a2eb91c8521c12760d23' },
    { flag: 'get-result-realtime-race', ssid: '22', uid: '1360605', tab: '3', pid: '2132008', itemid: '0', ts: '1779004796497', syskey: '96d57f82ec4619f2ec5168286f682230' },
    { flag: 'get-result-realtime-race', ssid: '22', uid: '1360605', tab: '3', pid: '2132008', itemid: '0', ts: '1779004797233', syskey: '6e0d662b9286979c11a4dbc0828c0500' },
    { flag: 'get-result-realtime-race', ssid: '22', uid: '1360605', tab: '3', pid: '2132008', itemid: '0', ts: '1779004802245', syskey: '61a770b220d2f06ac952db6eda6687f5' },
    // get-user-msg-count requests
    { flag: 'get-user-msg-count', userID: '2954452', ssid: '22', ts: '1779004798150', syskey: 'e3a8a6e0d76321de527bfe527e6983bf' },
    { flag: 'get-user-msg-count', userID: '2954452', ssid: '22', ts: '1779004808991', syskey: '12a77bf1b4354d20158e34c5facb69bd' },
];

// Common salts to try
const salts = ['', 'xkarting', 'myraceing', 'racing', 'kart', 'xkart', '123456', 'abc', 'key', 'secret', 'salt', 'api', 'wx', 'wechat', 'mini', 'app', 'wxca87659badc84f9c'];

console.log('Testing MD5 patterns against known syskey values...\n');

for (const pair of pairs) {
    const { flag, ts, syskey, ssid, uid, userID, pid, itemid } = pair;
    const params = { flag, ssid, uid, userID, ts, pid, itemid };

    // Get all param values
    const vals = Object.entries(params).filter(([k,v]) => v !== undefined);

    for (const salt of salts) {
        // Pattern 1: MD5(ts + salt)
        if (md5(ts + salt) === syskey) { console.log(`FOUND! MD5(ts + "${salt}") for ts=${ts}`); }
        if (md5(salt + ts) === syskey) { console.log(`FOUND! MD5("${salt}" + ts) for ts=${ts}`); }

        // Pattern 2: MD5(flag + ts + salt)
        if (md5(flag + ts + salt) === syskey) { console.log(`FOUND! MD5(flag + ts + "${salt}") for ts=${ts}`); }
        if (md5(salt + flag + ts) === syskey) { console.log(`FOUND! MD5("${salt}" + flag + ts) for ts=${ts}`); }

        // Pattern 3: MD5(ts + flag + salt)
        if (md5(ts + flag + salt) === syskey) { console.log(`FOUND! MD5(ts + flag + "${salt}") for ts=${ts}`); }

        // Pattern 4: MD5(all params concatenated + salt)
        const allVals = vals.map(([k,v]) => v).join('');
        if (md5(allVals + salt) === syskey) { console.log(`FOUND! MD5(allVals + "${salt}") for ts=${ts}, allVals=${allVals}`); }
        if (md5(salt + allVals) === syskey) { console.log(`FOUND! MD5("${salt}" + allVals) for ts=${ts}`); }

        // Pattern 5: MD5(key=value pairs + salt)
        const kvStr = vals.map(([k,v]) => `${k}=${v}`).join('&');
        if (md5(kvStr + salt) === syskey) { console.log(`FOUND! MD5(kvStr + "${salt}") for ts=${ts}, kvStr=${kvStr}`); }

        // Pattern 6: MD5(ts + ssid + salt)
        if (md5(ts + ssid + salt) === syskey) { console.log(`FOUND! MD5(ts + ssid + "${salt}") for ts=${ts}`); }
        if (md5(salt + ts + ssid) === syskey) { console.log(`FOUND! MD5("${salt}" + ts + ssid) for ts=${ts}`); }

        // Pattern 7: MD5(ssid + ts + salt)
        if (md5(ssid + ts + salt) === syskey) { console.log(`FOUND! MD5(ssid + ts + "${salt}") for ts=${ts}`); }

        // Pattern 8: MD5(uid/userID + ts + salt)
        const userId = uid || userID;
        if (userId) {
            if (md5(userId + ts + salt) === syskey) { console.log(`FOUND! MD5(userId + ts + "${salt}") for ts=${ts}`); }
            if (md5(ts + userId + salt) === syskey) { console.log(`FOUND! MD5(ts + userId + "${salt}") for ts=${ts}`); }
            if (md5(salt + userId + ts) === syskey) { console.log(`FOUND! MD5("${salt}" + userId + ts) for ts=${ts}`); }
        }

        // Pattern 9: with pid
        if (pid) {
            if (md5(pid + ts + salt) === syskey) { console.log(`FOUND! MD5(pid + ts + "${salt}") for ts=${ts}`); }
            if (md5(ts + pid + salt) === syskey) { console.log(`FOUND! MD5(ts + pid + "${salt}") for ts=${ts}`); }
        }

        // Pattern 10: MD5(flag + ssid + ts + salt)
        if (md5(flag + ssid + ts + salt) === syskey) { console.log(`FOUND! MD5(flag + ssid + ts + "${salt}") for ts=${ts}`); }

        // Pattern 11: MD5(flag + uid + ts + salt)
        if (userId) {
            if (md5(flag + userId + ts + salt) === syskey) { console.log(`FOUND! MD5(flag + userId + ts + "${salt}") for ts=${ts}`); }
        }

        // Pattern 12: with underscores/dashes
        if (md5(`${ts}_${salt}`) === syskey) { console.log(`FOUND! MD5(ts + "_" + "${salt}") for ts=${ts}`); }
        if (md5(`${flag}_${ts}_${salt}`) === syskey) { console.log(`FOUND! MD5(flag + "_" + ts + "_" + "${salt}") for ts=${ts}`); }
    }
}

// Also try: the original POST body without syskey as input to MD5
console.log('\nTrying MD5 of POST body without syskey...');
const body1 = 'flag=get-result-realtime-race&ssid=22&uid=1360605&tab=3&pid=2132008&itemid=618251&timeStamp=1779004792250';
const body2 = 'flag=get-result-realtime-race&ssid=22&uid=1360605&tab=3&pid=2132008&itemid=0&timeStamp=1779004796497';
const body3 = 'flag=get-user-msg-count&timeStamp=1779004798150&userID=2954452&ssid=22';

console.log('MD5(body1):', md5(body1), 'expected:', '77b72c8177c0a2eb91c8521c12760d23');
console.log('MD5(body2):', md5(body2), 'expected:', '96d57f82ec4619f2ec5168286f682230');
console.log('MD5(body3):', md5(body3), 'expected:', 'e3a8a6e0d76321de527bfe527e6983bf');

// Try sorted params
console.log('\nTrying MD5 of sorted params...');
const sorted1 = 'flag=get-result-realtime-race&itemid=618251&pid=2132008&ssid=22&tab=3&timeStamp=1779004792250&uid=1360605';
const sorted2 = 'flag=get-result-realtime-race&itemid=0&pid=2132008&ssid=22&tab=3&timeStamp=1779004796497&uid=1360605';
console.log('MD5(sorted1):', md5(sorted1), 'expected:', '77b72c8177c0a2eb91c8521c12760d23');
console.log('MD5(sorted2):', md5(sorted2), 'expected:', '96d57f82ec4619f2ec5168286f682230');

// Try just values concatenated
console.log('\nTrying just values...');
console.log('MD5("get-result-realtime-race221360605320320086182511779004792250"):', md5('get-result-realtime-race221360605320320086182511779004792250'));
console.log('MD5("get-result-realtime-race22136060532013200801779004796497"):', md5('get-result-realtime-race22136060532013200801779004796497'));

console.log('\nDone.');
