/**
 * This module provides a repository for managing book data in the database.
 */

const Book = require("../model/book.model");

/**
 * @function createBook
 * @description Create a new book in the database
 * @param {Object} bookData - Data for the new book
 * @returns {Promise<Book>} - Created book document
 */
async function createBook(bookData) {
  const book = await Book.create(bookData);
  return book;
}

/**
 * @function getAllBooks
 * @description Retrieve all books from the database
 * @returns {Promise<Array<Book>>} - Array of book documents
 */
async function getAllBooks() {
  const books = await Book.find();
  return books;
}

/**
 * @function getBookByTitle
 * @description Retrieve a book by its title from the database
 * @param {string} title - Title of the book
 * @returns {Promise<Book|null>} - Book document or null if not found
 */
async function getBookByTitle(title) {
  const book = await Book.findOne({ title: title });
  return book;
}

/**
 * @function getBookByName
 * @description Retrieve a book by its name from the database
 * @param {string} name - Name of the book
 * @returns {Promise<Book|null>} - Book document or null if not found
 */
async function getBookByName(name) {
  const book = await Book.findOne({ name: name });
  return book;
}

/**
 * @function getBookById
 * @description Retrieve a book by its ID from the database
 * @param {string} id - ID of the book
 * @returns {Promise<Book|null>} - Book document or null if not found
 */
async function getBookById(id) {
    const book = await Book.findById(id);
    return book;
}

/**
 * @function updateBook
 * @description Update a book's information in the database
 * @param {string} id - ID of the book to update
 * @param {Object} updateData - Data to update the book with
 * @returns {Promise<Book|null>} - Updated book document or null if not found
 */
async function updateBook(id, updateData) {
    const book = await Book.findByIdAndUpdate(id, updateData, { new: true });
    return book;
}

/**
 * @function deleteBook
 * @description Delete a book from the database
 * @param {string} id - ID of the book to delete
 * @returns {Promise<Book|null>} - Deleted book document or null if not found
 */
async function deleteBook(id) {
    const book = await Book.findByIdAndDelete(id);
    return book;
}


module.exports = {
  createBook,
  getAllBooks,
  getBookByTitle,
  getBookById,
  updateBook,
  deleteBook
}

