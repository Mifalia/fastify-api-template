import { FastifyInstance } from 'fastify';
import HealthController from './health.controller';

export default (app: FastifyInstance) => {
  const controller = new HealthController(app);

  /**
   * index route for entry point
   */
  app.route({
    url: '/',
    method: 'GET',
    handler: controller.index,
  });

  /**
   * health check route
   */
  app.route({
    url: '/health',
    method: 'GET',
    handler: controller.health,
  });
};
