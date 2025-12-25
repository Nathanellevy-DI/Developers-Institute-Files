const express = require('express');
const router = express.Router();

// Hard-coded trivia questions
const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

// Game state (simple, single user)
let currentQuestionIndex = 0;
let score = 0;

// GET /quiz - Start quiz or show current question
router.get('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  res.json({
    question: triviaQuestions[currentQuestionIndex].question,
  });
});

// POST /quiz - Submit answer
router.post('/', (req, res) => {
  const userAnswer = req.body.answer;

  if (!userAnswer) {
    return res.status(400).json({ message: 'Answer is required' });
  }

  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  let feedback;

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    feedback = 'Correct!';
  } else {
    feedback = `Wrong! Correct answer was: ${correctAnswer}`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      feedback,
      message: 'Quiz finished!',
      score,
    });
  }

  res.json({
    feedback,
    nextQuestion: triviaQuestions[currentQuestionIndex].question,
  });
});

// GET /quiz/score - Final score
router.get('/score', (req, res) => {
  res.json({
    finalScore: score,
    totalQuestions: triviaQuestions.length,
  });
});

module.exports = router;
