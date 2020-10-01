
export function pipelineRaw (state) {
  return JSON.stringify(state.pipeline, null, 4)
}

export function pipeline (state) {
  if (!state.pipeline) return []

  const result = [
  ]

  const keys = Object.keys(state.pipeline.items)
  keys.forEach(key => {
    const i = state.pipeline.items[key]

    let element
    if (i._type === 'flows') {
      element = {
        _key: state.flow._key,
        name: 'start',
        hint: state.flow.summary,
        status: 'start',
        next: []
      }
    } else {
      element = {
        _key: i._key,
        name: i.name,
        hint: i.summary,
        status: 'succeed',
        next: []
      }
    }

    i.next.forEach(n => {
      element.next.push({ index: keys.indexOf(n) })
    })

    result.push(element)
  })

  return result
}
