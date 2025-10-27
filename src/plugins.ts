/**
 * The plugins registered in this file are alredy-configured plugins
 * from the project itself and
 * wrapping arround fastify plugins.
 *
 * If you need to modify the plugins behaviour,
 * you can directly edit the plugin file
 * instead of attempting to make it dynamic here
 */

import { FastifyInstance } from 'fastify';
import { staticPlugin } from '_common/plugins/static';

export function registerPlugins(app: FastifyInstance) {
  app.register(staticPlugin);
}
