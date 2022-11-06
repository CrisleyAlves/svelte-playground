import * as authActions from './authActions'
import { getStoreValues, USER_INITIAL_STATE } from '../reducers/authReducer';
import {
  mockAuthenticationSuccess,
  mockedAuthenticationSuccess
} from '../../tests/mocks/fetch';

describe('Auth Actions', () => {
  test('should authenticate user successfully and set user on storage', async () => {
    mockAuthenticationSuccess()
    await authActions.authenticate()
    const storeValues = getStoreValues()
    expect(storeValues).toMatchObject(mockedAuthenticationSuccess)
  })

  test('should logout user and reset user on storage', async () => {
    mockAuthenticationSuccess()
    await authActions.authenticate()
    const storeValues = getStoreValues()
    expect(storeValues).toMatchObject(mockedAuthenticationSuccess)

    authActions.logout()
    const updatedStoreValues = getStoreValues()
    expect(updatedStoreValues).toMatchObject(USER_INITIAL_STATE)
  })

  test('should set main error on user storage', async () => {
    authActions.authenticate_error('invalid credentials')
    const storeValues = getStoreValues()
    expect(storeValues.mainError).toBe('invalid credentials')
  })
})