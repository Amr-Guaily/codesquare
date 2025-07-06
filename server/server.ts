import dotenv from 'dotenv';
import express from 'express';
import { initDb } from './datastore';
import { signInHandler, signUpHandler } from './handlers/authHandler';
import { createPostHandler, listPostHandler } from './handlers/postHandler';
import { authMiddleware } from './middleware/authMiddleware';
import { errHandler } from './middleware/errorMiddleware';
import { requestLoggerMiddleware } from './middleware/loggerMiddleware';

(async () => {
  await initDb();
  dotenv.config();

  const app = express();

  app.use(express.json());

  app.use(requestLoggerMiddleware);

  // Public endpoints
  app.get('/healthz', (req, res) => {
    res.send({ status: '✌️' });
  });

  app.post('/v1/signup', signUpHandler);
  app.post('/v1/signin', signInHandler);

  app.use(authMiddleware);

  // Protected endpoints
  app.get('/v1/posts', authMiddleware, listPostHandler);
  app.post('/v1/posts', authMiddleware, createPostHandler);

  app.use(errHandler);

  app.listen(process.env.PORT || 3000);
})();
