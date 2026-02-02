const express = require('express');
const app = express();
const todosRouter = require('./routes/todos');

const PORT = 3000;

app.use(express.json()); // for JSON bodies
app.use('/todos', todosRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
