import { CommentDAO } from './dao/commentDao';
import { LikeDAO } from './dao/LikeDao';
import { PostsDAO } from './dao/PostsDao';
import { UserDAO } from './dao/UserDao';

export interface Datastore extends PostsDAO, LikeDAO, UserDAO, CommentDAO {}
