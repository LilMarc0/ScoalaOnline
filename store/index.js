
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
  }
}

export const actions = {
  incrementBrainPoints({commit, state}, payload){
    const newVal = state.brainPoints + Number(payload.incr);
    this.$axios.put(`/user/credit/${payload.id}/${newVal}`).then((res)=>[
    ])
    commit('incrementBrainPoints', newVal)
  },
  // updateUserBrainPoints({commit}, payload) {
  //   this.$axios.put(`/user/credit/${payload.id}/${payload.newCredit}`)
  // }
}