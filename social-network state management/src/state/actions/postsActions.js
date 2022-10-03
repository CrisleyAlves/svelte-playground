import dispatch from "../reducers/postsReducer"
import customFetch from "../../utils/customFetch";
import { POSTS_ERROR, POSTS_LOADING, POSTS_RESET, POSTS_SUCCESS } from "../types"
import { MOCKED_ENPOINT_SUCCESS } from "../../api/endpoints"

export const postsLoading = () => dispatch({ TYPE: POSTS_LOADING })

const postsSuccess = (posts) => dispatch({ TYPE: POSTS_SUCCESS }, { posts });

export const postsError = (message = 'error message') =>
  dispatch({ TYPE: POSTS_ERROR }, { message })

export const getPosts = async () => {
  postsLoading()

  try {
    const response = await customFetch(MOCKED_ENPOINT_SUCCESS);
    const json = await response.json()
    const { posts } = json;
    postsSuccess(posts)
  } catch (error) {
    postsError('Server error occurred')
  }
}

export const postsReset = () => dispatch({ TYPE: POSTS_RESET });
