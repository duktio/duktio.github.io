import axios from 'axios'

export function getMe (context) {
  axios.get('v2/me').then(value => {
    context.commit('setMe', value.data)
  })
}

export function getToken (context) {
  const a = context.getters.auth
  if (a) {
    return a.getTokenSilently().then(t => {
      context.commit('setToken', t)
    })
  }
  return new Promise(null)
}
