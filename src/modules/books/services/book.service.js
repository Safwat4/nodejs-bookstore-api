/**
 * @abstract Service for managing book-related operations
 * @description This service provides methods for creating, retrieving, updating, and deleting books in the database. It acts as an intermediary between the controller and the repository layer.
 * @module BookService
 */

const bookRepository = require("../repositories/book.repo");

/**
 * @function createBook
 */

async function createBook(bookData) {
  try {
    // Check if a book with the same name already exists
    const existingBook = await bookRepository.getBookByName(bookData.name);
    if (existingBook) {
      throw new Error("A book with the same name already exists.");
    }
    // Create a new book
    const book = await bookRepository.createBook(bookData);
    return book;
  } catch (error) {
    throw new Error(error.message);
  }
} // end of createBook

/**
 * @function getAllBooks
 */
async function getAllBooks() {
  try {
    const books = await bookRepository.getAllBooks();
    return books;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * @function getBookByName
 */
async function getBookByName(name) {
  try {
    const book = await bookRepository.getBookByName(name);
    return book;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * @function getBookById
 */

async function getBookById(id) {
  try {
    const book = await bookRepository.getBookById(id);
    return book;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * @function updateBook
 */
async function updateBook(id, updateData) {
  try {
    // Check if a book with the same name already exists
    const existingBook = await bookRepository.getBookByName(updateData.name);
    if (existingBook) {
      throw new Error("A book with the same name already exists.");
    }
    const updatedbook = await bookRepository.updateBook(id, updateData);
    return updatedbook;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * @function deleteBook
 */
async function deleteBook(id) {
  try {
    const deletedbook = await bookRepository.deleteBook(id);
    return deletedbook;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createBook,
  getAllBooks,
  getBookByName,
  getBookById,
  updateBook,
  deleteBook,
};
