import { User } from '../../types';

export interface UserDAO {
  createUser(user: User): Promise<void>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserByUsername(userName: string): Promise<User | undefined>;
}
