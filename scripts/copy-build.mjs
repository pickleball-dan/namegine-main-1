import { cpSync, existsSync, rmSync, writeFileSync } from "node:fs";

if (existsSync("dist")) {
  rmSync("dist", { recursive: true, force: true });
}

cpSync("out", "dist", { recursive: true });

writeFileSync(
  "dist/index.js",
  `import { createReadStream, existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { createServer } from "node:http";

const root = process.cwd();
const port = process.env.PORT || 3000;
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

function fileFor(urlPath) {
  const clean = normalize(decodeURIComponent(urlPath.split("?")[0])).replace(/^([.][.][\\\\/])+/, "");
  const candidate = clean === "/" ? "index.html" : clean.replace(/^\\\\//, "");
  const direct = join(root, candidate);
  return existsSync(direct) ? direct : join(root, "index.html");
}

createServer((request, response) => {
  const file = fileFor(request.url || "/");
  response.setHeader("Content-Type", types[extname(file)] || "application/octet-stream");
  createReadStream(file)
    .on("error", () => {
      response.statusCode = 404;
      response.end("Not found");
    })
    .pipe(response);
}).listen(port);
`
);
