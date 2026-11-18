import http from "node:http";
import { readFile, realpath } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = path.join(path.dirname(fileURLToPath(import.meta.url)), "app");
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".webp": "image/webp", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".woff2": "font/woff2" };
http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://localhost");
    const resource = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
    const target = await realpath(path.join(app, resource));
    if (!target.startsWith(app + path.sep)) {
      response.writeHead(403).end();
      return;
    }
    const content = await readFile(target);
    response.writeHead(200, { "Content-Type": mime[path.extname(target)] || "application/octet-stream", "Cache-Control": "no-store" });
    response.end(content);
  } catch (error) {
    response.writeHead(404).end("文件不存在");
  }
}).listen(4187, "127.0.0.1", () => console.log("本地预览 http://127.0.0.1:4187/"));
