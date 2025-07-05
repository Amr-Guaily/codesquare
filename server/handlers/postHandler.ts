import crypto from 'crypto';
import { CreatePostRequest, CreatePostResponse, ListPostRequest, ListPostResponse } from '../api';
import { db } from '../datastore';
import { ExpressHandler, Post } from '../types';

export const listPostHandler: ExpressHandler<ListPostRequest, ListPostResponse> = async (
  req,
  res
) => {
  // TODO: handle filters and pagination
  res.send({ posts: await db.listPosts() });
};

export const createPostHandler: ExpressHandler<CreatePostRequest, CreatePostResponse> = async (
  req,
  res
) => {
  if (!req.body.title || !req.body.url) {
    res.sendStatus(400);
    return;
  }

  // TODO: validate user exists
  // TODO: validate url is new, otherwise add +1 to existing post
  const post: Post = {
    id: crypto.randomUUID(),
    title: req.body.title,
    url: req.body.url,
    postedAt: Date.now(),
    userId: res.locals.userId,
  };

  await db.createPost(post);
  res.sendStatus(200);
};
