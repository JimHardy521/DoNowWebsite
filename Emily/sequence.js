let time;
let score;
let timer;

const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

const startBtn = document.getElementById("startBtn");
const replayBtn = document.getElementById("replayBtn");

const endScreen = document.getElementById("endScreen");
const finalScoreEl = document.getElementById("finalScore");

const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

startBtn.onclick = startGame;
replayBtn.onclick = startGame;

/* =====================
   GAME FLOW
===================== */

function startGame() {
  time = 30;
  score = 0;

  startBtn.style.display = "none";
  endScreen.style.display = "none";
  document.getElementById("game").style.display = "block";

  updateDisplay();
  nextQuestion();

  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    updateDisplay();
    if (time <= 0) endGame();
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  document.getElementById("game").style.display = "none";
  endScreen.style.display = "block";
  finalScoreEl.textContent = score;
}

/* =====================
   QUESTION GENERATOR
===================== */

function generateSequence() {

  // Difficulty grows with score
  const maxStart = 5 + Math.floor(score / 2);
  const length = score >= 15 ? 4 : 3;

  const stepOptions = [1, 2, -1, -2];
  const step = stepOptions[randomInt(0, 3)];

  let start = randomInt(2, maxStart);

  // Prevent negatives
  while (start + step * length < 0) {
    start = randomInt(2, maxStart);
  }

  const sequence = [];

  for (let i = 0; i < length; i++) {
    sequence.push(start + step * i);
  }

  const answer = start + step * length;

  return { sequence, answer };
}

function nextQuestion() {
  const { sequence, answer } = generateSequence();

  questionEl.textContent =
    sequence.join(", ") + ", ?";

  const options = generateOptions(answer);

  optionsEl.innerHTML = "";

  options.forEach(opt => {
    const card = document.createElement("div");
    card.className = "option";
    card.textContent = opt;
    card.onclick = () => checkAnswer(card, opt, answer);
    optionsEl.appendChild(card);
  });
}

/* =====================
   ANSWER CHECKING
===================== */

function checkAnswer(card, choice, answer) {

  if (choice == answer) {

    card.classList.add("correct");
    correctSound.play();

    score++;
    time += 2;

    updateDisplay();
    setTimeout(nextQuestion, 700);

  } else {

    card.classList.add("wrong");
    wrongSound.play();

    setTimeout(() => {
      card.classList.remove("wrong");
    }, 600);
  }
}

/* =====================
   OPTIONS
===================== */

function generateOptions(correct) {
  const options = new Set([correct]);

  while (options.size < 4) {
    const offset = randomInt(-4, 4);
    const candidate = correct + offset;
    if (candidate >= 0 && candidate !== correct) {
      options.add(candidate);
    }
  }

  return Array.from(options)
    .sort(() => Math.random() - 0.5);
}

/* =====================
   HELPERS
===================== */

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateDisplay() {
  timeEl.textContent = time;
  scoreEl.textContent = score;
}
