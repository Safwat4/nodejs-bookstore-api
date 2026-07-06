const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const usersRoutes = require('./Routers/users');
const booksRoutes = require('./Routers/books');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/users', usersRoutes);
app.use('/api/books', booksRoutes);

module.exports = app;