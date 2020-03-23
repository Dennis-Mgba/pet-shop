<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend</h1>
    <h5>Number of pets available: {{ animalsCount }}</h5>
    <p>Number of Cats: {{getAllCats.length}}</p>
    <p>Number of Dogs: {{ getAllDogs.length }}</p>
    <button class="btn btn-primary" @click="togglePetForm"> Add new pet </button>

    <b-form @submit.prevent="submitForm" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter pet name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter pet Age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  data() {
      return {
          showPetForm: false,
          formData: {
              name: '',
              age: 0,
              species: null
          }
      }
  },
  computed: {
      ...mapGetters([
          'animalsCount',
          'getAllCats',
          'getAllDogs'
      ])
  },
  methods: {
      ...mapActions([
          'addPet'
      ]),
      togglePetForm() {
          this.showPetForm = !this.showPetForm
      },
      submitForm() {
          const { species, age, name } = this.formData     // pulling the data from the formData defined/set in the data object above
          const payload = {                                // then assign the object to the pay load
              species,
              pet: {
                  name,
                  age
              }
          }
          this.addPet(payload)                             // throw in the payload add function defined in the mutation.js file
                                                          // which will be passed through the mutation and appended in to the state
          // reset form after submit
          this.formData = {
              name: '',
              age: 0,
              species: null
          }
      }
  }
}
</script>
