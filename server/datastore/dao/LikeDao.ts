import { Like } from '../../types';

export interface LikeDAO {
  createLike(like: Like): Promise<void>;
}
