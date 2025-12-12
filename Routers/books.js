const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/books');
const authMiddleware = require('../Middlewares/auth');

// Api to get all books  --> by user and admin
router.get('/api/books', authMiddleware, bookController.getAllBooks); 

// Api to get a book by ID --> by user and admin
router.get('/api/books/:id',authMiddleware, bookController.getBookById);

// Api to add a new book --> by admin only
router.post('/api/books',authMiddleware, bookController.addNewBook);

// Api to update a book by ID --> by admin only
router.put('/api/books/:id',authMiddleware, bookController.updateBookById);

// Api to delete a book by ID --> by admin only
router.delete('/api/books/:id',authMiddleware, bookController.deleteBookById);





module.exports = router;