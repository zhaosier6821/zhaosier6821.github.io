# 交给其他 AI 的阅读说明

目标是学习这个已经上线的小红书小工具的实现，尤其是声音。建议把以下一段和仓库目录链接一起交给 AI。

> 请先读 README.md、docs/audio.md、docs/worklog.md 与 docs/deploy.md，再读 src/audio.js、src/app.js 及 app/index.html。运行 node verify.mjs 核对已发布归档，运行 node server.mjs 体验。需要看视觉素材时从 app/media.js 解析 soulMedia，需要看题库和音频数据时从 src/data.js 读取。请根据实际代码解释音频初始化、base64 解码、用户交互解锁、BGM 循环、Gain、静音与后台恢复。历史 native-audio 用于理解早期 A2 排障。改写为新产品时按自己的应用形态选择接口，并核对音源及字体许可。

## 代码对应关系

`app/` 是完整可运行产物。`src/` 从发布 app.js 按函数边界拆出，build.mjs 依次拼回，与发布文件逐字节一致。媒体以本地经典脚本编码，是部署时的兼容方案。

`history/native-audio/native-player-reference.js` 保留原生 Page 里的音频调用上下文，还引用历史工程中的题库与 Page 依赖。它是参考片段，需要原生工程配套文件才能运行。当前 HTML 小工具从 app/ 运行。

所有题目和结果都来自固定配置。源码中的 matchSpirit 计算现有权重、校准与细微的平分排序值，选择一个 ID，然后从 cards 找图片和长文。没有实时 AI 生成卡牌。结果是艺术意象测试。

## 复用与验证

学习声音时可先抽出 createAudio，再提供你自己有授权的四段音频数据和按钮 DOM。BGM 与音效共用一个 context，解码结果缓存，播放源分别管理。

上线时以真实手机的可用能力为准。仓库中的本地测试和平台模拟器只覆盖已记录的范围。遇到音频报错要沿实际环境排查，原生 A2 标签不能直接套到 Web Audio。

技术规则会更新，应读当前官方上传页口令和文档。源代码、素材许可、发布成功记录属于不同证据，分别核对。
