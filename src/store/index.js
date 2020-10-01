import Vue from 'vue'
import Vuex from 'vuex'

import agents from './agents'
import auth from './auth'
import flows from './flows'
import namespaces from './namespaces'
import navigation from './navigation'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      agents,
      auth,
      flows,
      namespaces,
      navigation
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}

export function toEndpoint (key, col) {
  const parts = key.split('*')
  if (parts.length !== 2) {
    console.error(`invalid key ${key}`)
    return
  }

  let result
  if (parts[0] === '_system') {
    result = `v2/${parts[1].replace(/:/g, '/')}`
  } else {
    result = `v2/namespaces/${parts[0]}/${parts[1].replace(/:/g, '/')}`
  }

  if (col) {
    result += `/${col}`
  }

  return result
}
