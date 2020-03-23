<template>
  <div>
    <h5>Category: {{ $route.params.species }}</h5>
    <h4>Pet Name: {{ animal.name }}</h4>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    const animalType = this[this.$route.params.species][this.$route.params.id]
    this.animal = animalType
  }
}
</script>
