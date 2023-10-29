import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import { ORIGIN } from '../constants/index.js';

const corsOptions = {
	origin: ORIGIN,
	credentials: true,
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	preflightContinue: false,
	optionsSuccessStatus: 204,
	allowedHeaders: [
		'Origin',
		'X-Requested-With',
		'Content-Type',
		'Accept',
		'Authorization',
		'Access-Control-Allow-Headers',
	],
};

const securityMiddleware = (app) => {
	// removes any chars starting with dollar or dot
	app.use(mongoSanitize());

	// xss protection
	// app.use(xssClean());

	// remove x-powered-by
	app.disable('x-powered-by');

	app.use(cors(corsOptions));
};

export default securityMiddleware;
