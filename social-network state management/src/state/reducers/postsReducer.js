import { writable, get } from 'svelte/store';
import {
  POSTS_ERROR,
  POSTS_LOADING,
  POSTS_RESET,
  POSTS_SUCCESS
} from "../types"


export const POSTS_INITIAL_STATE = {
  posts: [],
  mainError: null,
  isLoading: false
};

export const postsStore = writable(POSTS_INITIAL_STATE);

export const getStoreValues = () => get(postsStore);

export const postsReducer = (action, payload) => {
  const currentValues = getStoreValues()
  switch (action.TYPE) {
    case POSTS_LOADING:
      return postsStore.set({
        posts: currentValues.posts,
        mainError: null,
        isLoading: true,
      });
    case POSTS_ERROR:
      return postsStore.set({
        posts: currentValues.posts,
        mainError: payload.message,
        isLoading: false,
      });
    case POSTS_SUCCESS:
      return postsStore.set({
        posts: payload.posts,
        mainError: null,
        isLoading: false,
      });
    case POSTS_RESET:
      return postsStore.set(POSTS_INITIAL_STATE);
    default:
      throw new Error();
  }
}

export default postsReducer;
