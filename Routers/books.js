const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/books');
const authMiddleware = require('../Middlewares/auth');
const adminMiddleware = require('../Middlewares/admin');

// Api to get all books  --> by user and admin
router.get('/', authMiddleware, bookController.getAllBooks);

// Api to get a book by ID --> by user and admin
router.get('/:id', authMiddleware, bookController.getBookById);

// Api to add a new book --> by admin only
router.post('/', authMiddleware, adminMiddleware, bookController.addNewBook);

// Api to update a book by ID --> by admin only
router.put('/:id', authMiddleware, adminMiddleware, bookController.updateBookById);

// Api to delete a book by ID --> by admin only
router.delete('/:id', authMiddleware, adminMiddleware, bookController.deleteBookById);

module.exports = router;