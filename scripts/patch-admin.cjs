const fs = require('fs')
const p = 'src/dataAdmin.jsx'
let lines = fs.readFileSync(p, 'utf8').split(/\r?\n/)
let n = 0
for (let i = 0; i < lines.length; i++) {
  if (/^\s*instansi: 'Dinas/.test(lines[i]) && !/PUPR/.test(lines[i])) {
    lines[i] = "    instansi: 'Dinas PUPR',"
    n++
  }
}
fs.writeFileSync(p, lines.join('\n'), 'utf8')
console.log('patched', n)
console.log(lines.filter((l) => l.includes('instansi')).join('\n'))
