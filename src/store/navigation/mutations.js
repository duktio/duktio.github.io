export function push (state, entity) {
  state.stack.push(entity)
}

export function pop (state) {
  state.stack.pop()
}

export function set (state, { types, items }) {
  const stack = []
  const url = ['me']

  for (let i = 0; i < types.length; i++) {
    url.push(types[i])
    url.push(items[i]._key)
    stack.push({
      _key: items[i]._key,
      type: types[i],
      name: items[i].name,
      summary: items[i].summary,
      url: '/' + url.join('/')
    })
  }

  state.stack = stack
}
