function createAudio(clips, toggle, notice) {
  const preference = "soul-original-music";
  const active = {};
  const pending = {};
  const decoded = {};
  const levels = { music: .65, answerSound: 1, flipSound: 1, writingSound: 1 };
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  let context;
  let enabled = true;
  let unlocked = false;
  let writing = false;
  let noticeTimer;
  let musicOffset = 0;
  try { enabled = localStorage.getItem(preference) !== "off"; } catch (error) {}

  function update() {
    const label = enabled ? "关闭声音" : "开启声音";
    toggle.classList.toggle("music-off", !enabled);
    toggle.classList.toggle("music-paused", !active.music);
    toggle.setAttribute("aria-pressed", String(enabled));
    toggle.setAttribute("aria-label", label);
    toggle.title = label;
  }

  function show(message) {
    clearTimeout(noticeTimer);
    notice.textContent = message;
    notice.hidden = !message;
    if (message) noticeTimer = setTimeout(() => { notice.hidden = true; }, 4500);
  }

  function decode(key) {
    if (!decoded[key]) {
      const bytes = atob(clips[key].encoded);
      const buffer = new Uint8Array(bytes.length);
      for (let index = 0; index < bytes.length; index += 1) buffer[index] = bytes.charCodeAt(index);
      decoded[key] = new Promise((resolve, reject) => context.decodeAudioData(buffer.buffer, resolve, reject));
    }
    return decoded[key];
  }

  function stop(key) {
    delete pending[key];
    const player = active[key];
    if (!player) return;
    delete active[key];
    if (key === "music") {
      musicOffset = (player.offset + context.currentTime - player.started) % player.source.buffer.duration;
    }
    player.source.stop();
    update();
  }

  function play(key) {
    if (!enabled || !unlocked || !context || document.hidden || active[key] || pending[key]) return;
    const request = {};
    pending[key] = request;
    decode(key).then((clip) => {
      if (pending[key] !== request) return;
      delete pending[key];
      if (!enabled || document.hidden || context.state !== "running") return;
      const source = context.createBufferSource();
      const gain = context.createGain();
      const offset = key === "music" ? musicOffset : 0;
      source.buffer = clip;
      source.loop = key === "music" || key === "writingSound";
      gain.gain.value = levels[key];
      source.connect(gain);
      gain.connect(context.destination);
      active[key] = { source, started: context.currentTime, offset };
      source.onended = () => {
        source.disconnect();
        gain.disconnect();
        if (active[key] && active[key].source === source) {
          delete active[key];
          update();
        }
      };
      source.start(0, offset);
      if (key === "music") show("");
      update();
    }).catch(() => {
      if (pending[key] !== request) return;
      delete pending[key];
      delete decoded[key];
      if (key === "music") show("声音载入失败，请再点击音乐图标。");
    });
  }

  function unlock(effect) {
    if (!enabled || document.hidden) return;
    if (!AudioContext) {
      show("当前环境无法播放声音。");
      return;
    }
    if (!context) {
      try { context = new AudioContext(); } catch (error) {
        show("暂时无法播放声音。");
        return;
      }
    }
    const resume = context.state === "running" ? Promise.resolve() : context.resume();
    resume.then(() => {
      unlocked = true;
      play("music");
      if (writing) play("writingSound");
      if (effect) play(effect);
      decode("flipSound").catch(() => { delete decoded.flipSound; });
    }).catch(() => show("点一下音乐图标即可重试。"));
  }

  function setWriting(value) {
    writing = value;
    if (value) unlock();
    else stop("writingSound");
  }

  toggle.addEventListener("click", () => {
    if (enabled && !active.music && !pending.music) {
      unlock();
      return;
    }
    enabled = !enabled;
    try { localStorage.setItem(preference, enabled ? "on" : "off"); } catch (error) {}
    if (enabled) unlock();
    else {
      Object.keys(clips).forEach(stop);
      show("");
    }
    update();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) Object.keys(clips).forEach(stop);
    else if (unlocked) unlock();
  });
  update();
  return { unlock, play, stop, setWriting };
}


