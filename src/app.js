const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const mountRoutes = require('./routes');


const app = express();
app.use(bodyParser.json());

// Routes
mountRoutes(app);


module.exports = app;