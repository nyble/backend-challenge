import 'reflect-metadata';
import config from 'util/config';
import { init_logger } from 'util/logger';
import init_app from 'app'

let server: any;
const port = config.get('port');
const logger = init_logger('server');
const main = async () => {
  const app = await init_app();

  server = app.listen(port, () => {
    logger.info(`Server listening on tcp 0.0.0.0:${port}`);
  });
};

const graceful_shutdown = () => {
  server.close(async () => {
    logger.info(`${config.get('service')} is gracefully shutting down`);
    process.exit(0);
  });
};

process.on('SIGTERM', graceful_shutdown);
process.on('SIGINT', graceful_shutdown);
process.on('unhandledRejection', (err) => {
  logger.error('Unhandled promise rejection!', err);
  process.exit(1);
});

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});
