import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = resolve(root, 'dist');
async function files(folder) { return (await Promise.all((await readdir(folder, { withFileTypes: true })).map(e => e.isDirectory() ? files(resolve(folder, e.name)) : [resolve(folder, e.name)]))).flat(); }
const manifest = JSON.parse(await readFile(resolve(dist, 'build-manifest.json'), 'utf8'));
assert.equal(manifest.runtime, 'static');
assert(manifest.routes.length > 20);
for (const path of await files(dist)) {
  if (!['.html', '.js', '.css'].includes(extname(path))) continue;
  const source = await readFile(path, 'utf8');
  assert(!source.includes('https://app.phamthanhphu.io.vn'), `Stale app URL: ${path}`);
  if (path.includes(`${resolve(dist, 'explainable')}`) && extname(path) === '.js') {
    assert(!/\/api\/intake|GEMINI_API_KEY|TAVILY_API_KEY|generativelanguage\.googleapis\.com|api\.tavily\.com/.test(source), `Live API found: ${path}`);
  }
  if (extname(path) !== '.html') continue;
  if (!path.includes(resolve(dist, 'explainable'))) {
    assert(source.includes('Content-Security-Policy'), `Missing static CSP: ${path}`);
    for (const m of source.matchAll(/<(script|style)\b([^>]*)>([\s\S]*?)<\/\1>/gi)) {
      if (m[1] === 'script' && /\bsrc=/.test(m[2])) continue;
      const hash = createHash('sha256').update(m[3]).digest('base64');
      assert(source.includes(`sha256-${hash}`), `Missing inline code hash: ${path}`);
    }
  }
  for (const m of source.matchAll(/(?:src|href)="(\/[^"#?]*)/g)) {
    const url = decodeURI(m[1]);
    const file = resolve(dist, `.${url}`);
    try { const s = await stat(file); if (s.isDirectory()) await stat(resolve(file, 'index.html')); }
    catch { throw new Error(`Broken local link ${url} in ${path}`); }
  }
}
assert(!(await files(dist)).some(p => p.endsWith('server.cjs') || p.endsWith('server/index.js')));
console.log(`Verified static routes, local links, CSP hashes, and absence of live intake APIs.`);
