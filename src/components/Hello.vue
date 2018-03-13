<template>
  <div class="dash">
    <cards />
    <leaflet class="map-container" />
  </div>
</template>

<script>
import cards from './cards/cards'
import leaflet from './Map'

export default {
  name: 'Hello',

  components: { cards, leaflet }
}
</script>

<style scoped>
.dash {
  display: grid;
  grid-template-areas: "cards leaflet";
  grid-template-columns: 500px 1fr;
  /* grid-template-rows: 1fr; */
}

.map-container {
  grid-area: leaflet;
  background-color: purple;
  height: 100%;
  width: 100%
}
</style>
