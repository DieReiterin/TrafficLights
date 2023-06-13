import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    dimLights: false,
  }),
  getters: {
  },
  mutations: {
    toggleDimLights(state) {
      state.dimLights === false ? state.dimLights = true : state.dimLights = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
