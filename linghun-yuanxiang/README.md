# 灵魂原像 · 小红书小工具源码与上线记录

当你的灵魂化作世间一物，那会是什么？

这是一个已上线的小红书艺术意象测试。用户完成 8 道单选题，由固定加权模型匹配 16 种精神体，翻开动态卡牌、点击羽毛笔解读，并保存一张带祝愿语的书签。全部计算在当前页面完成。

2026-11-17，Builder Hub 中 V1.0.1 显示「已发布」。2026-11-18，创作者确认上线成功。本目录归档该次部署的完整 HTML / CSS / JavaScript 与素材，供其他开发者及 AI 阅读。

**音乐接入请先读 [音乐完整接入与排障](docs/audio.md)，直接实现位于 [src/audio.js](src/audio.js)。**

## 先运行

需要 Node.js 18 或更新版本，使用内置模块即可。

```bash
git clone https://github.com/zhaosier6821/zhaosier6821.github.io.git
cd zhaosier6821.github.io/linghun-yuanxiang
node verify.mjs
node server.mjs
```

打开 http://127.0.0.1:4187/ ，点击「去探寻」。浏览器可以体验测试、音乐、动效和书签下载。存入系统相册需要小红书 App 提供的接口。

## 阅读入口

| 文件 | 内容 |
| --- | --- |
| [app/index.html](app/index.html) | 发布时实际使用的页面结构 |
| [app/app.js](app/app.js) | 已发布完整逻辑，含题库、卡牌解析及音频数据 |
| [app/media.js](app/media.js) | 选项、卡牌、动效与书签原始图片的编码 |
| [app/style.css](app/style.css) | 雨、湖面、翻牌、局部动画和版式 |
| [src/data.js](src/data.js) | 8 道题、权重、16 种结果、动效描述与音频字节 |
| [src/logic.js](src/logic.js) | 匹配、答题状态、逐字书写 |
| [src/audio.js](src/audio.js) | Web Audio 音乐及音效管理器 |
| [src/app.js](src/app.js) | 页面交互、动画挂载、书签和平台桥接 |
| [docs/audio.md](docs/audio.md) | 音乐插入步骤、失败原因、历史原生方案 |
| [docs/worklog.md](docs/worklog.md) | 设计到上线的过程与核验范围 |
| [docs/ai-handoff.md](docs/ai-handoff.md) | 给其他 AI 的阅读顺序及复用注意事项 |
| [docs/deploy.md](docs/deploy.md) | Builder Hub 上传、全屏、版本号和验证 |
| [releases/linghun-yuanxiang-1.0.1.zip](releases/linghun-yuanxiang-1.0.1.zip) | 当次成功部署的原始 ZIP |
| [releases/manifest.json](releases/manifest.json) | ZIP 与展开文件 SHA-256 |

## 修改与打包

音乐管理修改 `src/audio.js`，交互修改 `src/app.js`，题库等数据修改 `src/data.js`。运行 `node build.mjs` 重新拼接 `app/app.js`。HTML、CSS、media.js 和静态素材直接在 `app/` 修改。

```bash
node build.mjs
node --check app/app.js
cd app
zip -r ../linghun-yuanxiang-next.zip index.html app.js media.js style.css assets
```

ZIP 打开后入口直接是 `index.html`。下一版上传前，应在 Builder Hub 复制当前的改写口令并按官方规则校验。历史 ZIP 原样留存。[平台文档](https://miniapp-sandbox.xiaohongshu.com/minitool/doc)

`verify.mjs` 用于核对已发布归档是否逐字节一致。主动修改产品后哈希变化属于预期，新的发布版本应单独记录哈希。

## 16 种结果

星屑喷泉、无声之刃、沉眠石像、风的遗羽、月蚀海螺、月夜木马、第十三扇门、倒悬之山、长明之烛、雾海灯塔、无字之书、镜中湖泊、落日沙发、永生之树、月光滑梯、夜航之鸟。

## 来源与使用

本项目提供可阅读、可运行的学习资料。音乐、字体与声音素材各自适用其原始授权，见 [素材来源](licenses/README.md)。仓库公开供学习的安排不会替代第三方素材的授权条件。需要完整复用视觉、解读文案或品牌发布商业产品时，请联系项目作者确认使用范围。
