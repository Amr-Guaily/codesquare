import express, { ErrorRequestHandler, RequestHandler } from 'express';
import { createPostHandler, listPostHandler } from './handlers/postHandlers';
const app = express();

app.use(express.json());

const requestLoggerMiddleware: RequestHandler = (req, res, next) => {
  console.log(req.method, req.path, '- body:', req.body);
  next();
};

app.use(requestLoggerMiddleware);

app.get('/posts', listPostHandler);
app.post('/posts', createPostHandler);

const errHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error('Uncaught exception', err);
  res.status(500).send('Oops, an unexpected error occured, please try again');
};

app.use(errHandler);

app.listen(3000);
