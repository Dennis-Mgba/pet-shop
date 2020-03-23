<template>
  <div>
    <h3>This is just {{ species }} for adoption</h3>
    <b-table striped hover :items="pets">
        <template v-slot:cell(name)="data">
            <router-link :to="`/pets/${species}/${data.index}`">{{ data.value }}</router-link>
        </template>
    </b-table>
  </div>
</template>

<script>
export default {
    props: {
        species: String,
        pets: Array
    }
}
</script>
