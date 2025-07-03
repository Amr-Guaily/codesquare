import express from 'express';
import { initDb } from './datastore';
import { signInHandler, signUpHandler } from './handlers/authHandler';
import { createPostHandler, listPostHandler } from './handlers/postHandler';
import { errHandler } from './middleware/errorMiddleware';
import { requestLoggerMiddleware } from './middleware/loggerMiddleware';

(async () => {
  await initDb();

  const app = express();

  app.use(express.json());

  app.use(requestLoggerMiddleware);

  app.get('/v1/posts', listPostHandler);
  app.post('/v1/posts', createPostHandler);

  app.post('/v1/signup', signUpHandler);
  app.post('/v1/signin', signInHandler);

  app.use(errHandler);

  app.listen(3000);
})();
