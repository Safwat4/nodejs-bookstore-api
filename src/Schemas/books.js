const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Book schema
const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    pages: { type: Number, required: true },
    topic: { type: String, required: true },
    price: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Books', bookSchema);
/*
{ 
    "title": "The Mistery of the Blue Train",
    "author": "Agatha Christie",
    "publishedDate": "1928-03-29",
    "pages": 296,
    "topic": "Mystery",
    "price": 15.99
}
    {
    "title": "1984",
    "author": "George Orwell",
    "publishedDate": "1949-06-08",
    "pages": 328,
    "topic": "Dystopian",
    "price": 12.99
    }

*/



