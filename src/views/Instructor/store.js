import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, userData) {
      state.user = userData;
    },
  },
  actions: {
    setUser({ commit }, userData) {
      commit('setUser', userData);
    },
  },
  getters: {
    getUser: (state) => state.user,
  },
});
