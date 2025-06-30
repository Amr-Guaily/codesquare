import { Datastore } from '..';
import { Comment, Like, Post, User } from '../../types';

class SqlDatastore implements Datastore {
  listPosts(): Promise<Post[]> {
    throw new Error('Method not implemented.');
  }
  createPost(post: Post): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getPost(id: string): Promise<Post | undefined> {
    throw new Error('Method not implemented.');
  }
  deletePost(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  createLike(like: Like): Promise<void> {
    throw new Error('Method not implemented.');
  }
  createUser(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getUserByEmail(email: string): Promise<User | undefined> {
    throw new Error('Method not implemented.');
  }
  getUserByUsername(userName: string): Promise<User | undefined> {
    throw new Error('Method not implemented.');
  }
  createComment(comment: Comment): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deleteComment(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  listComments(postId: string): Promise<Comment[]> {
    throw new Error('Method not implemented.');
  }
}
