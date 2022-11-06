import commentsReducer, { COMMENTS_INITIAL_STATE, getStoreValues } from './commentsReducer';

import {
  ADD_COMMENT_ERROR,
  ADD_COMMENT_LOADING,
  ADD_COMMENT_RESET,
  ADD_COMMENT_SUCCESS
} from "../types"

describe('Comments Reducer', () => {
  test('should dispatch add comment and update isLoading flag', () => {
    commentsReducer({ TYPE: ADD_COMMENT_LOADING });
    const storeValues = getStoreValues()
    expect(storeValues.isLoading).toBeTruthy()
  })

  test('should dispatch add comment error and update main error', () => {
    const mainError = 'dummy error message';

    commentsReducer({ TYPE: ADD_COMMENT_ERROR }, { message: mainError });
    const storeValues = getStoreValues()
    expect(storeValues.mainError).toBe(mainError)
  })

  test('should dispatch add comment success action and update user information', () => {
    commentsReducer({ TYPE: ADD_COMMENT_SUCCESS });
    const storeValues = getStoreValues()
    expect(storeValues).toMatchObject(COMMENTS_INITIAL_STATE)
  })

  test('should dispatch comments reset and reset comments state', () => {
    commentsReducer({ TYPE: ADD_COMMENT_RESET });
    const storeValues = getStoreValues()
    expect(storeValues).toMatchObject(COMMENTS_INITIAL_STATE)
  })
})