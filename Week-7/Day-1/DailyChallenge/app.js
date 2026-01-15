const express = require('express');
const app = express();
const quizRouter = require('./routes/quiz');

const PORT = 3000;

app.use(express.json()); // allow JSON body
app.use('/quiz', quizRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
