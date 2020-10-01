import Vue from 'vue'
import router from '../router'

// Import the Auth0 configuration
import { domain, clientId, audience } from '../../auth_config.json'

// Import the plugin here
import { Auth0Plugin } from '../auth'

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    // -- store the auth information
    this.$store.dispatch('namespaces/getNamespaces')

    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})
