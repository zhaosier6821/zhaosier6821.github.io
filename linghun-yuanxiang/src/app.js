const session = createQuiz(config, cards, matchSpirit);
const element = (id) => document.getElementById(id);
const screens = ["home", "quiz", "loading", "result", "gallery"];
const headings = { home: "home-title", quiz: "prompt", loading: "loading-heading", result: "result", gallery: "gallery-heading" };
const contentScroll = element("content-scroll");
const resultImage = element("result-image");
const resultStage = element("result-stage");
const inkWindow = element("art-ink-window");
const readCard = element("read-card");
const saveCard = element("save-card");
const readingPanel = element("result-reading");
const bookmark = element("bookmark");
const bookmarkImage = element("bookmark-image");
const bookmarkSave = element("bookmark-save");
const bookmarkClose = element("bookmark-close");
const bookmarkStatus = element("bookmark-status");
const sound = createAudio(audioClips, element("music-toggle"), element("audio-notice"));
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const asset = (folder, file) => soulMedia[folder + "/" + file];
const miniTool = () => window.xhs && window.xhs.miniTool;
const readingBlocks = ["title", "poem", "text"].map((part) => ({
  written: element("reading-" + part + "-written"),
  rest: element("reading-" + part + "-rest"),
  cursor: element("reading-" + part + "-cursor"),
}));
let current = session.view();
let advanceTimer;
let galleryScroll = 0;
let galleryReturnButton;
let readingGateTimer;
let cancelWriting;
let renderedStep = -1;
let optionButtons = [];
let bookmarkCard;
let bookmarkBusy = false;

function focus(target) {
  target.focus({ preventScroll: true });
}

function setLayout() {
  const root = document.documentElement;
  const width = root.clientWidth;
  const height = root.clientHeight;
  const scene = element("lake-scene");
  const surface = .5 * height + Math.max(.132 * height, .2346 * Math.min(width, 850));
  scene.style.setProperty("--lake-surface", surface + "px");
  root.style.setProperty("--content-width", Math.min(width, 448) + "px");
  fitPoem();
}
window.addEventListener("resize", setLayout);

function fitPoem() {
  if (current.result) {
    const width = Math.min(document.documentElement.clientWidth, 448);
    const size = Math.min(14, (width - 108) / current.result.poem.length);
    readingPanel.style.setProperty("--poem-size", size.toFixed(2) + "px");
  }
}

let insetRequest = 0;
async function setContainerInsets() {
  const tool = miniTool();
  if (!tool) return;
  const root = document.documentElement;
  root.classList.add("mini-tool");
  if (typeof tool.getWindowInfo !== "function") return;
  const request = ++insetRequest;
  try {
    const info = await tool.getWindowInfo();
    if (request !== insetRequest || !info || !info.safeArea) return;
    const { safeArea, windowWidth, windowHeight } = info;
    if (!(windowWidth > 0 && windowHeight > 0)) return;
    const visible = Object.values(info.menuButtons || {}).filter(Boolean);
    const topRight = visible.filter((box) => box.left >= windowWidth / 2);
    const safeRight = Math.max(0, windowWidth - safeArea.right);
    let right = Math.max(14 + safeRight, (windowWidth - 448) / 2 + 14);
    let top = safeArea.top + 3;
    if (topRight.length) {
      const left = Math.min(...topRight.map((box) => box.left));
      if (left - 50 > windowWidth / 2) {
        right = Math.max(right, windowWidth - left + 6);
        top = Math.max(top, Math.min(...topRight.map((box) => box.top)));
      } else {
        top = Math.max(top, ...topRight.map((box) => box.bottom + 4));
      }
    }
    const inset = Math.max(top + 34, safeArea.top, ...visible.map((box) => box.bottom + 4));
    root.style.setProperty("--scene-inset", inset + "px");
    root.style.setProperty("--sound-top", top + "px");
    root.style.setProperty("--sound-right", right + "px");
    root.style.setProperty("--safe-left", Math.max(0, safeArea.left) + "px");
    root.style.setProperty("--safe-right", safeRight + "px");
    root.style.setProperty("--safe-bottom", Math.max(0, windowHeight - safeArea.bottom) + "px");
  } catch (error) {
    // The CSS safe areas also work without the optional host bridge.
  }
}
window.addEventListener("resize", setContainerInsets);
window.addEventListener("pageshow", setContainerInsets);

