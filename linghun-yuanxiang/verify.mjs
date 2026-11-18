import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { runInNewContext } from "node:vm";
import { fileURLToPath } from "node:url";
const root = path.dirname(fileURLToPath(import.meta.url));
const manifest = JSON.parse(readFileSync(path.join(root, "releases/manifest.json"), "utf8"));
const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");
const archive = readFileSync(path.join(root, "releases", manifest.archive));
assert.equal(hash(archive), manifest.archive_sha256);
for (const entry of manifest.entry_files) {
  assert.equal(hash(readFileSync(path.join(root, "app", entry.path))), entry.sha256, entry.path);
}
const data = readFileSync(path.join(root, "src/data.js"), "utf8");
const { config, cards, audioClips } = runInNewContext(data + "\n({ config, cards, audioClips })");
assert.equal(config.questions.length, 8);
assert.equal(Object.keys(cards).length, 16);
for (const clip of Object.values(audioClips)) {
  const bytes = Buffer.from(clip.encoded, "base64");
  assert.equal(bytes.length, clip.size, clip.file);
  assert(hash(bytes).startsWith(clip.file.slice(-16, -4)), clip.file);
}
const html = readFileSync(path.join(root, "app/index.html"), "utf8");
assert(!/<script(?![^>]*\bsrc=)[^>]*>\s*\S/i.test(html));
assert(!/\son\w+\s*=/.test(html));
console.log("发布 ZIP、全部展开文件、8 道题、16 张牌、4 段音频的长度与哈希通过。");
