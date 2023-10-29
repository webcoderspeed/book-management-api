import bookRoutes from './book.routes.js';

const baseURL = '/api/v1';

const routes = (app) => {
	// book routes
	app.use(`${baseURL}/books`, bookRoutes);
};

export default routes;
