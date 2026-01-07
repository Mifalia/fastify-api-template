import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { formatHumanReadableDuration } from '_common/utils/time.utils';
import { ApiResponse } from '_common/utils/response.utils';

/**
 * Index controller
 */
class HealthController {
  constructor(private readonly app: FastifyInstance) {}

  /**
   * index action
   */
  public index = async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.status(200).send(ApiResponse.success(null, null, 'Server is up and running'));
  };

  /**
   * health check
   */
  public health = async (request: FastifyRequest, reply: FastifyReply) => {
    const uptimeSeconds = Math.floor(process.uptime());
    const uptimeDisplay = formatHumanReadableDuration(uptimeSeconds);

    const response = {
      status: 'ok',
      uptimeSeconds,
      uptimeDisplay,
    };

    return reply.status(200).send(ApiResponse.success(response, null, 'Server is up and running'));
  };
}

export default HealthController;
