const express = require('express');
const router = express.Router();
const bookController = require('../../books/controllers/book.controller');
const authMiddleware = require('../../../Middlewares/auth');
const adminMiddleware = require('../../../Middlewares/checkAdmin');

// Api to get all books  --> by user and admin
router.get('/', authMiddleware, bookController.getAllBooks);

// Api to get a book by ID --> by user and admin
router.get('/:id', authMiddleware, bookController.getBookById);

// Api to get a book by title --> by user and admin
router.get('/title/:title', authMiddleware, bookController.getBookByTitle);

// Api to add a new book --> by admin only
router.post('/', authMiddleware, adminMiddleware, bookController.createBook);

// Api to update a book by ID --> by admin only
router.put('/:id', authMiddleware, adminMiddleware, bookController.updateBook);

// Api to delete a book by ID --> by admin only
router.delete('/:id', authMiddleware, adminMiddleware, bookController.deleteBook);

module.exports = router;