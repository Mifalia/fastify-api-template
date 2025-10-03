import { _fastifyInstance as app } from './_fastify';
import registerRoutes from './routes';

/**
 * Register routes
 */
registerRoutes(app);

export { app };