function preventZoom(event) {
  if (event.cancelable) event.preventDefault();
}
document.addEventListener("gesturestart", preventZoom, { passive: false });
document.addEventListener("gesturechange", preventZoom, { passive: false });
document.addEventListener("touchmove", (event) => {
  if (event.touches.length > 1) preventZoom(event);
}, { passive: false });

for (const card of current.coverTitles) {
  const title = document.createElement("span");
  title.className = "cover-title";
  title.textContent = card.title;
  title.style.left = card.left;
  title.style.top = card.top;
  title.style.animationDuration = card.duration;
  title.style.animationDelay = card.delay;
  element("cover-titles").append(title);
}

const segments = config.questions.map(() => {
  const segment = document.createElement("span");
  element("progress").append(segment);
  return segment;
});

function createOption(option, step) {
  const item = document.createElement("div");
  item.className = "option-item";
  const art = document.createElement("div");
  art.className = "option-art";
  art.setAttribute("aria-hidden", "true");
  const prop = document.createElement("img");
  prop.className = "option-prop";
  prop.alt = "";
  prop.src = asset("options", option.art);
  art.append(prop);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "option";
  const badge = document.createElement("span");
  badge.className = "option-code";
  badge.textContent = option.code;
  const label = document.createElement("span");
  label.className = "option-text";
  label.textContent = option.text;
  const mark = document.createElement("span");
  mark.className = "option-mark";
  mark.setAttribute("aria-hidden", "true");
  button.append(badge, label, mark);
  item.append(art, button);
  button.addEventListener("click", () => {
    if (advanceTimer != null || !session.choose(option.code, step)) return;
    sound.unlock("answerSound");
    advanceTimer = setTimeout(() => {
      advanceTimer = null;
      if (!session.next(step)) return;
      const next = session.view();
      if (next.screen === "result") reveal(next.result, true);
      else render(true);
    }, 420);
    render(false);
  });
  return { item, button, mark };
}

function render(moveFocus, screenOverride) {
  current = session.view();
  const screen = screenOverride || current.screen;
  for (const name of screens) element(name).hidden = screen !== name;
  element("forest-scene").hidden = screen !== "quiz";
  element("lake-scene").hidden = screen !== "loading" && screen !== "result" && screen !== "gallery";

  if (screen === "quiz") {
    element("step").textContent = current.stepLabel;
    element("step-total").textContent = "/ " + current.total;
    element("question-title").textContent = current.title;
    element("prompt").textContent = current.prompt;
    element("back").disabled = !current.canBack;
    segments.forEach((segment, index) => {
      segment.className = "progress-segment " + current.progress[index].status;
    });
    if (renderedStep !== current.index) {
      renderedStep = current.index;
      optionButtons = current.options.map((option) => createOption(option, renderedStep));
      const options = element("options");
      options.textContent = "";
      optionButtons.forEach(({ item }) => options.append(item));
    }
    optionButtons.forEach(({ item, button, mark }, index) => {
      const selected = current.options[index].selected;
      item.classList.toggle("selected", selected);
      button.disabled = advanceTimer != null;
      button.setAttribute("aria-pressed", String(selected));
      mark.textContent = selected ? "◆" : "◇";
    });
    element("quiz-content").classList.toggle("answer-picked", advanceTimer != null);
  }

  if (moveFocus) {
    focus(element(headings[screen]));
    contentScroll.scrollTop = 0;
    if (screen === "quiz" && !reducedMotion.matches) {
      const frame = element("quiz-frame");
      frame.classList.remove("ripple-in");
      void frame.offsetWidth;
      frame.classList.add("ripple-in");
    }
  }
}

