// Local verification only. Render serves dist directly in production.
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const dist = resolve(fileURLToPath(new URL('../dist', import.meta.url)));
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.ico': 'image/svg+xml', '.webp': 'image/webp', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain' };
http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, 'http://localhost');
    const path = decodeURIComponent(url.pathname);
    if (path === '/explainable') { response.writeHead(301, { Location: '/explainable/' }); response.end(); return; }
    const file = resolve(dist, `.${path}`);
    if (file !== dist && !file.startsWith(dist + sep)) { response.writeHead(403); response.end(); return; }
    const entry = await stat(file);
    const filename = entry.isDirectory() ? resolve(file, 'index.html') : file;
    const bytes = await readFile(filename);
    response.writeHead(200, { 'Content-Type': mime[extname(filename)] ?? 'application/octet-stream', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    response.end(request.method === 'HEAD' ? undefined : bytes);
  } catch { response.writeHead(404, { 'Content-Type': 'text/html' }); response.end(await readFile(resolve(dist, '404.html'))); }
}).listen(Number(process.env.PORT ?? 3000), '127.0.0.1', () => console.log('Static preview: http://127.0.0.1:3000'));
