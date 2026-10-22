const fs = require('fs')
const s = fs.readFileSync('design/manajemen_pengaduan/code.html', 'utf8')
const m = s.match(/<body[\s\S]*?<\/body>/i)
const body = m ? m[0] : s
let out = ''
let depth = 0
const re = /<(\/?)([a-zA-Z0-9-]+)([^>]*?)(\/?)>|([^<]+)/g
let m2
while ((m2 = re.exec(body))) {
  if (m2[5] !== undefined) {
    const txt = m2[5].trim()
    if (txt) out += '  '.repeat(depth) + txt + '\n'
  } else {
    const [, close, tag, attrs, selfClose] = m2
    const attrStr = attrs.replace(/\s+/g, ' ').trim()
    if (close) {
      depth = Math.max(0, depth - 1)
      out += '  '.repeat(depth) + '</' + tag + '>\n'
    } else {
      out += '  '.repeat(depth) + '<' + tag + (attrStr ? ' ' + attrStr : '') + (selfClose ? ' />' : '') + '\n'
      if (!selfClose && !['img', 'input', 'br', 'hr', 'meta', 'link'].includes(tag)) depth++
    }
  }
}
fs.writeFileSync('tmp_adm_fmt.txt', out, 'utf8')
console.log('lines', out.split('\n').length)
