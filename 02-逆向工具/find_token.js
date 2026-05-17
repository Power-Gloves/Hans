const crypto = require('crypto');

function md5(s) {
    return crypto.createHash('md5').update(s).digest('hex');
}

// Known: syskey = MD5(Token + "@" + flag + "@" + timeStamp + "@" + uid)
// We have multiple pairs to validate against

const pairs = [
    { flag: 'get-result-realtime-race', ts: '1779004792250', uid: '1360605', syskey: '77b72c8177c0a2eb91c8521c12760d23' },
    { flag: 'get-result-realtime-race', ts: '1779004796497', uid: '1360605', syskey: '96d57f82ec4619f2ec5168286f682230' },
    { flag: 'get-result-realtime-race', ts: '1779004797233', uid: '1360605', syskey: '6e0d662b9286979c11a4dbc0828c0500' },
    { flag: 'get-user-msg-count', ts: '1779004798150', uid: '2954452', syskey: 'e3a8a6e0d76321de527bfe527e6983bf' },
];

// The Token is likely a GUID or hash returned from the server
// Let's try common patterns:

// 1. Maybe Token is the uid itself?
for (const uid of ['1360605', '2954452']) {
    const s = uid + '@' + pairs[0].flag + '@' + pairs[0].ts + '@' + pairs[0].uid;
    if (md5(s) === pairs[0].syskey) console.log('Token is uid:', uid);
}

// 2. Maybe Token is the ssid?
const s2 = '22@' + pairs[0].flag + '@' + pairs[0].ts + '@' + pairs[0].uid;
if (md5(s2) === pairs[0].syskey) console.log('Token is ssid: 22');

// 3. Brute force: Token is likely a short string or GUID
// Let's try to crack it using the constraint that the same token must work for ALL pairs

// First, let's check: maybe the Token is empty but parameter order is different?
const orders = [
    (p) => '@' + p.flag + '@' + p.ts + '@' + p.uid,
    (p) => '@' + p.ts + '@' + p.flag + '@' + p.uid,
    (p) => '@' + p.uid + '@' + p.flag + '@' + p.ts,
    (p) => '@' + p.uid + '@' + p.ts + '@' + p.flag,
    (p) => '@' + p.flag + '@' + p.uid + '@' + p.ts,
    (p) => '@' + p.ts + '@' + p.uid + '@' + p.flag,
    (p) => p.flag + '@' + p.ts + '@' + p.uid,
    (p) => p.ts + '@' + p.flag + '@' + p.uid,
    (p) => p.uid + '@' + p.flag + '@' + p.ts,
];

console.log('\nTesting parameter orders with empty token:');
orders.forEach((fn, i) => {
    const allMatch = pairs.every(p => md5(fn(p)) === p.syskey);
    if (allMatch) console.log('Order', i, 'MATCHES ALL!', fn(pairs[0]));
    else {
        // Check first pair only
        if (md5(fn(pairs[0])) === pairs[0].syskey) console.log('Order', i, 'matches first only');
    }
});

// 4. Maybe the userID field (2954452) is used as uid for msg-count syskey
// but the format uses different args. Let me check get-user-msg-count more carefully:
// createSysKey(t, e, a) where t=flag, e=timeStamp, a=userID
// So syskey = MD5(Token + "@get-user-msg-count@1779004798150@2954452")
// And for race: syskey = MD5(Token + "@get-result-realtime-race@1779004792250@1360605")

// These use the SAME Token. Let me try: what if the Token is stored in wx storage
// and we can read it from the HAR data?

// Actually let's try to find the token by checking if it appears in the POST body
// The uid=1360605 might actually be a different user's ID.
// userID=2954452 is likely the logged-in user's ID.
// Let's also try with userID=2954452 as uid for the race requests

console.log('\nTrying userID 2954452 as token:');
const test = md5('2954452@get-result-realtime-race@1779004792250@1360605');
console.log(test, test === pairs[0].syskey ? 'MATCH' : 'NO');

// Maybe the token from server response includes the userID
// Let's generate a rainbow for short numeric tokens
console.log('\nBrute forcing with numeric tokens up to 8 digits...');
const p = pairs[0];
for (let i = 0; i <= 99999999; i++) {
    const token = i.toString();
    const hash = md5(token + '@' + p.flag + '@' + p.ts + '@' + p.uid);
    if (hash === p.syskey) {
        console.log('FOUND! Token =', token);
        // Verify against all pairs
        const allOk = pairs.every(pp => md5(token + '@' + pp.flag + '@' + pp.ts + '@' + pp.uid) === pp.syskey);
        console.log('All pairs match:', allOk);
        break;
    }
    if (i % 10000000 === 0 && i > 0) console.log('Checked', i);
}
console.log('Done');
