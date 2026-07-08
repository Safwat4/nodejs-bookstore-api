/**
 * @description This book controller handles HTTP requests related to book operations, such as creating, retrieving, updating, and deleting books. It interacts with the BookService to perform these operations and sends appropriate responses back to the client.
 * @module BookController
 */

const bookService = require("../services/book.service");

/**
 * @function createBook
 * @description Create a new book
 */

const createBook = async (req, res) => {
  try {
    const bookData = req.body;
    const book = await bookService.createBook(bookData);
    res.status(201).json({
      message: "Book Created Successfully",
      book: book,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**
 * @function getAllBooks
 * @description Retrieve all books
 */

const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json({
      message: "Books Retrieved Successfully",
      books: books,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**
 * @function getBookByName
 * @description Retrieve a book by its name
 */

const getBookByName = async (req, res) => {
  try {
    const { name } = req.params;
    const book = await bookService.getBookByName(name);
    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    res.status(200).json({
      message: "Book Retrieved Successfully",
      book: book,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**
 * @function getBookById
 * @description Retrieve a book by its ID
 */
const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getBookById(id);
    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    res.status(200).json({
      message: "Book Retrieved Successfully",
      book: book,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**
 * @function updateBook
 * @description Update a book's information
 */

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedBook = await bookService.updateBook(id, updateData);
    if (!updatedBook) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    res.status(200).json({
      message: "Book Updated Successfully",
      book: updatedBook,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**
 * @function deleteBook
 * @description Delete a book by its ID
 */

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await bookService.deleteBook(id);
    if (!deletedBook) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    res.status(200).json({
      message: "Book Deleted Successfully",
      book: deletedBook,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookByName,
  getBookById,
  updateBook,
  deleteBook,
};