function mountMotion(root, id) {
  const motion = motions[id];
  const images = [];
  const layered = Boolean(motion.layers && motion.layers.length);
  root.hidden = false;
  root.dataset.motionId = String(id);
  root.textContent = "";
  root.classList.toggle("layered-ink", layered);
  root.classList.toggle("mirror-motion", id === 12);
  root.classList.toggle("bird-stars", id === 16);
  const position = (node, left, top, width, height) => {
    Object.assign(node.style, { left: left + "%", top: top + "%", width: width + "%", height: height + "%" });
  };
  position(root, ...(layered ? [0, 0, 100, 100] : [motion.left, motion.top, motion.width, motion.height]));
  const picture = (file, className) => {
    const image = document.createElement("img");
    image.className = className;
    image.alt = "";
    image.loading = root.id === "art-ink-window" ? "eager" : "lazy";
    image.src = asset("motion", file);
    image.addEventListener("error", () => {
      if (root.dataset.motionId === String(id)) root.hidden = true;
    });
    images.push(image);
    return image;
  };
  if (layered) {
    let floating;
    if (motion.floatDuration) {
      floating = document.createElement("div");
      floating.className = "card-motion-group card-motion-float";
      floating.style.animationDuration = motion.floatDuration + "ms";
      floating.style.animationDelay = -motion.floatDuration / 2 + "ms";
    }
    for (const layer of motion.layers) {
      const wrapper = document.createElement("div");
      wrapper.className = layer.clip ? "card-motion-layer card-motion-ellipse" : "card-motion-layer";
      position(wrapper, ...layer.box);
      let track;
      if (layer.effect === "star") {
        track = document.createElement("div");
        track.className = "card-motion-image motion-star";
        wrapper.classList.add("card-motion-star-layer");
      } else {
        track = picture(layer.file, "card-motion-image");
      }
      if (layer.frames) {
        wrapper.className += " card-motion-frames";
        track.style.height = layer.frames * 100 + "%";
        track.style.animationTimingFunction = "steps(" + layer.frames + ", end)";
      }
      if (layer.animation) {
        track.style.animationName = layer.animation;
        track.style.animationDuration = layer.duration + "ms";
        track.style.animationDelay = (layer.delay || 0) + "ms";
      }
      if (layer.origin) track.style.transformOrigin = layer.origin.map((value) => value + "%").join(" ");
      wrapper.append(track);
      (layer.floating ? floating : root).append(wrapper);
    }
    if (floating) root.append(floating);
    if (motion.kind === "layers") return images;
  }
  const artwork = layered ? document.createElement("div") : root;
  if (layered) {
    artwork.className = "art-ink-window";
    position(artwork, motion.left, motion.top, motion.width, motion.height);
    root.append(artwork);
  }
  if (!motion.kind) {
    const strip = picture(motion.file, "art-ink-strip");
    strip.style.animationDuration = motion.duration + "ms";
    artwork.append(strip);
    return images;
  }
  artwork.append(picture(motion.file, "motion-plate"));
  if (motion.kind === "bird") {
    const flight = document.createElement("div");
    flight.className = "bird-flight";
    const wings = picture(motion.wingFile, "bird-wing-strip");
    wings.style.animationDuration = motion.duration + "ms";
    flight.append(wings);
    artwork.append(flight);
    return images;
  }
  const camera = document.createElement("div");
  camera.className = "carousel-motion";
  const tilt = document.createElement("div");
  tilt.className = "carousel-tilt";
  const ring = document.createElement("div");
  ring.className = "carousel-ring";
  ring.style.animationDuration = motion.duration + "ms";
  for (let index = 0; index < 4; index += 1) {
    const station = document.createElement("div");
    station.className = "horse-station";
    const rod = document.createElement("div");
    rod.className = "horse-rod";
    const horse = document.createElement("div");
    horse.className = "horse-body";
    horse.append(picture("horse_side.webp", "horse-side"), picture("horse_front.webp", "horse-end horse-front"), picture("horse_rear.webp", "horse-end horse-rear"));
    station.append(rod, horse);
    ring.append(station);
  }
  tilt.append(ring, picture("carousel_mast.webp", "carousel-spindle"));
  camera.append(tilt);
  artwork.append(camera);
  return images;
}

function resetResultEffects() {
  clearTimeout(readingGateTimer);
  if (cancelWriting) cancelWriting();
  cancelWriting = null;
  sound.setWriting(false);
  sound.stop("flipSound");
  readCard.hidden = true;
  saveCard.hidden = true;
  readingPanel.hidden = true;
  readingPanel.setAttribute("aria-busy", "false");
  for (const block of readingBlocks) {
    block.written.textContent = "";
    block.rest.textContent = "";
    block.cursor.hidden = true;
  }
}

function offerReading() {
  clearTimeout(readingGateTimer);
  if (element("result").hidden) return;
  if (readingPanel.hidden) readCard.hidden = false;
  saveCard.hidden = false;
}

