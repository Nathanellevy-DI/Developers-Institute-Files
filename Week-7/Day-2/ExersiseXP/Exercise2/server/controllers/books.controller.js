let books = [];

// READ ALL
exports.getBooks = (req, res) => {
  res.json(books);
};

// READ ONE
exports.getBookById = (req, res) => {
  const book = books.find(b => b.id === Number(req.params.bookId));

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.json(book);
};

// CREATE
exports.createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;

  const newBook = {
    id: Date.now(),
    title,
    author,
    publishedYear
  };

  books.push(newBook);
  res.status(201).json(newBook);
};
