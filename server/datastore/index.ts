import { CommentDAO } from './dao/commentDao';
import { LikeDAO } from './dao/LikeDao';
import { PostsDAO } from './dao/PostsDao';
import { UserDAO } from './dao/UserDao';
import { SqlDatastore } from './sql';

export interface Datastore extends PostsDAO, LikeDAO, UserDAO, CommentDAO {}

export let db: Datastore; // Singleton - holds the instance returned by `SqlDatastore().connect()`.

export async function initDb() {
  db = await new SqlDatastore().connect();
}
