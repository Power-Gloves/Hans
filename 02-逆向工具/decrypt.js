const crypto = require('crypto');
const fs = require('fs');

const inputFile = process.argv[2] || '__APP__.wxapkg';
const outputFile = process.argv[3] || '__APP__.decrypted.wxapkg';
const wxid = process.argv[4] || 'wxca87659badc84f9c';

const data = fs.readFileSync(inputFile);

// Check V1MMWX header
const header = data.slice(0, 6).toString('utf-8');
if (header !== 'V1MMWX') {
    console.error('Not a V1MMWX encrypted wxapkg file');
    process.exit(1);
}

console.log(`Decrypting ${inputFile} with wxid=${wxid}...`);

// Derive key using PBKDF2
const salt = 'saltiest';
const iv = 'the iv: 16 bytes';
const key = crypto.pbkdf2Sync(wxid, salt, 1000, 32, 'sha1');

// The encrypted data starts at offset 6, first 1024 bytes are AES encrypted
const encryptedPart = data.slice(6, 6 + 1024);
const restPart = data.slice(6 + 1024);

// Decrypt first 1024 bytes
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
decipher.setAutoPadding(false);
let decrypted = decipher.update(encryptedPart);
decrypted = Buffer.concat([decrypted, decipher.final()]);

// XOR key: wxid[len-2] or 0x66 as fallback
const xorByte = wxid.length >= 2 ? wxid.charCodeAt(wxid.length - 2) : 0x66;
console.log(`XOR byte: 0x${xorByte.toString(16)} ('${String.fromCharCode(xorByte)}')`);

const restDecrypted = Buffer.alloc(restPart.length);
for (let i = 0; i < restPart.length; i++) {
    restDecrypted[i] = restPart[i] ^ xorByte;
}

// Combine: take first 1023 bytes of AES decrypted (drop last padding byte) + XOR'd rest
const result = Buffer.concat([decrypted.slice(0, 1023), restDecrypted]);
fs.writeFileSync(outputFile, result);

console.log(`Decrypted! Output: ${outputFile} (${result.length} bytes)`);
console.log(`First bytes: ${result.slice(0, 4).toString('hex')}`);

if (result[0] === 0xBE) {
    console.log('Valid wxapkg header detected!');
} else {
    console.log('Header byte is 0x' + result[0].toString(16) + ', expected 0xBE.');
}
