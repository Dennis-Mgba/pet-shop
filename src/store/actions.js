export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload) // the first parameter is what we are going to use in the mutation file while payload is a variable set.
  }
}
