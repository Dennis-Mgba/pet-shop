import cats from '../data/cats'
import dogs from '../data/dogs'

export default { // this object is the default state of my application - it contains data that I'm going to be able to pull into any component that I want
  cats,
  dogs,
  pets: [...cats, ...dogs] // the ... is used to spread the content of the cats array and the dog array - since they are actually arrays of animals
}
