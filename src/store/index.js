import Vue from 'vue'
import Vuex from 'vuex'
import { getEncounters } from '../api'

Vue.use(Vuex)

const state = {
  encounters: []
}

const getters = {}

const actions = {
  getEncounters ({ commit }) {
    getEncounters()
    .then(response => commit('setEncounters', { encounters: response.data.data }))
  }
}

const mutations = {
  setEncounters (state, payload) {
    state.encounters = payload.encounters
  }
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug
})
