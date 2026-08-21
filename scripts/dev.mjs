import http from "node:http";
import { resolve } from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const workerPath = resolve(projectRoot, "worker/index.js");
const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || `localhost:${PORT}`}`);

    // Dynamic import with cache busting so edits in worker/index.js are applied instantly on browser refresh
    const workerModule = await import(`${pathToFileURL(workerPath).href}?t=${Date.now()}`);

    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value) {
        if (Array.isArray(value)) {
          for (const v of value) headers.append(key, v);
        } else {
          headers.set(key, value);
        }
      }
    }

    const init = {
      method: req.method,
      headers,
    };

    if (req.method !== "GET" && req.method !== "HEAD") {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      init.body = Buffer.concat(chunks);
    }

    const webReq = new Request(url, init);
    const webRes = await workerModule.default.fetch(webReq, {}, {});

    res.statusCode = webRes.status;
    for (const [k, v] of webRes.headers.entries()) {
      res.setHeader(k, v);
    }

    const arrayBuffer = await webRes.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error("Error handling request:", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end(`Internal Server Error: ${err.message}\n${err.stack}`);
  }
});

server.listen(PORT, () => {
  console.log(`\n🚀 Local Dev Server running at: http://localhost:${PORT}`);
  console.log(`💡 Live reload enabled: edits in worker/index.js will be reflected on page refresh!\n`);
});
