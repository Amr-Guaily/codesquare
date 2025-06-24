import { Like } from '../../types';

export interface LikeDAO {
  createLike(like: Like): void;
}
