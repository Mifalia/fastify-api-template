import { FastifyInstance } from 'fastify';
import { indexController } from 'modules/health/health.controller';

/**
 * Register all routes within the app and handles their prefix
 *
 * @param app instance of the running app
 */
const registerRoutes = async (app: FastifyInstance) => {
  app.register(indexController, { prefix: '/' });
};

export default registerRoutes;
