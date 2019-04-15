import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import logger from './logger.js';
import cors from 'cors';
import compression from 'compression';

module.exports = app => {
  app.set('httpPort', 3000);
  app.set('httpsPort', 3363);
  app.set('json spaces', 4);
  app.use(morgan('common', {
    stream: {
      write: (message) => {
        logger.info(message);
      }
    }
  }));
  app.use(cors());
  app.use(helmet());
  app.use(compression());
  app.use(bodyParser.json());
  app.use(app.auth.initialize());
  app.use((req, res, next) => {
    delete req.body.id;
    next();
  });
  app.use(express.static('public'));
};
