const bookModel = require('../Schemas/books');

// Controller to Get all books --> by user and admin
exports.getAllBooks = async function (req, res) {
    try{
        const books = await bookModel.find();
        res.status(200).json({message : "Books retrieved successfully", data: books});
    }catch(err){
        res.status(400).json({message : "Error retrieving books", error: err.message});
    }
}; // end of getAllBooks


// Controller to Get a book by ID --> by user and admin
exports.getBookById = async function (req, res) {
        try{
            const book = await bookModel.findById(req.params.id);
            if(!book){
                return  res.status(404).json({message : "Book not found"});
            }
            res.status(200).json({message : "Book retrieved successfully", data: book});
             
    }catch(err){
        res.status(400).json({message : "Error retrieving book", error: err.message});
    }
};// end of getBookById


// Controller to Add a new book --> by admin only
exports.addNewBook = async function (req, res) {
        try{
            // Check if user is admin
            if (req.user.role !== 'admin') {
                return res.status(403).json({ message: 'Access denied. Admins only.' });
            }
            // Add new book
            const newBook = new bookModel(req.body);
            await newBook.save();
            res.status(201).json({message : "Book added successfully", data: newBook});
    }catch(err){
        res.status(400).json({message : "Error adding book", error: err.message});
    }
};


// Controller to Update a book by ID --> by admin only
exports.updateBookById = async function (req, res) {
        try{
            // Check if user is admin
            if (req.user.role !== 'admin') {
                return res.status(403).json({ message: 'Access denied. Admins only.' });
            }
            // Update book
            await bookModel.findByIdAndUpdate(req.params.id, req.body);
            const updatedBook = await bookModel.findById(req.params.id);
            res.json({message : "Book updated successfully", data: updatedBook});

    }catch(err){

    }
}; // end of updateBookById


// Controller to Delete a book by ID --> by admin only
exports.deleteBookById = async function (req, res) {
        try{
            // Check if user is admin
            if (req.user.role !== 'admin') {
                return res.status(403).json({ message: 'Access denied. Admins only.' });
            }
            // Delete book
            await bookModel.findByIdAndDelete(req.params.id);
            res.json({message : "Book deleted successfully"});

    }catch(err){
        res.status(400).json({message : "Error deleting book", error: err.message});
    }
};// end of deleteBookById


