import { CommentDAO } from './dao/commentDao';
import { LikeDAO } from './dao/LikeDao';
import { PostsDAO } from './dao/PostsDao';
import { UserDAO } from './dao/UserDao';
import { InMemoryDatastore } from './memorydb';

export interface Datastore extends PostsDAO, LikeDAO, UserDAO, CommentDAO {}

export let db: Datastore;

export async function initDb() {
  db = new InMemoryDatastore();
}

