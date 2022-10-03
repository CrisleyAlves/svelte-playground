import { writable, get } from 'svelte/store';
import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_LOGOUT,
  AUTH_SUCCESS
} from "../types"

const USER_INITIAL_STATE = {
  user: null,
  mainError: null,
  isLoading: false
};

export const userStore = writable(USER_INITIAL_STATE);

export const getStoreValues = () => get(userStore);

export const authReducer = (action, payload) => {
  switch (action.TYPE) {
    case AUTH_LOADING:
      return userStore.set({
        user: null,
        mainError: null,
        isLoading: true,
      });
    case AUTH_ERROR:
      return userStore.set({
        user: null,
        mainError: payload.message,
        isLoading: false,
      });
    case AUTH_SUCCESS:
      return userStore.set({
        user: payload.user,
        mainError: null,
        isLoading: false,
      });
    case AUTH_LOGOUT:
      return userStore.set({
        user: null,
        mainError: null,
        isLoading: false,
      });
    default:
      throw new Error();
  }
}

export default authReducer;
