export const state = () => ({
  lg: true,
})

export const mutations = {
  setLg(state, value) {
    state.lg = value
  },
}

export const getters = {
  getLg(state) {
    return state.lg
  },
}
