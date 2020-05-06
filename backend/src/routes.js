import Router from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import Brute from 'express-brute';
import BruteRedis from 'express-brute-redis';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import BookController from './app/controllers/BookController';

import QuotesController from './app/controllers/QuotesController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

const bruteStore = new BruteRedis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

const bruteForce = new Brute(bruteStore);

routes.post('/users', UserController.store);
routes.post('/sessions', bruteForce.prevent, SessionController.store);

routes.use(authMiddleware); //global middleware valid only for routes below

routes.put('/users', UserController.update);
routes.get('/books', BookController.index);

routes.get('/books/:id', BookController.show);

routes.delete('/books/:id', BookController.delete);
routes.post('/books', BookController.store);
routes.put('/books/:id', BookController.update);

routes.post('/files/books/:id', upload.single('file'), QuotesController.store);
routes.delete('/books/quotes/:id', QuotesController.deleteOne);
routes.delete('/books/:id/quotes', QuotesController.deleteAll);

export default routes;
