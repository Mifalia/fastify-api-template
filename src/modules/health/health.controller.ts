import { FastifyInstance } from 'fastify';
import { calculateElapsedTime } from '_common/utils/server.utils';

export const indexController = async (app: FastifyInstance) => {
  /**
   * Index Route
   */
  app.get('/', async (request, reply) => {
    return reply.status(200).send({
      message: 'Server is running',
      data: { request_id: request.id },
    });
  });

  /**
   * Server uptime check
   */
  app.get('/healthcheck', async (request, reply) => {
    const startTime = (app as any).startTime || Date.now();
    const uptime = calculateElapsedTime(startTime);

    return reply.status(200).send({
      message: 'Server is running',
      data: {
        status: 'ok',
        uptime,
      },
    });
  });
};
