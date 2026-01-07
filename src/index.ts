import '_common/bootstrap/environment';
import { app } from './app';

/**
 * Makes necessary initializations before starting server
 */
async function bootstrap() {
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
}

bootstrap();
