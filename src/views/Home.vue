<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend</h1>
    <h5>Number of pets available: {{ animalsCount }}</h5>
    <p>Number of Cats: {{getAllCats.length}}</p>
    <p>Number of Dogs: {{ getAllDogs.length }}</p>
    <button class="btn btn-primary" @click="togglePetForm"> Add new pet </button> <br /><br /><br />

    <b-form @submit.prevent="submitForm" v-if="showPetForm">
      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter pet name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Breed:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.breed"
          required
          placeholder="Enter breed type"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Gender:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.gender"
          :options="['male', 'female']"
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

      <b-form-group id="input-group-2" label="Color:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.color"
          required
          placeholder="Enter pet color"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Weight:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.weight"
          required
          placeholder="Enter pet weight"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Abode:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.abode"
          required
          placeholder="Enter breed abode"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Note:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.notes"
          required
          placeholder="Comment about pet"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

    <div id="toast">Pet has been added sucessfully</div>
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
              species: null,
              breed: '',
              gender: '',
              color: '',
              weight: '',
              abode: '',
              notes: ''
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
          const { species, age, name, breed, gender, color, weight, abode, notes} = this.formData     // pulling the data from the formData defined/set in the data object above
          const payload = {                                // then assign the object to the pay load
              species,
              pet: {
                  name,
                  age,
                  breed,
                  gender,
                  color,
                  weight,
                  abode,
                  notes
              }
          }
          this.addPet(payload)                             // throw in the payload add function defined in the mutation.js file
                                                          // which will be passed through the mutation and appended in to the state
        var x = document.getElementById("toast");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          // reset form after submit
          this.formData = {
              name: '',
              age: 0,
              species: null,
              breed: '',
              gender: '',
              color: '',
              weight: '',
              abode: '',
              notes: ''
          }
      }
  }
}
</script>

<style scoped>
#toast {
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: #ff6666;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    right: 5%;
    top: 30px;
    font-size: 17px;
}

#toast.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
    from {right: 0; opacity: 0;}
    to {top: 30px; opacity: 1;}
}

@keyframes fadein {
    from {right: 0; opacity: 0;}
    to {top: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
    from {top: 30px; opacity: 1;}
    to {right: 0; opacity: 0;}
}

@keyframes fadeout {
    from {top: 30px; opacity: 1;}
    to {right: 0; opacity: 0;}
}
</style>
