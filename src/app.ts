import { _fastifyInstance as app } from './_fastify';
import { registerPlugins } from 'plugins';
import registerRoutes from 'routes';
import { registerErrorHandler } from 'error-handler';

/**
 * Register plugins
 */
registerPlugins(app);

/**
 * Register routes
 */
registerRoutes(app);

/**
 * Global error handler
 */
registerErrorHandler(app);

export { app };
