const router = require('express').Router();
const bookRouter = require('./routes/book.route');

router.use('/books', bookRouter);

module.exports = router;
