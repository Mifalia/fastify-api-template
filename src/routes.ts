import { FastifyInstance } from 'fastify';
import healthRoutes from 'modules/health/health.routes';

/**
 * Register all routes within the app and handles their prefix
 *
 * @param app instance of the running app
 */
const registerRoutes = async (app: FastifyInstance) => {
  app.register(healthRoutes, { prefix: '/' });
};

export default registerRoutes;
