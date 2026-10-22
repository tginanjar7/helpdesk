const fs = require('fs');
const path = process.argv[2];
const src = fs.readFileSync(path, 'utf8');
const body = src.match(/<body[\s\S]*?<\/body>/)[0];

// naive tag scanner producing an outline
const re = /<(\/?)([a-zA-Z0-9-]+)([^>]*?)(\/?)>/g;
let m;
const out = [];
let depth = 0;
const SKIP = new Set(['img', 'br', 'hr', 'meta', 'link', 'input', 'path', 'source']);
while ((m = re.exec(body))) {
  const closing = m[1] === '/';
  const tag = m[2].toLowerCase();
  const attrs = m[3] || '';
  if (SKIP.has(tag)) continue;
  const cm = attrs.match(/class="([^"]*)"/);
  const cls = cm ? cm[1] : '';
  const idm = attrs.match(/id="([^"]*)"/);
  if (closing) { depth = Math.max(0, depth - 1); continue; }
  const selfClose = m[4] === '/';
  const indent = '  '.repeat(Math.min(depth, 12));
  const idpart = idm ? ` #${idm[1]}` : '';
  out.push(`${indent}<${tag}${idpart} class="${cls.slice(0, 160)}">`);
  if (!selfClose) depth++;
}
console.log(out.join('\n'));
