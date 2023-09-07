import type { Record } from 'pocketbase';
import { POCKET } from '../../lib/databases//PocketBase.js';

export interface User {
  username: string;
}

function addInStorage(user: Record) {
  window.localStorage.setItem('uid', user.id);
  window.localStorage.setItem('username', user.username);
}
export async function loginWithPassword(email: string, password: string) {
  const resp = await POCKET.collection('users').authWithPassword(
    email,
    password
  );
  addInStorage(resp.record);
}

export async function registerWithPassowrd(
  email: string,
  password: string,
  username: string
) {
  const record = await POCKET.collection('users').create({
    username,
    email: email,
    password: password,
    passwordConfirm: password,
    emailVisibility: true,
  });
  addInStorage(record);
  // (optional) send an email verification request
  await POCKET.collection('users').requestVerification('test@example.com');
}

export function logout() {
  window.localStorage.removeItem('uid');
  POCKET.authStore.clear();
}
export function isLoggedIn() {
  return window.localStorage.getItem('uid');
}
