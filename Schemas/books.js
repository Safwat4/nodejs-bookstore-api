const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Book schema
const bookSchema = new Schema({
    title: { type: String, required: true },
    author : { type: String, required: true },
    publishedDate: { type: Date, required: true },
    pages: { type: Number, required: true },
    topic: { type: String, required: true },
    price: { type: Number, required: true }
}, { timestamps: true });

/*
{ 
    "title": "The Mistery of the Blue Train",
    "author": "Agatha Christie",
    "publishedDate": "1928-03-29",
    "pages": 296,
    "topic": "Mystery",
    "price": 15.99
}

*/ 


module.exports = mongoose.model('Books', bookSchema);
