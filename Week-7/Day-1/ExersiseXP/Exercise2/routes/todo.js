const express = require('express');
const router = express.Router();

// In-memory database
const todos = [];

// Get all todos
router.get('/', (req, res) => {
  res.json(todos);
});

// Add a new todo
router.post('/', (req, res) => {
  const { title } = req.body;

  const newTodo = {
    id: Date.now(),
    title,
    completed: false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo by ID
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todo.title = req.body.title ?? todo.title;
  todo.completed = req.body.completed ?? todo.completed;

  res.json(todo);
});

// Delete a todo by ID
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todos.splice(index, 1);
  res.json({ message: 'Todo deleted' });
});

module.exports = router;
