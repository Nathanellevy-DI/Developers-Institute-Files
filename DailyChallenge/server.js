// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🚗', name: 'Car' },
  { emoji: '🍕', name: 'Pizza' }
];

let score = 0;

// helper function
function getRandomEmoji() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];

  const options = [correct.name];
  while (options.length < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(random)) options.push(random);
  }

  return {
    emoji: correct.emoji,
    correctName: correct.name,
    options: options.sort(() => Math.random() - 0.5)
  };
}

let currentQuestion = getRandomEmoji();

// GET question
app.get('/question', (req, res) => {
  res.json({
    emoji: currentQuestion.emoji,
    options: currentQuestion.options,
    score
  });
});

// POST answer
app.post('/guess', (req, res) => {
  const { guess } = req.body;

  let correct = false;
  if (guess === currentQuestion.correctName) {
    score++;
    correct = true;
  }

  currentQuestion = getRandomEmoji();

  res.json({
    correct,
    score
  });
});

// leaderboard
app.post('/leaderboard', (req, res) => {
  const { name } = req.body;

  let leaderboard = [];
  if (fs.existsSync('leaderboard.json')) {
    leaderboard = JSON.parse(fs.readFileSync('leaderboard.json'));
  }

  leaderboard.push({ name, score });
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 5);

  fs.writeFileSync('leaderboard.json', JSON.stringify(leaderboard, null, 2));

  res.json(leaderboard);
});

app.get('/leaderboard', (req, res) => {
  if (!fs.existsSync('leaderboard.json')) return res.json([]);
  res.json(JSON.parse(fs.readFileSync('leaderboard.json')));
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
