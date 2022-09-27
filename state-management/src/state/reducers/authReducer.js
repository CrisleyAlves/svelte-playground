
import { writable, get } from 'svelte/store';

const USER_INITIAL_STATE = {
  user: null,
  mainError: null,
  isLoading: false
};

export const userStore = writable(USER_INITIAL_STATE);

export const getStoreValues = () => get(userStore);

export const authDispatch = (action, payload) => {
  switch (action.TYPE) {
    case "auth_loading":
      return userStore.set({
        user: null,
        mainError: null,
        isLoading: true,
      });
    case "auth_error":
      return userStore.set({
        user: null,
        mainError: payload.message,
        isLoading: false,
      });
    case "auth_success":
      return userStore.set({
        user: payload.user,
        mainError: null,
        isLoading: false,
      });
    case "auth_logout":
      return userStore.set({
        user: null,
        mainError: null,
        isLoading: false,
      });
    default:
      throw new Error();
  }
}

export default authDispatch;
