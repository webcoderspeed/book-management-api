import express from 'express';
import colors from 'colors'
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import morgan from 'morgan';
import routes from './routes/index.js';
import { errorHandler, notFound } from './middlewares/error.middlewares.js';
import securityMiddleware from './middlewares/security.middleware.js';
import { PORT } from './constants/index.js';


const app = express();

app.use(morgan('dev'));
dotenv.config();

// security middleware (cors, xss, mongo sanitize)
securityMiddleware(app);

// setting up body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, async () => {
	console.info(
		`App is running at port ${PORT} & url http://localhost:${PORT} is live. PID ${process.pid}`.green.underline,
	);

	await connectDB();

	routes(app);

	// error handler
	app.use(notFound);
	app.use(errorHandler);
});

// terminal close
process.on('SIGINT', function () {
	console.info('Closing the process by user');
	process.exit(0);
});

// system close
process.on('SIGTERM', function () {
	console.info('Closing the process by system');
	process.exit(0);
});

process.on('uncaughtException', (err) => {
	console.info('UNHANDLED EXCEPTION ERROR!!!', err);
	if (err.stack) console.log(err.stack);
});

process.on('unhandledRejection', (err) => {
	console.info('UNHANDLED REJECTION ERROR!!!', err);
	if (err.stack) console.log(err.stack);
});