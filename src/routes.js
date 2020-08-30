import 'dotenv/config';

import { Router } from 'express';
import swagerDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import sessionRouter from './app/models/Users/routes/session.routes';
import usersRouter from './app/models/Users/routes/users.routes';

const routes = new Router();

const options = {
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: 'My Design Pattern ',
      description:
        'Created to assist my team and developers who want to follow a pattern using express.',
      contact: {
        email: 'contato@sierradeltainformatica.com.br',
        name: 'Everton Oliveira',
      },
      servers: ['http://localhost:3333'],
    },
    securityDefinitions: {
      JWT: {
        description: 'Token',
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
  },
  // ['.routes/*.js']
  apis: ['**/*routes.js'],
};

const swaggerDocs = swagerDoc(options);
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

routes.use('/login', sessionRouter);
routes.use('/users', usersRouter);

export default routes;
