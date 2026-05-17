const fs = require('fs');
const path = require('path');

const filePath = process.argv[2] || '__APP__.wxapkg';
const outputDir = process.argv[3] || 'unpacked';

const buf = fs.readFileSync(filePath);

// wxapkg format:
// byte 0: first mark (0xBE)
// bytes 1-4: info desc length (uint32 BE)
// bytes 5-8: data length (uint32 BE) - not always used
// bytes 9-12: index info length (uint32 BE)
// bytes 13-16: body info length (uint32 BE)
// byte 17: last mark (0xED)
// then index entries, then file bodies

let offset = 0;
const firstMark = buf.readUInt8(offset); offset += 1;
if (firstMark !== 0xBE) {
    console.error('Not a valid wxapkg file (first mark mismatch). May be encrypted.');
    process.exit(1);
}

const info1 = buf.readUInt32BE(offset); offset += 4;
const indexInfoLength = buf.readUInt32BE(offset); offset += 4;
const bodyInfoLength = buf.readUInt32BE(offset); offset += 4;
const lastMark = buf.readUInt8(offset); offset += 1;

if (lastMark !== 0xED) {
    console.error('Not a valid wxapkg file (last mark mismatch). May be encrypted.');
    process.exit(1);
}

console.log(`Header: firstMark=0x${firstMark.toString(16)}, info1=${info1}, indexInfoLength=${indexInfoLength}, bodyInfoLength=${bodyInfoLength}`);
// Reset offset to 14 (right after header)
offset = 14;
console.log(`Index starts at offset: ${offset}`);

const fileCount = buf.readUInt32BE(offset); offset += 4;
console.log(`File count: ${fileCount}`);

const files = [];
for (let i = 0; i < fileCount; i++) {
    const nameLen = buf.readUInt32BE(offset); offset += 4;
    const name = buf.slice(offset, offset + nameLen).toString('utf-8'); offset += nameLen;
    const fileOffset = buf.readUInt32BE(offset); offset += 4;
    const fileSize = buf.readUInt32BE(offset); offset += 4;
    files.push({ name, offset: fileOffset, size: fileSize });
}

console.log(`\nExtracting ${files.length} files to ${outputDir}/...`);

let extracted = 0;
for (const file of files) {
    const outPath = path.join(outputDir, file.name);
    const dir = path.dirname(outPath);
    fs.mkdirSync(dir, { recursive: true });
    const content = buf.slice(file.offset, file.offset + file.size);
    fs.writeFileSync(outPath, content);
    extracted++;
}

console.log(`Done! Extracted ${extracted} files.`);
