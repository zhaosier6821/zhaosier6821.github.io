# 音乐插入、手机出声与排障

本文对应 2026-11-17 上线的《灵魂原像》V1.0.1。完整实现是 [src/audio.js](../src/audio.js)，调用点在 [src/app.js](../src/app.js)。音频编码数据在 [src/data.js](../src/data.js) 的 `audioClips`。

## 1. 当前音乐如何播放

当前发布版本运行于 Builder Hub 的离线 HTML 小工具。小红书公开文档列出的包内文件类型包含 HTML、JS、CSS、图片和字体，音频扩展名未列入该清单。页面外部网络也受限制。本次把四段压缩 MP3 的字节编码成 base64 字符串，随本地外置 JS 下发，在用户点击后通过 Web Audio 解码播放。

数据流为以下五步。

1. 将有授权的音频剪成所需片段，压缩为 MP3。
2. 构建时编码为 base64，保留解码后的字节数 `size`。
3. 用户点击「去探寻」、选项或音乐按钮，初始化并恢复 `AudioContext`。
4. `atob → Uint8Array → decodeAudioData → AudioBuffer`。
5. 每次播放创建一个 `AudioBufferSourceNode`，接 `GainNode`，再接 `context.destination`。

[官方包内资源与网络规则](https://miniapp-sandbox.xiaohongshu.com/minitool/doc#s2-6) · [MDN Web Audio 实践](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices)

## 2. 四段声音分别做什么

| 数据键 | 内容 | 触发时机 | 循环 | Gain |
| --- | --- | --- | --- | --- |
| music | 雨声与钢琴 BGM 的约 30 秒压缩片段 | 去探寻 / 后续用户交互解锁 | 是 | 0.65 |
| answerSound | 水滴音效 | 选中答案 | 否 | 1 |
| flipSound | 纸张翻转 | 结果翻牌开始 | 否 | 1 |
| writingSound | 写字摩擦声 | 点击解读后，逐字显示期间 | 是 | 1 |

`Gain = 1` 表示维持文件已有响度。书写声在此前迭代中已经降低了音频文件本身的电平，最终代码因此仍是 1。只看播放器的音量数值无法比较四段声音的听感。换素材时要连同文件电平和播放器 Gain 一起试听。

录音剪辑的确切历史滤镜和每次倍率未完整归档，这里保留最终字节及校验值。不能从「降低一半」「再降三分之一」推算出一个未验证的新常数。

## 3. 为什么先等待点击

移动浏览器可能限制未经用户交互的声音播放。页面出现时可以先展示音乐图标，用户点击「去探寻」后在同一条交互链调用 `sound.unlock()`。已有 context 处于挂起状态时调用 `resume()`。

当前实现优先使用 `window.AudioContext`，兼容 `window.webkitAudioContext`。只有 context 恢复后才播放，初始化或恢复失败会显示可重试提示。首次进入页面，在点击之前听不到 BGM 属于本实现的启动顺序。

```js
const sound = createAudio(audioClips, musicToggle, notice);
startButton.addEventListener("click", () => {
  sound.unlock();
  // 然后进入答题页
});
optionButton.addEventListener("click", () => {
  sound.unlock("answerSound");
});
```

[MDN 自动播放与用户交互说明](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices)

## 4. 把自己的音频编码进 JS

先从原作者或官方来源取得有相应使用授权的音频。Pixabay 曲目网页链接是作品页面，不能直接当作播放器的音频地址。格式可以沿用当前数据。

```js
const audioClips = {
  music: {
    file: "my-music.mp3",
    size: 12345,
    encoded: "这里放完整 MP3 字节的 base64"
  }
};
```

在你自己的机器上，用 Node.js 生成数据。

```js
const fs = require("node:fs");
const bytes = fs.readFileSync("my-music.mp3");
console.log(JSON.stringify({
  file: "my-music.mp3",
  size: bytes.length,
  encoded: bytes.toString("base64")
}, null, 2));
```

当前 `encoded` 已经是字符串。历史原生数据源先用字符串数组保存，再通过 `.join("")` 导出字符串。移植时曾误对最终字符串调用 `.join("")`，导致解码失败，修复为直接读取 `clip.encoded`。复用前先确认数据的实际类型。

base64 通常增大原始字节体积。建议控制录音长度与码率，并实测循环接缝。约 30 秒只是本项目的折中，不能保证任何录音剪到该长度都自然循环。

## 5. 避免叠音和异步竞态

`decoded` 缓存每段声音的解码 Promise，`active` 记录正在播的 source，`pending` 记录尚在解码的播放请求。停音时同时删除 pending，防止用户已经关掉音乐，旧的解码任务却在稍后突然播放。

source 每次新建。Web Audio 的 buffer source 开始后不能重复启动。音频结束时断开 source 与 Gain 连接，清理 active。当前逻辑对同一段正在播放的声音做去重。

背景音乐停止时，按当前播放位置算出 `musicOffset`，恢复后从该偏移继续。偏移对片段时长取模。此状态只在当前会话内保留。

## 6. 全局开关和后台暂停

右上角按钮统一控制 BGM、水滴、翻牌及书写。主动关闭会暂停所有声音。图标只有在 BGM source 已启动时才旋转，暂停或关闭时停止。

`visibilitychange` 隐藏时停止所有 source，返回时在已经解锁的前提下尝试恢复 BGM，写字仍在进行时恢复书写声。跨手机系统的音频中断恢复仍应真机验证。

开关偏好读写 `localStorage`，有异常保护。平台新版本建议优先使用其 Storage JS API。此处保留上线时实现，偏好数据缺失时回到默认开启状态。功能本身应容忍缓存被清理。[平台存储规则](https://miniapp-sandbox.xiaohongshu.com/minitool/doc#s2-4)

## 7. 声音与动画保持同步

- 选择答案先播放水滴，再等待 420ms 自动跳题。
- 卡牌和局部图片准备好后进入结果页，在翻牌开始时调用 `sound.play("flipSound")`。
- 点击「解读卡牌」才启动逐字书写及 `sound.setWriting(true)`。
- 最后一个字出现、离开结果或重新测试时 `sound.setWriting(false)`。
- 页面切换清理翻牌和书写，避免图鉴的上一张牌继续响。

所有触发都走同一个管理器，因此静音、挂起和解码状态有共同判断。

## 8. 手机没有声音时，按实际链路查

| 看到的现象 | 核对内容 |
| --- | --- |
| 首屏没声音 | 点击去探寻，确认已有用户交互 |
| 图标一直不转 | 查看 context 是否创建并恢复、base64 解码是否失败 |
| 点图标显示载入失败 | 检查 encoded 类型、长度、MP3 字节是否完整，是否被截断 |
| BGM 能播而音效没声 | 确认该音效数据和对应调用都存在，以及是否被 active 去重 |
| 写完字声音还在 | 核对完成回调和离开结果时是否停 writingSound |
| 切后台还响或重复响 | 检查 visibilitychange 清理及 pending 取消 |
| 换曲后听感突兀 | 同时核对文件实际电平、Gain 与循环接缝 |
| 模拟器能播但手机无声 | 真机检查客户端环境、系统音量和静音状态、用户交互及 context 错误 |

`verify.mjs` 能检查音频字节与摘要。实际听感、扬声器、静音开关和系统中断需要手机验证。不要把模拟测试或审核通过直接写成所有机型均已实测出声。

## 9. 早期小组件的 A2 问题

开发早期还维护过开发者工具中的原生小组件工程。用户曾遇到所有声音都无声，并看到「音频载入失败 A2」，修复后用户明确反馈音乐问题解决。这一条用户反馈对应原生工程阶段。

原生方案先把字节写入 `xhs.env.USER_DATA_PATH`，再由 `xhs.createInnerAudioContext()` 播本地文件。参考代码保存在 [history/native-audio](../history/native-audio)。

`audio-cache.js` 会校验 base64 解码长度；先写入 MP3 的 ASCII ID3 头，将剩余字节分段追加，每段至多 8192 字节；追加失败后尝试整段 ArrayBuffer 写入；可用时用文件大小与 SHA-256 前缀核验。相同文件路径的写入任务共享 Promise，失败清缓存以便重试。

| 原生项目内部错误 | 含义 |
| --- | --- |
| A1 | 播放器接口或初始化失败 |
| A2 | 本地缓存路径、文件接口、写入或校验阶段失败 |
| A3 | 播放器未回报启动 |
| A4 | 播放器返回播放错误 |

这些是本项目定义的诊断标签。读到 A2 应继续检查后面附带的详情。不能认定它是小红书官方统一错误码，也不能据此认定必须换某个基础库版本。

历史参考代码中的 `require`、`Page`、`xhs.createInnerAudioContext` 属于原生工程形态。当前 V1.0.1 HTML 的实现入口是 Web Audio。学习时先确认自己正在开发的应用形态。

## 10. 音源和授权

BGM 是 KonstantinPazuzuStudio 的《Healing Water (Piano and Rain)》；曲目页当前标记 Content ID Registered。学习者复用时应从原页面核对授权、保存下载凭证，并按作品级许可使用。公开代码的安排不能把第三方音频变成任意再分发素材。

[原曲](https://pixabay.com/music/ambient-healing-water-piano-and-rain-495274/) · [Pixabay 内容许可](https://pixabay.com/service/license-summary/)

水滴剪自 Joseph Sardin 的《Drops of water #1》，原页面标记 CC0。翻牌与写字声在项目记录中为原创合成。完整发布包内的声音随应用一并存档。[水滴录音和许可](https://bigsoundbank.com/gouttes-eau-1-s1384.html)
