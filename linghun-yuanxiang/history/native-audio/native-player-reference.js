const config = require("../../data/config.js");
const cards = require("../../data/cards.js");
const motions = require("../../data/motions.js");
const { matchSpirit } = require("../../shared/matcher.js");
const { createQuiz } = require("../../shared/quiz.js");
const { writeReading } = require("../../shared/writing.js");
const audioClips = require("./audio-clips.js");
const { audioErrorDetail, writeAudioClip } = require("./audio-cache.js");

const musicPreference = "soul-original-music";
const clipSettings = {
  music: { loop: true, volume: .65 },
  answerSound: { loop: false, volume: 1 },
  flipSound: { loop: false, volume: 1 },
  writingSound: { loop: true, volume: 1 },
};

function audioCommand(player, method, onError = (error) => {
  console.warn("声音操作失败", method, error?.errCode, error?.errMsg || error?.message);
}) {
  try {
    player?.[method]?.()?.catch?.(onError);
  } catch (error) {
    onError(error);
  }
}

async function saveBookmarkImage(src) {
  let filePath = src;
  if (typeof xhs.compressImage === "function") {
    try {
      const image = await new Promise((success, fail) => {
        xhs.compressImage({ src, quality: 100, success, fail });
      });
      filePath = image.tempFilePath || src;
    } catch {
      // Some clients can save package images directly.
    }
  }
  await new Promise((success, fail) => xhs.saveImageToPhotosAlbum({ filePath, success, fail }));
}

function motionView(card) {
  if (!card) return { motionGroups: [] };
  const motion = motions[card.id];
  const layered = motion.kind === "layers";
  const layers = (motion.layers || []).map((layer, id) => {
    const [left, top, width, height] = layer.box;
    let timing = layer.animation ? "animation-name:" + layer.animation + ";animation-duration:" + layer.duration +
      "ms;animation-delay:" + (layer.delay || 0) + "ms;" : "";
    if (layer.origin) timing += "transform-origin:" + layer.origin.map((value) => value + "%").join(" ") + ";";
    if (layer.frames) timing += "height:" + layer.frames * 100 + "%;animation-timing-function:steps(" + layer.frames + ",end);";
    return {
      id,
      floating: Boolean(layer.floating),
      src: layer.file ? "/assets/motion/" + layer.file : "",
      effect: layer.effect || "",
      className: "card-motion-layer" + (layer.clip ? " card-motion-ellipse" : "") +
        (layer.frames ? " card-motion-frames" : "") +
        (layer.effect === "star" ? " card-motion-star-layer" : ""),
      box: "left:" + left + "%;top:" + top + "%;width:" + width + "%;height:" + height + "%;",
      timing,
    };
  });
  const groups = [];
  if (layers.length) {
    groups.push({ id: "base", className: "card-motion-group", timing: "",
      layers: layers.filter((layer) => !layer.floating) });
  }
  if (motion.floatDuration) {
    groups.push({ id: "floating", className: "card-motion-group card-motion-float",
      timing: "animation-duration:" + motion.floatDuration + "ms;animation-delay:" + (-motion.floatDuration / 2) + "ms;",
      layers: layers.filter((layer) => layer.floating) });
  }
  return {
    motionClass: card.id === 12 ? "mirror-motion" : card.id === 16 ? "bird-stars" : "",
    motionKind: motion.kind || "sprite",
    motionSrc: layered ? "" : "/assets/motion/" + motion.file,
    motionWindow: "left:" + motion.left + "%;top:" + motion.top + "%;width:" + motion.width + "%;height:" + motion.height + "%;",
    motionTiming: layered ? "" : "animation-duration:" + motion.duration + "ms;",
    motionGroups: groups,
  };
}

