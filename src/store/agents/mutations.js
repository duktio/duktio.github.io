import Vue from 'vue'

export function setAgents (state, agents) {
  state.agents = agents
}

export function removeAgent (state, pubKey) {
  let fnd = -1
  for (let idx = 0; idx < state.agents.items.length; idx++) {
    if (state.agents.items[idx].public_key === pubKey) {
      fnd = idx
      break
    }
  }

  if (fnd !== -1) {
    Vue.delete(state.agents.items, fnd)
    state.agents.total = state.agents.total - 1
  }
}
