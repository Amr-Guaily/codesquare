import { Comment } from '../../types';

export interface CommentDAO {
  createComment(comment: Comment): void;
  deleteComment(id: string): void;
  listComments(postId: string): Comment[];
}
