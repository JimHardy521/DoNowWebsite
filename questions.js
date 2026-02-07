/* ================================
   GAME STATE
================================ */

let time = 40; // slightly longer for young children
let score = 0;
let currentLevel = 1;
let timerInterval;
let ticking = false;
let muted = false;

/* ================================
   DOM ELEMENTS
================================ */

const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const startBtn = document.getElementById("startBtn");
const endScreen = document.getElementById("endScreen");
const finalScoreEl = document.getElementById("finalScore");
const replayBtn = document.getElementById("replayBtn");
const muteBtn = document.getElementById("muteBtn");

/* ================================
   AUDIO
================================ */

const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
const tickSound = document.getElementById("tickSound");

const music = {
  1: document.getElementById("music1"),
  2: document.getElementById("music2"),
  3: document.getElementById("music3")
};

/* ================================
   EVENT LISTENERS
================================ */

startBtn.onclick = startGame;
replayBtn.onclick = restartGame;
muteBtn.onclick = toggleMute;

/* ================================
   GAME FLOW
================================ */

function startGame() {
  startBtn.style.display = "none";
  time = 40;
  score = 0;
  currentLevel = 1;
  ticking = false;

  updateDisplay();
  playMusic(currentLevel);

  timerInterval = setInterval(() => {
    time--;
    timeEl.textContent = time;

    if (time <= 10 && !ticking) {
      tickSound.loop = true;
      if (!muted) tickSound.play();
      ticking = true;
    }

    if (time <= 0) endGame();
  }, 1000);

  nextQuestion();
}

function endGame() {
  clearInterval(timerInterval);
  tickSound.pause();
  tickSound.currentTime = 0;
  Object.values(music).forEach(m => m.pause());

  document.getElementById("game").style.display = "none";
  endScreen.style.display = "block";
  finalScoreEl.textContent = score;
}

function restartGame() {
  endScreen.style.display = "none";
  document.getElementById("game").style.display = "block";
  startBtn.style.display = "inline-block";
}

/* ================================
   MUTE CONTROL
================================ */

function toggleMute() {
  muted = !muted;
  muteBtn.textContent = muted ? "🔇" : "🔊";
}

/* ================================
   QUESTIONS
================================ */

function nextQuestion() {
  const q = generateQuestion(currentLevel);

  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const card = document.createElement("div");
    card.className = "option";
    card.textContent = option;
    card.onclick = () => checkAnswer(card, option, q.answer);
    optionsEl.appendChild(card);
  });
}

function checkAnswer(card, choice, answer) {
  document.querySelectorAll(".option").forEach(o => o.onclick = null);

  if (choice === answer) {
    card.classList.add("correct");
    if (!muted) correctSound.play();
    score++;
    time += 2;

    const newLevel = Math.floor(score / 5) + 1;
    if (newLevel > currentLevel) {
      currentLevel = Math.min(newLevel, 10);
      time += 5;
      playMusic(currentLevel);
      sparkle();
    }
  } else {
    card.classList.add("wrong");
    if (!muted) wrongSound.play();
    time -= 5;
  }

  if (time < 0) time = 0;
  updateDisplay();
  setTimeout(nextQuestion, 700);
}

/* ================================
   QUESTION GENERATOR
================================ */

function generateQuestion(level) {
  const maxTotal = Math.min(5 + level * 2, 30);
  const allowSubtraction = level >= 2; // Subtraction starts at Level 2

  let a, b, answer, questionText;

  if (allowSubtraction && Math.random() < 0.35) {
    a = randomInt(2 + level, maxTotal);
    b = randomInt(1, Math.min(a, 5 + level));
    answer = a - b;
    questionText = `${a} - ${b}`;
  } else {
    a = randomInt(1, Math.min(5 + level, maxTotal - 1));
    b = randomInt(1, maxTotal - a);
    answer = a + b;
    questionText = `${a} + ${b}`;
  }

  const options = generateOptions(answer);
  return { question: questionText, answer: answer.toString(), options };
}

function generateOptions(correct) {
  const options = new Set();
  options.add(correct);

  while (options.size < 4) {
    const offset = randomInt(-4, 4);
    const candidate = correct + offset;
    if (candidate >= 0 && candidate !== correct) options.add(candidate);
  }

  return Array.from(options).map(String).sort(() => Math.random() - 0.5);
}

/* ================================
   HELPERS
================================ */

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateDisplay() {
  timeEl.textContent = time;
  scoreEl.textContent = score;
}

function playMusic(level) {
  Object.values(music).forEach(m => {
    m.pause();
    m.currentTime = 0;
  });
  const track = music[Math.min(level, 3)];
  if (track && !muted) track.play();
}

/* ================================
   SPARKLES
================================ */

function sparkle() {
  for (let i = 0; i < 8; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.textContent = "✨";
    s.style.left = Math.random() * 80 + "%";
    s.style.top = Math.random() * 60 + "%";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1000);
  }
}
