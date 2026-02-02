const express = require('express');
const router = express.Router();

// In-memory database
const books = [];

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
  const { title, author } = req.body;

  const newBook = {
    id: Date.now(),
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  book.title = req.body.title ?? book.title;
  book.author = req.body.author ?? book.author;

  res.json(book);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  books.splice(index, 1);
  res.json({ message: 'Book deleted' });
});

module.exports = router;
