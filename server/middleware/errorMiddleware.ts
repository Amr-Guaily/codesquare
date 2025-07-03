import { ErrorRequestHandler } from 'express';

export const errHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error('Uncaught exception', err);
  res.status(500).send('Oops, an unexpected error occured, please try again');
};