Page({
  data: {
    screen: "home",
    homeLabel: "去探寻",
    musicAvailable: false,
    musicEnabled: true,
    musicPlaying: false,
    audioNotice: "",
    screenInsets: "",
    contentViews: [{ id: 0, top: 0 }],
    scrollTarget: "",
    bookmarkBusy: false,
    bookmarkSrc: "",
    horses: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }],
  },

  onLoad() {
    this.quiz = createQuiz(config, cards, matchSpirit);
    this.setScreenInsets();
    this.setupMusic();
    this.refresh(false);
  },

  setScreenInsets(windowHeight) {
    if (typeof xhs === "undefined") return;
    try {
      const system = xhs.getSystemInfoSync?.();
      if (!system) return;
      const capsule = xhs.getMenuButtonBoundingClientRect?.();
      let inset = system.statusBarHeight || 0;
      let soundPosition = "";
      if (capsule?.height > 0 && capsule.left > 60 && system.windowWidth > capsule.left) {
        inset = Math.max(inset, capsule.bottom - 18);
        const right = system.windowWidth - capsule.left + 5;
        const top = Math.max(0, capsule.top + (capsule.height - 44) / 2);
        soundPosition = `--sound-right:${right}px;--sound-top:${top}px;`;
      }
      const height = windowHeight || system.windowHeight;
      const viewHeight = height > 0 ? `--widget-height:${height}px;` : "";
      this.setData({ screenInsets: `--scene-inset:${inset}px;` + soundPosition + viewHeight });
    } catch {}
  },

  onResize(event) {
    this.setScreenInsets(event.size?.windowHeight);
  },

  setupMusic() {
    if (typeof xhs === "undefined" || typeof xhs.createInnerAudioContext !== "function") return;
    let musicEnabled = true;
    try { musicEnabled = xhs.getStorageSync?.(musicPreference) !== "off"; } catch {}
    this.setData({ musicAvailable: true, musicEnabled });
    void this.prepareSounds();
  },

  async prepareSounds() {
    if (this.audioPreparing || this.closed) return;
    this.audioPreparing = true;
    try {
      const directory = xhs.env?.USER_DATA_PATH;
      const files = xhs.getFileSystemManager?.();
      if (typeof directory !== "string" || !directory || typeof files?.writeFile !== "function") {
        const detail = directory ? "缺少 writeFile 接口" : "缺少手机缓存路径";
        this.reportAudioProblem("音频缓存不可用（A2）", detail);
        return;
      }
      await Promise.all(Object.entries(clipSettings).map(async ([key, { loop, volume }]) => {
        if (this[key]) return;
        let player;
        let filePath;
        try {
          filePath = await writeAudioClip(files, directory, audioClips[key]);
          if (this.closed) return;
          player = xhs.createInnerAudioContext();
          if (typeof player?.play !== "function") throw new Error("Audio player unavailable");
          player.loop = loop;
          player.volume = volume;
          this[key] = player;
          if (key === "music") this.observeMusic(player);
          else player.onError?.((error) => console.warn("音效播放失败", key, error?.errCode, error?.errMsg));
          player.src = filePath;
        } catch (error) {
          this[key] = null;
          audioCommand(player, "destroy");
          if (key === "music") {
            const message = filePath ? "播放器初始化失败（A1）" : "音频载入失败（A2）";
            this.reportAudioProblem(message, error);
          } else {
            console.warn("音效载入失败", key, audioErrorDetail(error));
          }
          return;
        }
        if (key === "music") this.playMusic();
        if (key === "writingSound" && !this.audioHidden && this.data.musicEnabled && this.data.writing) {
          audioCommand(player, "play");
        }
      }));
    } catch (error) {
      this.reportAudioProblem("音频载入失败（A2）", error);
    } finally {
      this.audioPreparing = false;
    }
  },

  observeMusic(music) {
    const markPlaying = () => {
      if (this.closed) return;
      if (this.audioHidden || !this.data.musicEnabled) {
        audioCommand(music, "pause");
        return;
      }
      this.musicProblem = "";
      this.clearAudioFeedback();
      if (!this.data.musicPlaying) this.setData({ musicPlaying: true });
    };
    const markPaused = () => {
      if (!this.closed && this.data.musicPlaying) this.setData({ musicPlaying: false });
    };
    music.onPlay?.(markPlaying);
    music.onTimeUpdate?.(() => {
      if (!this.data.musicPlaying && music.currentTime > 0) markPlaying();
    });
    music.onPause?.(markPaused);
    music.onStop?.(markPaused);
    music.onEnded?.(markPaused);
    let receivedCanplay = false;
    music.onCanplay?.(() => {
      if (!receivedCanplay) {
        receivedCanplay = true;
        this.playMusic();
      }
    });
    music.onError?.((error) => {
      markPaused();
      this.reportAudioProblem("音频播放失败（A4）", error);
    });
  },

  playMusic() {
    if (!this.music || !this.data.musicEnabled || this.data.musicPlaying || this.audioHidden || this.closed) return;
    audioCommand(this.music, "play", (error) => {
      this.reportAudioProblem("音频播放失败（A4）", error);
    });
  },

  reportAudioProblem(message, error) {
    if (this.closed) return;
    const detail = audioErrorDetail(error);
    this.musicProblem = detail ? message + "\n" + detail : message;
    console.warn(message, detail);
    if (this.audioCheckTimer != null) {
      this.clearAudioFeedback();
      this.showAudioNotice(this.musicProblem, 9000);
    }
  },

  showAudioNotice(audioNotice, duration = 3300) {
    if (this.closed || this.audioHidden) return;
    clearTimeout(this.audioNoticeTimer);
    this.setData({ audioNotice });
    this.audioNoticeTimer = setTimeout(() => {
      this.setData({ audioNotice: "" });
    }, duration);
  },

  clearAudioFeedback() {
    clearTimeout(this.audioCheckTimer);
    clearTimeout(this.audioNoticeTimer);
    this.audioCheckTimer = null;
    this.audioNoticeTimer = null;
    if (!this.closed && this.data.audioNotice) this.setData({ audioNotice: "" });
  },

  onShow() {
    this.audioHidden = false;
    this.playMusic();
    if (this.data.musicEnabled && this.data.writing) audioCommand(this.writingSound, "play");
  },

  onHide() {
    this.audioHidden = true;
    this.pauseAudio();
  },

  pauseAudio() {
    this.clearAudioFeedback();
    if (this.data.musicPlaying) this.setData({ musicPlaying: false });
    audioCommand(this.music, "pause");
    audioCommand(this.writingSound, "pause");
    audioCommand(this.flipSound, "stop");
    audioCommand(this.answerSound, "stop");
  },

  onToggleMusic() {
    if (!this.data.musicAvailable) {
      this.showAudioNotice("当前版本无法播放音频（A1）");
      return;
    }
    const musicEnabled = !this.data.musicEnabled;
    this.setData({ musicEnabled });
    try { xhs.setStorageSync?.(musicPreference, musicEnabled ? "on" : "off"); } catch {}
    if (musicEnabled) {
      this.musicProblem = "";
      this.showAudioNotice("正在打开声音…");
      this.audioCheckTimer = setTimeout(() => {
        this.audioCheckTimer = null;
        const message = this.music ? "播放器未启动（A3）" : "音频加载超时（A2）";
        this.showAudioNotice(this.musicProblem || message, 9000);
      }, 3500);
      if (this.music) this.playMusic();
      else void this.prepareSounds();
      if (this.data.writing) audioCommand(this.writingSound, "play");
    } else {
      this.pauseAudio();
      this.showAudioNotice("声音已关闭");
    }
  },

  refresh(scrollToTop, screen, scrollTop = 0) {
    const { title, prompt, options, ...view } = this.quiz.view();
    const nextScreen = screen || view.screen;
    const contentViews = scrollToTop
      ? [{ id: this.data.contentViews[0].id + 1, top: scrollTop }]
      : this.data.contentViews;
    this.clearResultEffects();
    this.setData({
      ...view,
      screen: nextScreen,
      contentViews,
      scrollTarget: "",
      resultSrc: view.result ? "/assets/cards/" + view.result.file : "",
      questionFrames: [{
        id: view.index,
        title,
        prompt,
        options: options.map((option) => ({
          ...option,
          src: "/assets/options/" + option.art,
        })),
      }],
      ...motionView(view.result),
      imageUnavailable: false,
      choosing: this.advanceTimer != null,
      readingReady: false,
      readingOpen: false,
      writing: false,
      readingBlocks: [],
      readingLine: -1,
      bookmarkSrc: "",
    }, () => {
      if (nextScreen === "result") this.offerReadingAfterFlip();
    });
  },

  clearResultEffects() {
    clearTimeout(this.readingGateTimer);
    this.readingGateTimer = null;
    this.cancelWriting?.();
    this.cancelWriting = null;
    if (this.data.writing) audioCommand(this.writingSound, "stop");
    audioCommand(this.flipSound, "stop");
  },

  offerReadingAfterFlip() {
    if (this.data.imageUnavailable) {
      this.setData({ readingReady: true });
      return;
    }
    if (this.data.screen === "result" && this.data.musicEnabled && !this.audioHidden) {
      audioCommand(this.flipSound, "play");
    }
    this.readingGateTimer = setTimeout(() => {
      this.readingGateTimer = null;
      if (this.data.screen === "result") this.setData({ readingReady: true });
    }, 1200);
  },

  onReadCard() {
    if (this.data.screen !== "result" || !this.data.readingReady || this.data.readingOpen) return;
    const { title, poem, reading } = this.data.result;
    const sections = [title, poem, reading];
    const blocks = ["title", "poem", "text"].map((kind, index) => ({ kind, written: "", remaining: sections[index] }));
    this.setData({ readingOpen: true, writing: true, readingBlocks: blocks, readingLine: 0 }, () => {
      if (this.data.readingOpen) this.setData({ scrollTarget: "result-reading" });
    });
    if (this.data.musicEnabled) audioCommand(this.writingSound, "play");
    this.cancelWriting = writeReading(sections, (index, written, remaining, done) => {
      blocks[index] = { ...blocks[index], written, remaining };
      this.setData({ readingBlocks: blocks.slice(), readingLine: done ? -1 : index, writing: !done });
      if (done) {
        this.cancelWriting = null;
        audioCommand(this.writingSound, "stop");
      }
    });
  },

  onOpenBookmark() {
    const { screen, readingReady, result, bookmarkSrc: openBookmark } = this.data;
    if (screen !== "result" || !readingReady || !result || openBookmark || this.closed) return;
    const bookmarkSrc = "/assets/bookmarks/" + String(result.id).padStart(2, "0") + ".jpg";
    this.setData({ bookmarkSrc, bookmarkSaved: false, bookmarkNeedsPermission: false, bookmarkStatus: "" });
  },

  async onSaveBookmark() {
    const { bookmarkSrc, bookmarkBusy, bookmarkSaved } = this.data;
    if (!bookmarkSrc || bookmarkBusy || bookmarkSaved || this.closed) return;
    if (typeof xhs === "undefined" || typeof xhs.saveImageToPhotosAlbum !== "function") {
      this.setData({ bookmarkStatus: "当前版本暂时无法保存到相册。" });
      return;
    }
    this.setData({ bookmarkBusy: true, bookmarkNeedsPermission: false, bookmarkStatus: "" });
    try {
      await saveBookmarkImage(bookmarkSrc);
      if (this.closed) return;
      this.setData({ bookmarkBusy: false, bookmarkSaved: true });
    } catch (error) {
      if (this.closed) return;
      const denied = /auth|permission|denied|相册权限|授权/i.test(error?.errMsg || error?.message || "");
      this.setData({
        bookmarkBusy: false,
        bookmarkNeedsPermission: denied && typeof xhs.openSetting === "function",
        bookmarkStatus: denied ? "请允许小红书保存到相册，再重试。" : "暂时无法保存书签，请重试。",
      });
    }
  },

  onBookmarkSettings() {
    const { bookmarkSrc, bookmarkNeedsPermission } = this.data;
    if (!bookmarkSrc || !bookmarkNeedsPermission || this.closed) return;
    xhs.openSetting?.({
      success: ({ authSetting }) => {
        if (this.data.bookmarkSrc === bookmarkSrc && this.data.bookmarkNeedsPermission && authSetting?.["scope.writePhotosAlbum"]) {
          void this.onSaveBookmark();
        }
      },
    });
  },

  onCloseBookmark() {
    if (!this.data.bookmarkBusy) this.setData({ bookmarkSrc: "" });
  },

  onStart() {
    this.playMusic();
    if (this.quiz.start()) this.refresh(true);
  },

  onChoose(event) {
    const { code, step } = event.currentTarget.dataset;
    if (this.advanceTimer != null || !this.quiz.choose(code, step)) return;
    this.playMusic();
    if (this.data.musicEnabled && this.answerSound) {
      if (this.answerSound.paused === false) audioCommand(this.answerSound, "stop");
      audioCommand(this.answerSound, "play");
    }
    this.advanceTimer = setTimeout(() => {
      this.advanceTimer = null;
      this.advance(step);
    }, 420);
    this.refresh(false);
  },

  onBack(event) {
    if (!this.data.canBack || Number(event.currentTarget.dataset.step) !== this.data.index) return;
    if (this.advanceTimer != null) clearTimeout(this.advanceTimer);
    this.advanceTimer = null;
    if (this.quiz.back(event.currentTarget.dataset.step)) this.refresh(true);
  },

  advance(step) {
    if (!this.quiz.next(step)) return;
    if (this.quiz.view().screen !== "result") {
      this.refresh(true);
      return;
    }

    this.refresh(true, "loading");
    this.revealTimer = setTimeout(() => {
      this.revealTimer = null;
      this.setData({ screen: "result" }, () => this.offerReadingAfterFlip());
    }, 880);
  },

  onUnload() {
    this.closed = true;
    this.clearAudioFeedback();
    if (this.advanceTimer != null) clearTimeout(this.advanceTimer);
    if (this.revealTimer != null) clearTimeout(this.revealTimer);
    this.clearResultEffects();
    for (const key of Object.keys(clipSettings)) audioCommand(this[key], "destroy");
  },

  onOpenGallery() {
    if (this.data.bookmarkSrc) return;
    const scrollTop = this.data.viewingGalleryCard ? this.galleryScroll || 0 : 0;
    if (!this.quiz.openGallery()) return;
    if (!this.data.galleryCards) {
      const galleryCards = Object.values(cards).map((card) => ({
        id: card.id,
        title: card.title,
        imageSrc: "/assets/cards/" + card.file,
        ...motionView(card),
      }));
      this.setData({ galleryCards });
    }
    this.refresh(true, undefined, scrollTop);
  },

  onContentScroll(event) {
    if (this.data.screen === "gallery") this.galleryScroll = event.detail.scrollTop;
  },

  onBrowseCard(event) {
    if (this.quiz.browseCard(event.currentTarget.dataset.cardId)) this.refresh(true);
  },

  onCloseGallery() {
    if (this.quiz.closeGallery()) this.refresh(true);
  },

  onRestart() {
    if (this.data.bookmarkSrc) return;
    if (this.quiz.restart()) this.refresh(true);
  },

  onResultImageError(event) {
    if (this.data.result && Number(event.currentTarget.dataset.cardId) === this.data.result.id) {
      clearTimeout(this.readingGateTimer);
      this.readingGateTimer = null;
      audioCommand(this.flipSound, "stop");
      this.setData({ imageUnavailable: true, readingReady: true });
    }
  },
});
