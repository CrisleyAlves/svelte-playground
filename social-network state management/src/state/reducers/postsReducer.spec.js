import postsReducer, { getStoreValues, POSTS_INITIAL_STATE } from './postsReducer';

import {
  POSTS_ERROR,
  POSTS_LOADING,
  POSTS_RESET,
  POSTS_SUCCESS
} from "../types"

const mockedPostsSuccess = [{
  id: 1,
  title: 'dummy title',
  description: 'dummy description'
}]

describe('Posts Reducer', () => {
  beforeEach(() => postsReducer({ TYPE: POSTS_RESET }))

  test('should dispatch posts loading action and update isLoading flag', async () => {
    postsReducer({ TYPE: POSTS_SUCCESS }, { posts: mockedPostsSuccess });
    postsReducer({ TYPE: POSTS_LOADING });
    const storeValues = getStoreValues()
    expect(storeValues.isLoading).toBeTruthy()
    expect(storeValues.posts.length).toBe(1)
  })

  test('should dispatch posts error action and update main error', async () => {
    postsReducer({ TYPE: POSTS_ERROR }, { message: 'Error message' });
    const storeValues = getStoreValues()
    expect(storeValues.isLoading).toBeFalsy()
    expect(storeValues.mainError).toBe('Error message')
  })

  test('should dispatch post success action and populate posts', async () => {
    postsReducer({ TYPE: POSTS_SUCCESS }, { posts: mockedPostsSuccess });
    const storeValues = getStoreValues()
    expect(storeValues.isLoading).toBeFalsy()
    expect(storeValues.posts.length).toBe(1)
  })

  test('should dispatch posts reset action and reset posts state', async () => {
    postsReducer({ TYPE: POSTS_RESET });
    const storeValues = getStoreValues()
    expect(storeValues).toMatchObject(POSTS_INITIAL_STATE)
  })
});
