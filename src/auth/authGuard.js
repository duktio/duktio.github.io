import { getInstance } from './index'
import axios from 'axios'

export const authGuard = (to, from, next) => {
  const authService = getInstance()

  const fn = () => {
    console.log('auth')
    // If the user is authenticated, continue with the route
    if (authService.isAuthenticated) {
      authService.getTokenSilently().then(t => {
        console.log(`API token: ${t}`)
        axios.defaults.headers.Authorization = 'Bearer ' + t
      })

      return next()
    }

    // Otherwise, log in
    authService.loginWithRedirect({ redirect_uri: `${window.location.origin}/#${to.fullPath}` })
  }

  // If loading has already finished, check our auth state using `fn()`
  if (!authService.loading) {
    return fn()
  }

  // Watch for the loading property to change before we check isAuthenticated
  authService.$watch('loading', loading => {
    if (loading === false) {
      return fn()
    }
  })
}
