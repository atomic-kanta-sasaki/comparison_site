import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null, // 初期状態ではtokenはnull
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token)
    },
  },
  getters: {
    token: state => state.token
  }
})
