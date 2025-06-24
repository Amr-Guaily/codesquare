import { User } from '../../types';

export interface UserDAO {
  createUser(user: User): void;
  getUserByEmail(email: string): User | undefined;
  getUserByUsername(userName: string): User | undefined;
}
