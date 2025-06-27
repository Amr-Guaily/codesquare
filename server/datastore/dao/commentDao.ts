import { Comment } from '../../types';

export interface CommentDAO {
  createComment(comment: Comment): Promise<void>;
  deleteComment(id: string): Promise<void>;
  listComments(postId: string): Promise<Comment[]>;
}
