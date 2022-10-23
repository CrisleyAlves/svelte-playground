import authReducer, { getStoreValues, USER_INITIAL_STATE } from './authReducer';

import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_LOGOUT,
  AUTH_SUCCESS
} from "../types"

describe('Auth Reducer', () => {
  // Just to reset state values
  beforeEach(() => authReducer({ TYPE: AUTH_LOGOUT }))

  test('should dispatch auth loading action and update isLoading flag', () => {
    authReducer({ TYPE: AUTH_LOADING });
    const storeValues = getStoreValues()
    expect(storeValues.isLoading).toBeTruthy()
  })

  test('should dispatch auth error action and update main error', () => {
    const mainError = 'dummy error message';

    authReducer({ TYPE: AUTH_ERROR }, { message: mainError });
    const storeValues = getStoreValues()
    expect(storeValues.mainError).toBe(mainError)
  })

  test('should dispatch auth success action and update user information', () => {
    const user = {
      firstName: 'Crisley',
      email: 'dummy@gmail.com'
    };

    authReducer({ TYPE: AUTH_SUCCESS }, { user });
    const storeValues = getStoreValues()
    expect(storeValues.user).toMatchObject(user)
  })

  test('should dispatch auth logout action and reset auth state', () => {
    authReducer({ TYPE: AUTH_LOGOUT });
    const storeValues = getStoreValues()
    expect(storeValues).toMatchObject(USER_INITIAL_STATE)
  })
})