async function reveal(card, showLoading) {
  resetResultEffects();
  resultStage.hidden = false;
  element("result-error").hidden = true;
  resultImage.alt = card.title + "。" + card.poem;
  const result = element("result");
  result.setAttribute("aria-label", card.title);
  resultImage.src = asset("cards", card.file);
  const motionImages = mountMotion(inkWindow, card.id);
  const browsing = session.view().viewingGalleryCard;
  element("result-context").textContent = browsing ? "原像图鉴" : "你的灵魂原像";
  element("gallery-label").textContent = browsing ? "返回图鉴" : "查看全部 16 种原像";
  element("restart").hidden = browsing;
  render(true, "loading");
  const imageReady = Promise.all([resultImage, ...motionImages].map((image) =>
    typeof image.decode === "function" ? image.decode().catch(() => {}) : Promise.resolve()
  ));
  await Promise.all([delay(showLoading ? 880 : 0), Promise.race([imageReady, delay(1900)])]);
  if (resultImage.complete && resultImage.naturalWidth === 0) showCardError();
  render(true);
  if (resultStage.hidden || reducedMotion.matches) offerReading();
  else {
    sound.play("flipSound");
    readingGateTimer = setTimeout(offerReading, 1320);
  }
}
function showCardError() {
  resultStage.hidden = true;
  element("result-error").hidden = false;
  sound.stop("flipSound");
  offerReading();
}
resultImage.addEventListener("error", showCardError);
element("result-flight").addEventListener("animationend", (event) => {
  if (event.currentTarget === event.target && event.animationName === "card-approach") offerReading();
});

readCard.addEventListener("click", () => {
  if (current.screen !== "result" || readCard.hidden) return;
  const { title, poem, reading } = current.result;
  const sections = [title, poem, reading];
  readCard.hidden = true;
  readingPanel.hidden = false;
  fitPoem();
  if (reducedMotion.matches) {
    readingBlocks.forEach((block, index) => { block.written.textContent = sections[index]; });
  } else {
    readingPanel.setAttribute("aria-busy", "true");
    readingBlocks.forEach((block, index) => { block.rest.textContent = sections[index]; });
    let active = readingBlocks[0];
    active.cursor.hidden = false;
    sound.setWriting(true);
    cancelWriting = writeReading(sections, (index, prefix, remaining, done) => {
      const block = readingBlocks[index];
      block.written.textContent = prefix;
      block.rest.textContent = remaining;
      if (active !== block) {
        active.cursor.hidden = true;
        block.cursor.hidden = false;
        active = block;
      }
      if (done) {
        active.cursor.hidden = true;
        readingPanel.setAttribute("aria-busy", "false");
        cancelWriting = null;
        sound.setWriting(false);
      }
    });
  }
  focus(readingPanel);
  readingPanel.scrollIntoView({ block: "nearest", behavior: reducedMotion.matches ? "auto" : "smooth" });
});

function updateBookmarkAvailability() {
  if (!bookmarkCard || bookmarkBusy) return;
  const available = bookmarkImage.complete && bookmarkImage.naturalWidth > 0;
  bookmarkSave.disabled = !available;
  if (available) bookmarkStatus.textContent = "";
}
bookmarkImage.addEventListener("load", updateBookmarkAvailability);
bookmarkImage.addEventListener("error", () => {
  if (!bookmarkCard) return;
  bookmarkSave.disabled = true;
  bookmarkStatus.textContent = "书签加载失败，返回卡牌后可重试。";
});

saveCard.addEventListener("click", () => {
  if (current.screen !== "result" || saveCard.hidden || bookmarkCard) return;
  bookmarkCard = current.result;
  bookmarkSave.textContent = miniTool() ? "保存到相册" : "下载书签";
  bookmarkSave.disabled = true;
  bookmarkStatus.textContent = "正在载入书签…";
  bookmarkImage.src = asset("bookmarks", String(bookmarkCard.id).padStart(2, "0") + ".jpg");
  bookmarkImage.alt = bookmarkCard.title + "的卡牌书签";
  bookmark.hidden = false;
  contentScroll.classList.add("modal-open");
  focus(bookmarkClose);
  contentScroll.setAttribute("aria-hidden", "true");
  updateBookmarkAvailability();
});

function closeBookmark() {
  if (bookmarkBusy || !bookmarkCard) return;
  bookmarkCard = null;
  bookmark.hidden = true;
  contentScroll.removeAttribute("aria-hidden");
  contentScroll.classList.remove("modal-open");
  focus(saveCard);
}
bookmarkClose.addEventListener("click", closeBookmark);
document.addEventListener("keydown", (event) => {
  if (!bookmarkCard) return;
  if (event.key === "Escape") closeBookmark();
  if (event.key === "Tab") {
    event.preventDefault();
    focus(bookmarkSave.disabled || document.activeElement === bookmarkSave ? bookmarkClose : bookmarkSave);
  }
});

