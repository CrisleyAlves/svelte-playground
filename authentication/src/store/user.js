import { browser } from '$app/env';
import { writable, get } from 'svelte/store';

const USER_STORAGE_PREFIX = 'user';

const USER_INITIAL_STATE = {
  id: null,
  name: null,
  isAuthenticated: false
};

const userStore = writable(USER_INITIAL_STATE);

export const getStoreValues = () => get(userStore);

export const user = userStore;

export const setUser =  (id, name, email) => {
  const user = { name, id, email, isAuthenticated: true }
  userStore.set(user);
  localStorage.setItem(USER_STORAGE_PREFIX, JSON.stringify(user))
}

export const removeUser =  () => {
  userStore.set(USER_INITIAL_STATE);
  localStorage.removeItem(USER_STORAGE_PREFIX)
}

// This file loads twice, one in the server and one in the client
// Needs to check browser to have access to the localstorage
if(browser) {
  const userStorage = localStorage.getItem(USER_STORAGE_PREFIX);

  if(userStorage) {
    const user = JSON.parse(userStorage);
    setUser(user.id, user.name, user.email)
  }
}