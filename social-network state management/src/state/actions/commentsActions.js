import dispatch from "../reducers/commentsReducer"
import customFetch from "../../utils/customFetch";
import {
  ADD_COMMENT_ERROR,
  ADD_COMMENT_ERROR,
  ADD_COMMENT_LOADING,
  ADD_COMMENT_SUCCESS
} from "../types"
import { MOCKED_ENPOINT_SUCCESS } from "../../api/endpoints"

export const addCommentLoading = () => dispatch({ TYPE: ADD_COMMENT_LOADING })

const addCommentSuccess = (user) => dispatch({ TYPE: ADD_COMMENT_SUCCESS }, { user });

export const addCommentError = (message = 'error message') =>
  dispatch({ TYPE: ADD_COMMENT_ERROR }, { message })

export const addComment = async ({ postId, comment }) => {
  addCommentLoading()

  const body = { postId, comment }

  try {
    await customFetch(MOCKED_ENPOINT_SUCCESS, body);
    addCommentSuccess()
  } catch (error) {
    addCommentError('Server error occurred')
  }
}
