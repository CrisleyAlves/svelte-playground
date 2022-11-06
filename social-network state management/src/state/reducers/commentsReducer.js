import { writable, get } from 'svelte/store';
import {
  ADD_COMMENT_ERROR,
  ADD_COMMENT_LOADING,
  ADD_COMMENT_RESET,
  ADD_COMMENT_SUCCESS
} from "../types"

export const COMMENTS_INITIAL_STATE = {
  mainError: null,
  isLoading: false
};

export const commentStore = writable(COMMENTS_INITIAL_STATE);

export const getStoreValues = () => get(commentStore);

export const commentsReducer = (action, payload) => {
  switch (action.TYPE) {
    case ADD_COMMENT_LOADING:
      return commentStore.set({
        mainError: null,
        isLoading: true,
      });
    case ADD_COMMENT_ERROR:
      return commentStore.set({
        mainError: payload.message,
        isLoading: false,
      });
    case ADD_COMMENT_SUCCESS:
      return commentStore.set({
        mainError: null,
        isLoading: false,
      });
    case ADD_COMMENT_RESET:
      return commentStore.set(COMMENTS_INITIAL_STATE);
    default:
      throw new Error();
  }
}

export default commentsReducer;
