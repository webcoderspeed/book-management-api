import Book from '../models/book.model.js';
import asyncHandler from 'express-async-handler';

// @desc    Add a new book
// @route   POST /api/books/
// @access  Public
export const createBook = asyncHandler(async (req, res, next) => {
	try {
		const book = await Book.create(req.body);

    if (book) {
			res.status(201).json({
				success: true,
				data: book,
				message: 'Book created successfully',
			});
		} else {
			res.status(500);
			throw new Error('Book creation failed');
		}
	} catch (error) {
		next(error);
	}
});

// @desc    Get books
// @route   GET /api/books/
// @access  Public
export const getBooks = asyncHandler(async (req, res, next) => {
	try {
		const books = await Book.find({});

		return res.status(200).json({
			books,
			message: books.length
				? 'Books retreived successfully!'
				: 'No books found!',
			success: books.length ? true : false,
		});
	} catch (error) {
		next(error);
	}
});

// @desc    Get book
// @route   GET /api/books/:id
// @access  Public
export const getBook = asyncHandler(async (req, res, next) => {
	try {
		const book = await Book.findById(req.params.id);

		if (!book) {
			res.status(404);
			throw new Error('Book not found!');
		}

		return res.status(200).json({
			book,
			message: 'Book retreived successfully!',
			success: true,
		});
	} catch (error) {
		next(error);
	}
});

// @desc    Update a book
// @route   PUT /api/books/:id
// @access  Public
export const updateBook = asyncHandler(async (req, res, next) => {
	try {
		const book = await Book.findById(req.params.id);

		if (!book) {
			res.status(404);
			throw new Error('Book not found!');
		}

		const updatedBook = await Book.findByIdAndUpdate(
			req.params.id,
			{
				$set: { ...req.body },
			},
			{ new: true },
		);

		return res.status(200).json({
			book: updatedBook,
			message: 'Book updated successfully!',
			success: true,
		});
	} catch (error) {
		next(error);
	}
});

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Public
export const deleteBook = asyncHandler(async (req, res, next) => {
	try {
		const book = await Book.findByIdAndDelete(req.params.id);

		if (!book) {
			res.status(404);
			throw new Error('Book not found!');
		}

		return res.status(200).json({
			book,
			message: 'Book deleted successfully!',
			success: true,
		});
	} catch (error) {
		next(error);
	}
});
