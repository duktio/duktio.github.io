import axios from 'axios'
import { toEndpoint } from 'src/store'

export function getNamespaces (context) {
  return axios.get('v2/namespaces').then(value => {
    context.commit('setNamespaces', value.data)
  })
}

export function getNamespace (context, nk) {
  return axios.get(toEndpoint(nk)).then(value => {
    context.commit('setNamespace', value.data)
    return value.data
  })
}

export function create (context, namespace) {
  return axios.post('v2/namespaces', namespace).then((result) => {
    context.dispatch('getNamespaces')
    return result
  })
}

export function remove (context, nk) {
  return axios.delete(toEndpoint(nk)).then(() => {
    return context.dispatch('getNamespaces')
  })
}
