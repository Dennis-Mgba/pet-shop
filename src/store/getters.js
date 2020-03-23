export default {
// count number of cats and dog
  animalsCount: (state) => {
    return state.cats.length + state.cats.length
  },
  getAllCats: (state) => {
    return state.pets.filter((pet) => { // because pets has both cats and dogs in it we are going to filter out only the cats from it.
      return pet.species === 'cat'
    })
  },
  getAllDogs: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === 'dog'
    })
  }
}
