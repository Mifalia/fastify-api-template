import fastifyStatic from '@fastify/static';
import { APP_ROOT_DIR } from '_common/constants/server';
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import path from 'path';

export const staticPlugin = fp((app: FastifyInstance) => {
  app.register(fastifyStatic, {
    root: path.join(APP_ROOT_DIR, 'public'),
    prefix: '/',
  });
});
