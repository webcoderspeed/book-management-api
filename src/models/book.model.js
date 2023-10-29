import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
	{
		title: { type: String, required: true },
		author: { type: String, required: true },
		summary: { type: String, required: true },
	},
	{
		timestamps: true,
	},
);

const Book = model('Book', bookSchema);

export default Book;
