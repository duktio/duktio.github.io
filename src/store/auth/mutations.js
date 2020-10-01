import axios from 'axios'

export function setMe (state, account) {
  state.me = account
}

export function setToken (state, token) {
  axios.defaults.headers.Authorization = 'Bearer ' + token
}
