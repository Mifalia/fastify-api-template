import { FastifyInstance } from 'fastify';
import { calculateElapsedTime } from '_common/utils/server.utils';
import { ApiResponse } from '_common/utils/response.utils';

export const indexController = async (app: FastifyInstance) => {
  /**
   * Index Route
   */
  app.get('/', async (request, reply) => {
    return reply
      .status(200)
      .send(ApiResponse.success(null, { requestId: request.id }, 'Server is running'));
  });

  /**
   * Server uptime check
   */
  app.get('/healthcheck', async (request, reply) => {
    const startTime = (app as any).startTime || Date.now();
    const uptime = calculateElapsedTime(startTime);

    return reply
      .status(200)
      .send(
        ApiResponse.success(
          { status: 'ok', uptime },
          { requestId: request.id },
          'Server is running'
        )
      );
  });
};
