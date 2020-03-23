<template>
  <div>
    <PetTable
    species="cats"
    :pets="cats"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex' // inmport the data from state in the vuex store
import PetTable from '@/components/PetTable.vue'

export default {
  components: {
      PetTable
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([ // use the data
      'cats'
    ])
  }
}
</script>
