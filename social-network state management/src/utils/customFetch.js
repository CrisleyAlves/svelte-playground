import { getToken } from "./localStorageUtils"

export default function (endpoint, body = {}) {
  const token = getToken()
  return fetch(endpoint, { headers: `Bearer ${token}`, body })
}