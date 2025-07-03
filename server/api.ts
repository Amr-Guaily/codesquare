import { Post, User } from './types';

// Post APIs
export interface ListPostRequest {}
export interface ListPostResponse {
  posts: Post[];
}

export type CreatePostRequest = Pick<Post, 'title' | 'url' | 'userId'>;
export interface CreatePostResponse {}

// commments APIs

// user APIs
export type SignUpRequest = Pick<
  User,
  'firstName' | 'lastName' | 'password' | 'email' | 'userName'
>;
export interface SignUpResponse {}

export interface SignInRequest {
  login: string; // username or email
  password: string;
}
export type SignInResponse = Pick<User, 'email' | 'firstName' | 'lastName' | 'userName' | 'id'>;
