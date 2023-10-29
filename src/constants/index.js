export const MONGO_URL =
	process.env.MONGO_URL ?? 'mongodb://localhost:27017/book-management-api';
export const PORT = process.env.PORT ?? 1337
export const ORIGIN = process.env.ORIGIN ?? 'http://localhost:3000'
export const NODE_ENV = process.env.NODE_ENV ?? 'development'