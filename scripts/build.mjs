import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import worker, { portfolioRoutes } from '../worker/index.js';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = resolve(root, 'dist');
// The only recursive removal target is the known build directory in this repo.
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(resolve(root, 'public'), dist, { recursive: true });
const hash = code => `'sha256-${createHash('sha256').update(code).digest('base64')}'`;
function staticHtml(html) {
  const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].filter(m => !/\bsrc=/.test(m[0])).map(m => hash(m[1]));
  const styles = [...html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].map(m => hash(m[1]));
  const csp = `default-src 'self' https://drive.google.com https://docs.google.com https://accounts.google.com; script-src 'self' ${[...new Set(scripts)].join(' ')}; style-src 'self' https://fonts.googleapis.com ${[...new Set(styles)].join(' ')}; style-src-attr 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' https://drive.google.com https://*.googleusercontent.com https://ssl.gstatic.com data:; frame-src 'self' https://drive.google.com https://docs.google.com https://accounts.google.com; connect-src 'self' https://drive.google.com; object-src 'none'; base-uri 'self'; form-action 'self'`;
  return html.replace(/ nonce="[^"]*"/g, '').replace(/<head>/i, `<head>\n<meta http-equiv="Content-Security-Policy" content="${csp}">`);
}
for (const route of portfolioRoutes) {
  const response = await worker.fetch(new Request(`https://phamthanhphu.io.vn${route}`), {}, {});
  if (response.status !== 200) throw new Error(`Portfolio route ${route}: ${response.status}`);
  const folder = resolve(dist, `.${route}`);
  await mkdir(folder, { recursive: true });
  await writeFile(resolve(folder, 'index.html'), staticHtml(await response.text()));
}
for (const route of ['/favicon.svg', '/favicon.ico', '/assets/home-cat.webp', '/assets/phu-portrait.webp']) {
  const response = await worker.fetch(new Request(`https://phamthanhphu.io.vn${route}`), {}, {});
  if (response.status !== 200) throw new Error(`Portfolio asset ${route}: ${response.status}`);
  const filename = resolve(dist, `.${route}`);
  await mkdir(resolve(filename, '..'), { recursive: true });
  await writeFile(filename, Buffer.from(await response.arrayBuffer()));
}
const missing = await worker.fetch(new Request('https://phamthanhphu.io.vn/__missing__'), {}, {});
await writeFile(resolve(dist, '404.html'), staticHtml(await missing.text()));
await writeFile(resolve(dist, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: https://phamthanhphu.io.vn/sitemap.xml\n');
await writeFile(resolve(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...portfolioRoutes, '/explainable/'].map(r => `<url><loc>https://phamthanhphu.io.vn${r}</loc></url>`).join('')}</urlset>`);
const vite = resolve(root, 'node_modules/vite/bin/vite.js');
const build = spawnSync(process.execPath, [vite, 'build'], { cwd: resolve(root, 'apps/explainable'), stdio: 'inherit' });
if (build.status !== 0) process.exit(build.status ?? 1);
await cp(resolve(root, 'apps/explainable/dist'), resolve(dist, 'explainable'), { recursive: true });
await writeFile(resolve(dist, 'build-manifest.json'), JSON.stringify({ routes: portfolioRoutes, showcase: '/explainable/', runtime: 'static' }, null, 2));
console.log(`Built ${portfolioRoutes.length} portfolio pages and /explainable/ as static files.`);
