import { cpSync, existsSync, rmSync, writeFileSync } from "node:fs";

if (existsSync("dist")) {
  rmSync("dist", { recursive: true, force: true });
}

cpSync("out", "dist", { recursive: true });

writeFileSync(
  "dist/index.js",
  `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
`
);
