import { Router } from 'express';
import * as bookControllers from '../controllers/book.controllers.js';
import * as bookValidators from '../validators/book.validators.js';

const router = Router();

router
	.route('/')
	.post(bookValidators.validateCreateBook, bookControllers.createBook)
	.get(bookControllers.getBooks);

router
	.route('/:id')
	.get(bookControllers.getBook)
	.put(bookControllers.updateBook)
	.delete(bookControllers.deleteBook);

export default router;
