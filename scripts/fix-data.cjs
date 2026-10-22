const fs = require('fs');
const p = 'src/data.jsx';
let t = fs.readFileSync(p, 'utf8');
const lines = t.split(/\r?\n/);
const idx = lines.findIndex((l) => l.includes('Progres lapangan'));
if (idx === -1) { console.log('NOT FOUND'); process.exit(1); }
lines[idx] = "        'Progres lapangan: 60% sampah di pintu air telah diangkat manual, dilanjutkan pembersihan total saluran air dan penjagaan area sekitar.',";
t = lines.join('\n');
fs.writeFileSync(p, t, 'utf8');
console.log('FIXED line', idx + 1);
console.log(lines[idx]);
