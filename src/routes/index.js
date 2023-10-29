import bookRoutes from './book.routes.js';

const baseURL = '/api/v1';

const routes = (app) => {
	app.get('/', (req, res) => {
		res.status(200).json({
			version: '1.0.0',
			message: 'Listening to book api...',
		});
	});

	// book routes
	app.use(`${baseURL}/books`, bookRoutes);
};

export default routes;
