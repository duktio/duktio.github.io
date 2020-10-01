import axios from 'axios'
import { toEndpoint } from 'src/store'

export function getAgents (context, { nk }) {
  return axios.get(`${toEndpoint(nk)}/agents`).then(value => {
    context.commit('setAgents', value.data)
  })
}

export function create (context, { nk }) {
  return axios.post(`${toEndpoint(nk)}/agents`, {})
}

export function remove (context, { nk, ak }) {
  return axios.delete(`${toEndpoint(nk)}/agents/${ak}`).then((value) => {
    context.commit('removeAgent', ak)
    return value
  })
}
