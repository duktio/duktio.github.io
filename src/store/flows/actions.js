import axios from 'axios'
import { toEndpoint } from 'src/store'

export function getFlows (context, nk) {
  return axios.get(`${toEndpoint(nk)}/flows`).then(value => {
    context.commit('setFlows', value.data)
  })
}

export function getFlow (context, flowKey) {
  return Promise.all([
    axios.get(toEndpoint(flowKey)).then(value => {
      context.commit('setFlow', value.data)
      return value.data
    }),
    axios.get(toEndpoint(flowKey, 'pipeline')).then(value => {
      context.commit('setPipeline', value.data)
      return value.data
    })
  ]).then((results) => {
    return results[0]
  })
}

export function createFlow (context, { nk, flow }) {
  return axios.post(`${toEndpoint(nk)}/flows`, flow)
}

export function removeFlow (context, fk) {
  return axios.delete(toEndpoint(fk)).then(value => {
    context.commit('removeFlow', fk)

    return value
  })
}

// == Tasks ==========================================================================================================

export function getTask (context, { ns, fk, tk }) {
  return Promise.all([
    axios.get(`v2/namespaces/${ns}/flows/${fk}/tasks/${tk}`).then(value => {
      context.commit('setTask', value.data)
    })
  ])
}

export function saveTask (context, { ns, fk, task }) {
  return axios.put(`v2/namespaces/${ns}/flows/${fk}/tasks/${task._key}`, task)
}

export function createTask (context, { flowKey, task }) {
  return axios.post(toEndpoint(flowKey, 'tasks'), task).then(value => {
    task = value.data

    return context.dispatch('getFlow', flowKey).then(() => {
      return task
    })
  })
}

export function removeTask (context, { ns, fk, tk }) {
  return Promise.all([
    axios.delete(`v2/namespaces/${ns}/flows/${fk}/tasks/${tk}`).then(value => {
      // -- reload the flow
      return context.dispatch('getFlow', { ns, fk })
    })
  ])
}

export function getInstances (context, fk) {
  return axios.get(toEndpoint(fk, 'instances')).then(value => {
    return context.commit('setInstances', value.data)
  })
}

export function getInstance (context, { ns, fk, ik }) {
  return Promise.all([
    axios.get(`v2/namespaces/${ns}/flows/${fk}/instances/${ik}`).then(value => {
      context.commit('flows/setInstance', value.data)
    })
  ])
}

export function schedule (context, { ns, fk }) {
  return axios.post(`v2/namespaces/${ns}/flows/${fk}/instances`, {}).then(value => {
    // -- reload the flow
    return context.commit('setInstance', value.data)
  })
}
