import dispatch from "../reducers/authReducer"

export const authenticate_loading = () => dispatch({ TYPE: 'auth_loading' })

const authenticate_success = (user) => dispatch({ TYPE: 'auth_success' }, { user });

export const authenticate_error = (message = 'error message') =>
  dispatch({ TYPE: 'auth_error' }, { message })

export const authenticate = async () => {
  authenticate_loading()

  try {
    const response = await fetch('https://run.mocky.io/v3/1b9e9b72-9196-450d-be10-075e8e4068bd');
    const json = await response.json()
    const { user } = json;
    authenticate_success(user)
  } catch (error) {
    authenticate_error('Server error occurred')
  }
}

export const logout = () => dispatch({ TYPE: 'auth_logout' });
