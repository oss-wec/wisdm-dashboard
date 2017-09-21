<template>
  <div class="dash">
    <cards />
    <div class="map">map</div>
  </div>
</template>

<script>
import cards from './cards/cards'

export default {
  name: 'Hello',

  components: { cards }
}
</script>

<style scoped>
.dash {
  display: grid;
  grid-template-areas: "cards map";
  grid-template-columns: 500px 1fr;
  /* grid-template-rows: 1fr; */

}

.map {
  grid-area: map;
  background-color: purple;
}
</style>