async function saveToAlbum(tool) {
  const data = bookmarkImage.src;
  let path = data;
  if (typeof tool.writeTempFile === "function") {
    try {
      const temporary = await tool.writeTempFile({ data });
      if (temporary.filePath) path = temporary.filePath;
    } catch (error) {
      // The album API also accepts the encoded image directly.
    }
  }
  await tool.saveImageToPhotosAlbum({ filePath: path });
}

bookmarkSave.addEventListener("click", async () => {
  if (!bookmarkCard || bookmarkBusy || bookmarkSave.disabled) return;
  const tool = miniTool();
  if (!tool) {
    const download = document.createElement("a");
    download.href = bookmarkImage.src;
    download.download = bookmarkCard.title + "-灵魂书签.jpg";
    bookmark.append(download);
    download.click();
    download.remove();
    bookmarkStatus.textContent = "已发起书签下载。";
    return;
  }
  if (typeof tool.saveImageToPhotosAlbum !== "function") {
    bookmarkStatus.textContent = "请更新小红书后再保存到相册。";
    return;
  }
  bookmarkBusy = true;
  bookmarkSave.disabled = true;
  bookmarkClose.disabled = true;
  bookmarkSave.textContent = "正在保存…";
  bookmarkStatus.textContent = "";
  try {
    await saveToAlbum(tool);
    bookmarkSave.textContent = "已保存到相册";
  } catch (error) {
    const detail = String(error && (error.errMsg || error.message) || "");
    bookmarkStatus.textContent = /auth|permission|denied|权限|授权/i.test(detail)
      ? "请允许小红书访问相册，再试一次。"
      : "暂时无法保存书签，请再试一次。";
    bookmarkSave.textContent = "保存到相册";
    bookmarkSave.disabled = false;
  } finally {
    bookmarkBusy = false;
    bookmarkClose.disabled = false;
    focus(bookmarkClose);
  }
});

function mountGallery() {
  const grid = element("gallery-grid");
  if (grid.children.length) return;
  const observer = typeof IntersectionObserver === "function" && new IntersectionObserver((entries) => {
    entries.forEach((entry) => { entry.target.classList.toggle("motion-asleep", !entry.isIntersecting); });
  }, { root: contentScroll, rootMargin: "140px 0px" });
  for (const card of Object.values(cards)) {
    const entry = document.createElement("button");
    entry.type = "button";
    entry.className = "gallery-item";
    entry.setAttribute("aria-label", "查看" + card.title);
    const art = document.createElement("span");
    art.className = "gallery-art";
    const front = document.createElement("img");
    front.className = "gallery-art-image";
    front.alt = "";
    front.loading = "lazy";
    front.src = asset("cards", card.file);
    const artWindow = document.createElement("span");
    artWindow.className = "art-ink-window";
    mountMotion(artWindow, card.id);
    art.append(front, artWindow);
    const title = document.createElement("span");
    title.className = "gallery-name";
    title.textContent = card.title;
    entry.append(art, title);
    entry.addEventListener("click", () => {
      if (!session.browseCard(card.id)) return;
      sound.unlock();
      galleryScroll = contentScroll.scrollTop;
      galleryReturnButton = entry;
      reveal(card, false);
    });
    grid.append(entry);
    if (observer) observer.observe(entry);
  }
}

element("start").addEventListener("click", () => {
  sound.unlock();
  if (session.start()) render(true);
});
element("back").addEventListener("click", () => {
  if (!session.back(current.index)) return;
  clearTimeout(advanceTimer);
  advanceTimer = null;
  render(true);
});
element("open-gallery").addEventListener("click", () => {
  const returning = current.viewingGalleryCard;
  if (!session.openGallery()) return;
  resetResultEffects();
  mountGallery();
  render(true);
  if (returning && galleryReturnButton) {
    focus(galleryReturnButton);
    contentScroll.scrollTop = galleryScroll;
  }
});
element("close-gallery").addEventListener("click", () => {
  if (!session.closeGallery()) return;
  sound.unlock();
  reveal(session.view().result, false);
});
element("restart").addEventListener("click", () => {
  if (!session.restart()) return;
  resetResultEffects();
  render(true);
});

render(false);
setLayout();
setContainerInsets();
element("start-hint").hidden = true;
element("start").hidden = false;


