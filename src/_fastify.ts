import fastify, { FastifyInstance } from 'fastify';

/**
 * The unique configured instance of fastify
 * to be used as app within the project
 */
const _fastifyInstance: FastifyInstance = fastify({
  logger: true,
});

export { _fastifyInstance };
