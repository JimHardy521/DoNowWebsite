/* =====================
   GAME STATE
===================== */

let time;
let score;
let timer;
let maxNumber;

/* =====================
   DOM
===================== */

const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const startBtn = document.getElementById("startBtn");
const endScreen = document.getElementById("endScreen");
const finalScoreEl = document.getElementById("finalScore");
const replayBtn = document.getElementById("replayBtn");

/* =====================
   AUDIO
===================== */

const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

/* =====================
   EVENTS
===================== */

startBtn.onclick = startGame;
replayBtn.onclick = startGame;

/* =====================
   GAME FLOW
===================== */

function startGame() {
  time = 30;
  score = 0;
  maxNumber = 5;

  startBtn.style.display = "none";
  endScreen.style.display = "none";
  document.getElementById("game").style.display = "block";

  updateDisplay();
  nextQuestion();

  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    timeEl.textContent = time;
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
   QUESTIONS
===================== */

function nextQuestion() {
  const q = generateQuestion();
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(opt => {
    const card = document.createElement("div");
    card.className = "option";
    card.textContent = opt;
    card.onclick = () => checkAnswer(card, opt, q.answer);
    optionsEl.appendChild(card);
  });
}

function checkAnswer(card, choice, answer) {

  if (choice === answer) {
    // Correct answer
    card.classList.add("correct");
    correctSound.play();
    score++;
    time += 2;

    // Gradually increase difficulty
    if (Math.random() < 0.4 && maxNumber < 20) {
      maxNumber++;
    }

    updateDisplay();

    // Move on after a short pause
    setTimeout(nextQuestion, 700);

  } else {
    // Wrong answer
    card.classList.add("wrong");
    wrongSound.play();

    // Remove the red highlight after a moment
    setTimeout(() => {
      card.classList.remove("wrong");
    }, 600);
  }
}


/* =====================
   GENERATOR
===================== */

function generateQuestion() {
  const a = randomInt(2, maxNumber);
  const b = randomInt(1, a - 1);

  const isAddition = Math.random() < 0.5;

  let question, answer;

  if (isAddition) {
    question = `${a} + ${b}`;
    answer = a + b;
  } else {
    question = `${a} - ${b}`;
    answer = a - b;
  }

  return {
    question,
    answer: answer.toString(),
    options: generateOptions(answer)
  };
}

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
    .map(String)
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
