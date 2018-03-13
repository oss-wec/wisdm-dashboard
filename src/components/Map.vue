<template>
  <div class="leaflet" style="height: 100%;">
    <v-map :zoom="7" :center="[38.5, -117.070278]" ref="map">
      <v-tilelayer url="http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"></v-tilelayer>
      <!-- <v-marker :lat-lng="[38.5, -117.070278]"></v-marker> -->
      <v-marker v-for="(coord, index) in markers" :key="index" :lat-lng="coord.coords" />
    </v-map>
    <!-- <button class="button is-large is-primary" @click="testButton">Button Thing</button> -->
  </div>
</template>

<script>
import Vue2Leaflet from 'vue2-leaflet'
import L from 'leaflet'
import { mapState } from 'vuex'

export default {
  name: 'leaflet',

  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer': Vue2Leaflet.TileLayer,
    'v-marker': Vue2Leaflet.Marker
  },

  computed: {
    ...mapState({
      encounters: 'encounters'
    }),

    markers () {
      return this.encounters
      .slice(25, 65)
      .map(m => ({
        coords: [ m.y, m.x ],
        taxa: m.grouping
      }))
    }
  },

  methods: {
    testButton () {
      // this.$refs.map.mapObject.setView([70, 120], 1)
      L.circleMarker([39.0575089, -119.1708051]).addTo(this.$refs.map.mapObject)
    }
  },

  mounted () {
    console.log(this.$refs.map)
  }
}
</script>

<style scoped>
</style>