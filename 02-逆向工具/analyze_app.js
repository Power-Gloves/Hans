const fs = require('fs');
const c = fs.readFileSync('d:/项目/个人学习/tools/myRacing/unpacked/app-service.js', 'utf8');

// Find all define() blocks
const defines = [...c.matchAll(/define\("([^"]+\.js)"/g)].map(m => m[1]);

console.log('=== 小程序页面功能分析 ===\n');

defines.forEach(d => {
    const marker = 'define("' + d + '"';
    const idx = c.indexOf(marker);
    if (idx === -1) return;

    // Find the end of this define block (next define or end)
    const nextDefine = c.indexOf('define("', idx + marker.length);
    const end = nextDefine > -1 ? nextDefine : idx + 20000;
    const block = c.substring(idx, Math.min(end, idx + 20000));

    // Extract function names
    const funcs = [...block.matchAll(/([a-zA-Z_]\w+)\s*:\s*function\s*\(/g)]
        .map(m => m[1])
        .filter(f => !['success', 'fail', 'complete', 'bind', 'exports', 'require', 'module', 'define'].includes(f));

    // Extract API flags used
    const flags = [...block.matchAll(/flag[=:]\s*["']([a-z\-]+)["']/g)].map(m => m[1]);
    const flagVars = [...block.matchAll(/var\s+\w+\s*=\s*["']([a-z]+-[a-z\-]+)["']/g)].map(m => m[1]);
    const allFlags = [...new Set([...flags, ...flagVars])];

    // Extract data fields
    const dataFields = [...block.matchAll(/this\.data\.(\w+)/g)].map(m => m[1]);
    const uniqueData = [...new Set(dataFields)].filter(f => f.length > 2);

    // Extract setData fields
    const setDataFields = [...block.matchAll(/setData\(\{([^}]{1,200})\}/g)]
        .map(m => m[1])
        .join(',')
        .match(/(\w+)\s*:/g);
    const stateFields = setDataFields ? [...new Set(setDataFields.map(s => s.replace(':', '').trim()))] : [];

    if (funcs.length > 0 || allFlags.length > 0) {
        console.log(`--- ${d} ---`);
        if (funcs.length > 0) console.log(`  Functions: ${funcs.join(', ')}`);
        if (allFlags.length > 0) console.log(`  API flags: ${allFlags.join(', ')}`);
        if (stateFields.length > 0) console.log(`  State: ${stateFields.slice(0, 15).join(', ')}`);
        console.log();
    }
});
