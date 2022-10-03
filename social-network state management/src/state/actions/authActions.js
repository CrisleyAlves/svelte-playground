import dispatch from "../reducers/authReducer"
import customFetch from "../../utils/customFetch";
import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT, AUTH_SUCCESS } from "../types"
import { MOCKED_ENPOINT_SUCCESS } from "../../api/endpoints"

export const authenticate_loading = () => dispatch({ TYPE: AUTH_LOADING })

const authenticate_success = (user) => dispatch({ TYPE: AUTH_SUCCESS }, { user });

export const authenticate_error = (message = 'error message') =>
  dispatch({ TYPE: AUTH_ERROR }, { message })

export const authenticate = async () => {
  authenticate_loading()

  try {
    const response = await customFetch(MOCKED_ENPOINT_SUCCESS);
    const json = await response.json()
    const { user } = json;
    authenticate_success(user)
  } catch (error) {
    authenticate_error('Server error occurred')
  }
}

export const logout = () => dispatch({ TYPE: AUTH_LOGOUT });
