import { Database, open as sqliteOpen } from 'sqlite';
import sqlite3 from 'sqlite3';

import path from 'path';
import { Datastore } from '..';
import { Comment, Like, Post, User } from '../../types';

export class SqlDatastore implements Datastore {
  // Is available to all class methods after connect() is called
  private db!: Database;

  public async connect() {
    // open the database
    this.db = await sqliteOpen({
      filename: path.join(__dirname, 'codersquare.sqlite'),
      driver: sqlite3.Database,
    });

    this.db.run('PRAGMA foreign_keys = ON;');

    // run migrations
    await this.db.migrate({
      migrationsPath: path.join(__dirname, 'migrations'),
    });

    return this;
  }

  listPosts(): Promise<Post[]> {
    return this.db.all<Post[]>('SELECT * FROM posts');
  }

  async createPost(post: Post): Promise<void> {
    await this.db.run(
      'INSERT INTO posts (id, title, url, postedAt, userId) VALUES (?,?,?,?,?)',
      post.id,
      post.title,
      post.url,
      post.postedAt,
      post.userId
    );
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

  async createUser(user: User): Promise<void> {
    await this.db.run(
      'INSERT INTO users (id, firstName, lastName, userName, email, password) VALUES (?,?,?,?,?,?)',
      user.id,
      user.firstName,
      user.lastName,
      user.userName,
      user.email,
      user.password
    );
  }

  getUserByEmail(email: string): Promise<User | undefined> {
    return this.db.get<User>(`SELECT * FROM users WHERE email = ?`, email);
  }

  getUserByUsername(userName: string): Promise<User | undefined> {
    return this.db.get<User>(`SELECT * FROM users WHERE username = ?`, userName);
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
