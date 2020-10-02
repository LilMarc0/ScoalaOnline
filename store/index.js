
export const state = () => ({
  brainPoints: 0
})


export const getters = {
  brainPoints(state) {
    return state.brainPoints;
  }
}

export const mutations = {
  incrementBrainPoints(state, payload) {
    state.brainPoints = payload;
    console.log(state.brainPoints);
  },
  setBrainPoints(state, payload) {
    state.brainPoints = payload;
  }
}

export const actions = {
  async incrementBrainPoints({commit, state}, payload){
    const newVal = state.brainPoints + Number(payload.incr);
    await this.$axios.put(`/user/credit/${payload.id}/${newVal}`)
    commit('incrementBrainPoints', newVal)

  },
  async syncBrainPoints({commit}, payload) {
    const res = await this.$axios.get(`/user/credit/${payload}`);
    commit('setBrainPoints', res.data[0].credit);
  }

  // updateUserBrainPoints({commit}, payload) {
  //   this.$axios.put(`/user/credit/${payload.id}/${payload.newCredit}`)
  // }
}