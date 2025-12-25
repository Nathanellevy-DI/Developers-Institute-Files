const express = require('express');
const router = express.Router();
const controller = require('../controllers/books.controller');

router.get('/api/books', controller.getBooks);
router.get('/api/books/:bookId', controller.getBookById);
router.post('/api/books', controller.createBook);

module.exports = router;
