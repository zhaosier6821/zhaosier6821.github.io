const base64Digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const chunkSize = 8192;
const audioFiles = new Map();

function audioErrorDetail(error) {
  const message = error?.errMsg || error?.message || (typeof error === "string" ? error : "");
  return [error?.errCode, message].filter((part) => part != null && part !== "").join(" ")
    .replace(/(?:xhsfile|file):\/\/[^\s,;)]+/g, "[音频缓存]")
    .replace(/\s+/g, " ")
    .slice(0, 120);
}

function decodeClip(clip) {
  const bytes = new Uint8Array(clip.size);
  let value = 0;
  let bits = 0;
  let offset = 0;
  for (const character of clip.encoded) {
    if (character === "=") break;
    const digit = base64Digits.indexOf(character);
    if (digit < 0) throw new Error("音频编码有误");
    value = (value << 6) | digit;
    bits += 6;
    if (bits >= 8) {
      bits -= 8;
      if (offset === bytes.length) throw new Error("音频数据长度有误");
      bytes[offset++] = (value >>> bits) & 255;
    }
  }
  if (offset !== bytes.length) throw new Error("音频数据不完整");
  return bytes;
}

async function fileCall(files, method, options) {
  try {
    return await new Promise((success, fail) => files[method]({ ...options, success, fail }));
  } catch (error) {
    throw new Error(method + " " + (audioErrorDetail(error) || "调用失败"));
  }
}

async function verifyClip(files, filePath, clip) {
  if (typeof files.getFileInfo !== "function") return;
  const info = await fileCall(files, "getFileInfo", { filePath, digestAlgorithm: "sha256" });
  const digest = String(info.digest || "").toLowerCase();
  const checksum = clip.file.slice(-16, -4);
  if (Number(info.size) !== clip.size || (digest.length === 64 && !digest.startsWith(checksum))) {
    throw new Error("手机上的音频文件校验失败");
  }
}

async function materializeClip(files, filePath, clip) {
  const bytes = decodeClip(clip);
  if (typeof files.appendFile === "function" && bytes[0] === 73 && bytes[1] === 68 && bytes[2] === 51) {
    try {
      // The ASCII ID3 header can be written as text. Append the remaining MP3 bytes in small chunks.
      await fileCall(files, "writeFile", { filePath, data: "ID3", encoding: "utf8" });
      for (let offset = 3; offset < bytes.length; offset += chunkSize) {
        const data = bytes.slice(offset, offset + chunkSize).buffer;
        await fileCall(files, "appendFile", { filePath, data, encoding: "binary" });
      }
      await verifyClip(files, filePath, clip);
      return filePath;
    } catch (chunkError) {
      try {
        await fileCall(files, "writeFile", { filePath, data: bytes.buffer });
        await verifyClip(files, filePath, clip);
        return filePath;
      } catch (wholeFileError) {
        console.warn("整段音频写入也失败", audioErrorDetail(wholeFileError));
        throw chunkError;
      }
    }
  }
  await fileCall(files, "writeFile", { filePath, data: bytes.buffer });
  await verifyClip(files, filePath, clip);
  return filePath;
}

function writeAudioClip(files, directory, clip) {
  const filePath = directory.replace(/\/+$/, "") + "/soul-original-" + clip.file;
  if (!audioFiles.has(filePath)) {
    const pending = materializeClip(files, filePath, clip).catch((error) => {
      audioFiles.delete(filePath);
      throw error;
    });
    audioFiles.set(filePath, pending);
  }
  return audioFiles.get(filePath);
}

module.exports = { audioErrorDetail, writeAudioClip };
