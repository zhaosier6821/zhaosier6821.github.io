import { readFileSync, writeFileSync } from "node:fs";
import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const parts = ["license-header.js", "entry-header.js", "data.js", "logic.js", "audio.js", "app.js", "entry-footer.js"];
const assembled = parts.map((file) => readFileSync(path.join(root, "src", file), "utf8")).join("");
assert(!/\?\.|\?\?/.test(assembled), "运行脚本须保持 ES2017 兼容语法");
writeFileSync(path.join(root, "app", "app.js"), assembled);
console.log("已生成 app/app.js。HTML、CSS、media.js 和素材直接在 app/ 中维护。");
