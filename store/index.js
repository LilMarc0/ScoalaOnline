
export const state = () => ({
  brainPoints: 0,
  ownedCourses: []
})


export const getters = {
  brainPoints(state) {
    return state.brainPoints;
  },
  ownedCourses(state) {
    return state.ownedCourses;
  },
  ownsCourse(state, payload) {
    return state.ownedCourses.includes(payload);
  }
}

export const mutations = {
  incrementBrainPoints(state, payload) {
    state.brainPoints = payload;
    console.log(state.brainPoints);
  },
  setBrainPoints(state, payload) {
    state.brainPoints = payload;
  },
  setOwnedCourses(state, payload) {
    state.ownedCourses = payload;
  },
  pushOwnedCourse(state, payload) {
    state.ownedCourses.push(payload.curs);
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
    commit('setBrainPoints', res.data);
  },

  async syncOwnedCourses({commit}, payload) {
    const res = await this.$axios.get(`/user_has_courses`);
    commit('setOwnedCourses', res.data);
  },

  async pushCourse({commit}, payload) {
    console.log(payload.curs, payload.idUser);
    const res = await this.$axios.post(`/user_has_courses/${payload.curs.id}`);
    commit('pushOwnedCourse', payload);
  }

  // updateUserBrainPoints({commit}, payload) {
  //   this.$axios.put(`/user/credit/${payload.id}/${payload.newCredit}`)
  // }
}
