import '_common/scripts/load-env';
import { app } from './app';

/**
 * For tracking server uptime
 */
const startTime = Date.now();
app.decorate('startTime', startTime);

/**
 * Starts server
 */
app.listen(
  {
    port: parseInt(process.env.PORT as string) || 8000,
    host: process.env.HOST || '127.0.0.1',
  },
  (err, address) => {
    if (err) app.log.error(err);
    app.log.info(`server started at ${address}`);
  }
);
