const express = require('express');
const router = express.Router();
const userController = require('../Controllers/users');

// Api Endpoints for User Registration and Login
router.post('/register', userController.register);

router.post('/login', userController.login);


module.exports = router;