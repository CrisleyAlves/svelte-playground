import { CREATE_ACCOUNT_ENDPOINT } from './endpoints';

// @TODO
// Not sure if this is the right place/approach to make this request, but it's working

export const createAccount = async ({ name, email, password }) => {
  const response = await fetch(CREATE_ACCOUNT_ENDPOINT, { method: 'POST', body: { name, email, password } });
  const json = await response.json();
  return json;
};
