import express, { ErrorRequestHandler, RequestHandler } from 'express';
import { initDb } from './datastore';
import { createPostHandler, listPostHandler } from './handlers/postHandler';
import { signInHandler, signUpHandler } from './handlers/userHandler';

(async () => {
  await initDb();

  const app = express();

  app.use(express.json());

  const requestLoggerMiddleware: RequestHandler = (req, res, next) => {
    console.log(req.method, req.path, '- body:', req.body);
    next();
  };

  app.use(requestLoggerMiddleware);

  app.get('/v1/posts', listPostHandler);
  app.post('/v1/posts', createPostHandler);

  app.post('/v1/signup', signUpHandler);
  app.post('/v1/signin', signInHandler);

  const errHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error('Uncaught exception', err);
    res.status(500).send('Oops, an unexpected error occured, please try again');
  };

  app.use(errHandler);

  app.listen(3000);
})();
