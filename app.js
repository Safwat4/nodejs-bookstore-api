const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./Routers/users');
const bookRoutes = require('./Routers/books');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
const uri = "mongodb+srv://safwatahmed:safwat123@sadb.1bj2yxp.mongodb.net/?appName=SADB";
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(uri);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit();
    }
};
connectDB();

app.use('/', userRoutes);
app.use('/', bookRoutes);


app.listen(4050)
