import type { Record } from 'pocketbase';
import { POCKET } from '../../lib/databases//PocketBase.js';

export interface User {
  username: string;
}

function addInStorage(user: Record) {
  window.localStorage.setItem('uid', user.id);
  window.localStorage.setItem('username', user.username);
}
export async function loginWithPassword(email: string, pass: string) {
  const resp = await POCKET.collection('users').authWithPassword(email, pass);
  addInStorage(resp.record);
}
