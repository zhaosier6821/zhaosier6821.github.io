function matchSpirit(answers, config) {
  if (!config || !config.questions || !config.outcomes) {
    throw new Error("缺少或无效的评分配置");
  }
  const total = config.questions.length;
  if (!Array.isArray(answers) || answers.length !== total) {
    throw new Error(`需要恰好${total}道题的答案，按题号顺序传入`);
  }
  const valid = new Set(["A", "B", "C", "D"]);
  const input = answers.map((v) => String(v).toUpperCase());
  if (input.some((v) => !valid.has(v))) {
    throw new Error("答案只能使用A、B、C、D");
  }
  const scores = config.outcomes.map((outcome, index) => ({
    id: outcome.id,
    key: outcome.key,
    name: outcome.name,
    image_filename: outcome.image_filename,
    raw: 0,
    base_offset: outcome.base_offset,
    tie_epsilon: outcome.tie_epsilon == null ? index * 0.00001 : outcome.tie_epsilon,
  }));
  for (let q = 0; q < total; q++) {
    const opt = config.questions[q].options.find((v) => v.code === input[q]);
    if (!opt) throw new Error(`第 ${q + 1} 题缺少选项配置`);
    for (const result of scores) result.raw += (opt.weights && opt.weights[result.name]) || 0;
  }
  for (const score of scores) {
    score.total = score.raw + score.base_offset + score.tie_epsilon;
  }
  scores.sort((a, b) => b.total - a.total);
  return {
    result: scores[0],
    runner_up: scores[1],
    margin: Number((scores[0].total - scores[1].total).toFixed(5)),
    ranking: scores,
    answers: input,
    note: "艺术意象匹配结果，不代表可靠的人格心理测量。",
  };
}


/**
 * Shared session for the small program and the offline browser preview.
 * A result's numeric ID is the link between the matcher and the finished deck.
 */
function createQuiz(config, cards, matchSpirit) {
  const questions = config.questions;
  const total = questions.length;
  let screen = "home";
  let index = 0;
  let answers = new Array(total).fill(null);
  let result = null;
  let galleryCard = null;

  const positions = [
    [15, 14], [45, 9], [77, 15], [29, 27],
    [61, 31], [86, 34], [16, 43], [41, 47],
    [73, 49], [21, 63], [49, 62], [85, 65],
    [15, 83], [40, 79], [65, 85], [83, 91],
  ];
  const coverTitles = Object.values(cards).map((card, i) => {
    const [left, top] = positions[i];
    const seconds = 15 + (i * 7 % 10);
    const phase = (i * 3.7 % seconds).toFixed(1);
    return {
      id: card.id,
      title: card.title,
      left: left + "%",
      top: top + "%",
      duration: seconds + "s",
      delay: "-" + phase + "s",
    };
  });

  function isCurrentQuestion(step) {
    return screen === "quiz" && Number(step) === index;
  }

  function start() {
    if (screen !== "home") return false;
    screen = "quiz";
    return true;
  }

  function choose(code, step) {
    if (!isCurrentQuestion(step)) return false;
    if (!questions[index].options.some((option) => option.code === code)) return false;
    answers[index] = code;
    return true;
  }

  function back(step) {
    if (!isCurrentQuestion(step) || index === 0) return false;
    index -= 1;
    return true;
  }

  function next(step) {
    if (!isCurrentQuestion(step) || !answers[index]) return false;
    if (index < total - 1) {
      index += 1;
    } else {
      const matched = matchSpirit(answers, config).result;
      result = cards[matched.id];
      screen = "result";
    }
    return true;
  }

  function restart() {
    if (screen !== "result" || galleryCard) return false;
    answers = new Array(total).fill(null);
    index = 0;
    result = null;
    screen = "quiz";
    return true;
  }

  function openGallery() {
    if (screen !== "result") return false;
    galleryCard = null;
    screen = "gallery";
    return true;
  }

  function browseCard(cardId) {
    const card = cards[Number(cardId)];
    if (screen !== "gallery" || !card) return false;
    galleryCard = card;
    screen = "result";
    return true;
  }

  function closeGallery() {
    if (screen !== "gallery") return false;
    screen = "result";
    return true;
  }

  function view() {
    const question = questions[index];
    return {
      screen,
      index,
      stepLabel: String(index + 1).padStart(2, "0"),
      total,
      title: question.title,
      prompt: question.prompt,
      options: question.options.map((option) => ({
        code: option.code,
        text: option.text,
        art: option.art || ("q" + String(question.id).padStart(2, "0") + "_" + option.code.toLowerCase() + ".webp"),
        selected: option.code === answers[index],
      })),
      progress: questions.map((item, position) => ({
        id: item.id,
        status: position < index ? "done" : (position === index ? "current" : "pending"),
      })),
      canNext: Boolean(answers[index]),
      canBack: index > 0,
      homeLabel: "去探寻",
      coverTitles,
      backLabel: "上一题",
      result: galleryCard || result,
      viewingGalleryCard: Boolean(galleryCard),
    };
  }

  return { start, choose, back, next, restart, openGallery, browseCard, closeGallery, view };
}


function writeReading(sections, onFrame) {
  const lines = sections.map((text) => Array.from(text));
  const pauses = { "，": 72, "、": 64, "；": 95, "：": 95, "。": 125, "！": 125, "？": 125 };
  let line = 0;
  let position = 0;
  let timer = setTimeout(writeNext, 250);

  function writeNext() {
    const characters = lines[line];
    const character = characters[position];
    position += 1;
    const written = characters.slice(0, position).join("");
    const remaining = characters.slice(position).join("");
    const done = !remaining && line === lines.length - 1;
    onFrame(line, written, remaining, done);
    if (done) return;
    if (remaining) {
      timer = setTimeout(writeNext, pauses[character] || 41);
    } else {
      line += 1;
      position = 0;
      timer = setTimeout(writeNext, 180);
    }
  }

  return () => clearTimeout(timer);
}


