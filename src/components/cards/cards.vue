<template>
  <div class="animal-cards">
    <animal-card v-for="(animal, index) in encounters" :key="index" :animal="animal" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AnimalCard from './card'

export default {
  name: 'cards',

  components: { 'animal-card': AnimalCard },

  computed: {
    ...mapState({
      encounters: 'encounters'
    })
  },

  mounted: function () {
    this.$store.dispatch('getEncounters')
  }
}
</script>

<style scoped>
.animal-cards {
  grid-area: cards;
  background-color: #F7F7F8;
  padding: 5px 10px;
  height: 100vh;
  overflow: auto;
}
</style>
