<template>
  <div class="leaflet">
    <v-map :zoom="7" :center="[38.5, -117.070278]">
      <v-tilelayer url="http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"></v-tilelayer>
    </v-map>
  </div>
</template>

<script>
import Vue2Leaflet from 'vue2-leaflet'

export default {
  name: 'leaflet',

  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer': Vue2Leaflet.TileLayer
  }
}
</script>

<style scoped>
</style>