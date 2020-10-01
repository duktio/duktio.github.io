import Vue from 'vue'

export function setFlows (state, flows) {
  state.flows = flows
}

export function setPipeline (state, pipeline) {
  state.pipeline = pipeline
}

export function setFlow (state, flow) {
  state.flow = flow
  state.task = null
}

export function removeFlow (state, fk) {
  let idx = 0
  for (; idx < state.flows.length; idx++) {
    if (state.flows[idx]._key === fk) { break }
  }

  Vue.delete(state.flows, idx)
}

export function setTask (state, task) {
  state.task = task
}

export function setInstances (state, instances) {
  state.instances = instances
}

export function setInstance (state, instance) {
  state.instance = instance
}
