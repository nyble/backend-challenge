
const bunyan = require('bunyan'),
  bformat = require('bunyan-formatter'),
  formatOut = bformat({ outputMode: 'short', level: 'debug' });

import config from 'util/config';

let streams: any[] = [
  {
    stream: formatOut,
    serializers: bunyan.stdSerializers,
  },
];


const logger = bunyan.createLogger({
  name: 'nyble-take-home-challenge-backend',
  streams,
});

export const init_logger = (component: string) => {
  return logger.child({ component: component });
};

