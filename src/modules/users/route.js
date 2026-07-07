const router = require('express').Router();
const userRouter = require('./routes/user.route');

router.use('/users', userRouter);

module.exports = router;
