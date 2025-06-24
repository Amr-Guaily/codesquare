export interface CommentDAO {
  createComment(comment: Comment): void;
  deleteComment(id: string): void;
  listComments(userId: string): Comment[];
}
