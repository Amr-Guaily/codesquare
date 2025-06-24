import { RequestHandler } from 'express';
import { db } from '../datastore';

export const listPostHandler: RequestHandler = (req, res) => {
  res.send({ posts: db.listPosts() });
};

export const createPostHandler: RequestHandler = (req, res) => {
  const post = req.body;

  db.createPost(post);
  res.sendStatus(200);
};
