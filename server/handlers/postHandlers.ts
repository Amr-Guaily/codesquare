import crypto from 'crypto';
import { RequestHandler } from 'express';
import { db } from '../datastore';
import { Post } from '../types';

export type ExpressHandler<Req, Res> = RequestHandler<
  string,
  Partial<Res>,
  Partial<Req>,
  any
>;

export const listPostHandler: ExpressHandler<{}, {}> = (req, res) => {
  // TODO: handle filters and pagination
  res.send({ posts: db.listPosts() });
};

type CreatePostRequest = Pick<Post, 'title' | 'url' | 'userId'>;
interface CreatePostResponse {}

export const createPostHandler: ExpressHandler<
  CreatePostRequest,
  CreatePostResponse
> = (req, res) => {
  if (!req.body.title || !req.body.url || !req.body.userId) {
    res.sendStatus(400);
    return;
  }

  const post: Post = {
    id: crypto.randomUUID(),
    title: req.body.title,
    url: req.body.url,
    userId: req.body.userId,
    postedAt: Date.now(),
  };

  db.createPost(post);
  res.sendStatus(200);
};
