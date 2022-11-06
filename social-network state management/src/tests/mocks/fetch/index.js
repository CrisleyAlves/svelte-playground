// @TODO
// Move to mocks folder
export const mockedAuthenticationSuccess = {
  user: {
    firstName: 'Crisley',
    lastName: 'Moura',
    email: 'dummy@gmail.com'
  }
}

export const mockAuthenticationSuccess = global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(mockedAuthenticationSuccess)
}));
