import { Post } from '../../types';

export interface PostsDAO {
  listPosts(): Post[];
  createPost(post: Post): void;
  getPost(id: string): Post | undefined;
  deletePost(id: string): void;
}
