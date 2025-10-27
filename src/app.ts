import { registerPlugins } from 'plugins';
import { _fastifyInstance as app } from './_fastify';
import registerRoutes from './routes';

/**
 * Register plugins
 */
registerPlugins(app);

/**
 * Register routes
 */
registerRoutes(app);

export { app };
