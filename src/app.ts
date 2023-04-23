import express, { request, Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';

import expressPlayground from 'graphql-playground-middleware-express';


import config from 'util/config';
import { schema } from 'endpoint';

export default async function init_app() {
  const app = express();

  app.use((req: Request, res: Response, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With'
    );
    
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.setHeader('Expires', '-1');
    res.setHeader('Cache-Control', 'no-cache');
    if (req.method === 'OPTIONS') {
      return res.status(200).send();
    }
    next();
  });

  app.use(
    '/api',
    graphqlHTTP(async (request: Request | any, response: Response, graphQLParams) => ({
      schema: await schema,
      context: {
      },
    }))
  );

  app.get('/playground', expressPlayground({ endpoint: '/api' }));

  app.set('port', config.get('port'));
  app.enable('trust proxy');
  app.disable('x-powered-by');
  return app;
}
