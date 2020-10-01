export function setNamespaces (state, namespaces) {
  state.namespaces = namespaces
}

export function setNamespace (state, namespace) {
  state.namespace = namespace
}

export function resetNamespace (state) {
  sessionStorage.removeItem('dukt.namespace')
  state.namespace = null
}
