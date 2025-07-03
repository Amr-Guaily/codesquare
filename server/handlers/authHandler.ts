import crypto from 'crypto';
import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from '../api';
import { db } from '../datastore';
import { ExpressHandler, User } from '../types';

export const signUpHandler: ExpressHandler<SignUpRequest, SignUpResponse> = async (req, res) => {
  const { firstName, lastName, userName, email, password } = req.body;

  if (!firstName || !lastName || !userName || !email || !password) {
    res.status(400).send('All fields required');
    return;
  }

  const existing = (await db.getUserByEmail(email)) || (await db.getUserByUsername(userName));

  if (existing) {
    res.status(403).send('User already exist');
    return;
  }

  const user: User = {
    id: crypto.randomUUID(),
    firstName,
    lastName,
    userName,
    password,
    email,
  };

  await db.createUser(user);

  res.sendStatus(200);
};

export const signInHandler: ExpressHandler<SignInRequest, SignInResponse> = async (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    res.sendStatus(400);
    return;
  }

  const existing = (await db.getUserByEmail(login)) || (await db.getUserByUsername(login));

  if (!existing || existing.password !== password) {
    res.sendStatus(403);
    return;
  }

  res.status(200).send({
    email: existing.email,
    userName: existing.userName,
    firstName: existing.firstName,
    lastName: existing.lastName,
    id: existing.id,
  });
};
