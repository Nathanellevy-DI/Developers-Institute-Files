const emojiEl = document.getElementById('emoji');
const form = document.getElementById('gameForm');
const feedback = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const leaderboardEl = document.getElementById('leaderboard');

async function loadQuestion() {
  const res = await fetch('/question');
  const data = await res.json();

  emojiEl.textContent = data.emoji;
  scoreEl.textContent = data.score;
  form.innerHTML = '';

  data.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.type = 'submit';
    btn.onclick = e => submitGuess(e, option);
    form.appendChild(btn);
  });
}

async function submitGuess(e, guess) {
  e.preventDefault();

  const res = await fetch('/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guess })
  });

  const data = await res.json();

  feedback.textContent = data.correct
    ? 'Correct! 🎉'
    : 'Wrong ❌';

  scoreEl.textContent = data.score;
  loadQuestion();
}

document.getElementById('saveScore').onclick = async () => {
  const name = prompt('Enter your name');
  if (!name) return;

  const res = await fetch('/leaderboard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });

  const data = await res.json();
  renderLeaderboard(data);
};

async function loadLeaderboard() {
  const res = await fetch('/leaderboard');
  const data = await res.json();
  renderLeaderboard(data);
}

function renderLeaderboard(data) {
  leaderboardEl.innerHTML = '';
  data.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `${entry.name} - ${entry.score}`;
    leaderboardEl.appendChild(li);
  });
}

loadQuestion();
loadLeaderboard();
