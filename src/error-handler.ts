import { ApiResponse } from '_common/utils/response.utils';
import { constants } from 'http2';
import { FastifyError, FastifyInstance } from 'fastify';

export async function registerErrorHandler(app: FastifyInstance) {
  /**
   *  Global errors
   */
  app.setErrorHandler(async (error: FastifyError, request, reply) => {
    return reply
      .status(error.statusCode || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .send(
        ApiResponse.error(
          error.message,
          error.statusCode || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR,
          error.code || 'SERVER_INTERNAL_ERROR'
        )
      );
  });

  /**
   * Not found error handler
   */
  app.setNotFoundHandler(async (request, reply) => {
    return reply
      .status(constants.HTTP_STATUS_NOT_FOUND)
      .send(
        ApiResponse.error(
          `Route ${request.method}:${request.url} not found`,
          constants.HTTP_STATUS_NOT_FOUND,
          'NOT_FOUND'
        )
      );
  });
}
