const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usersRoutes = require('./Routers/users');
const booksRoutes = require('./Routers/books');

const app = express();
app.use(bodyParser.json());

const uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(uri);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    }
};

connectDB();


app.use('/api/users', usersRoutes);
app.use('/api/books', booksRoutes);


app.listen(4050)
