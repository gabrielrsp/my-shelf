import 'dotenv/config';

import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import redis from 'redis';
import helmet from 'helmet';
import RateLimit from 'express-rate-limit';
import RateLimitRedis from 'rate-limit-redis';

import './database';

class App {
  constructor(){
    this.server = express();
    this.middlewares();
    this.routes();
  }


  middlewares() {
    this.server.use(cors());
    this.server.use(helmet());
    this.server.use(express.json());
    this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads' )));


    if(process.env.NODE_ENV !== 'development') {
      this.server.use(
        new RateLimit({
        store: new RateLimitRedis({
          client: redis.createClient({
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
          }),
        }),
        windowMs: 1000 * 60 * 15,
        max: 100,
      }));
    }

  }

  routes(){
    this.server.use(routes)
  }
}

export default new App().server;
