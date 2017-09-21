<template>
  <div id="app">
    <navigation />
    <router-view id="router"></router-view>
  </div>
</template>

<script>
import Navigation from './components/navigation'
import './assets/css/main.css'
import 'font-awesome/css/font-awesome.css'

export default {
  name: 'app',

  components: { navigation: Navigation }
}
</script>

<style scoped>
#router {
  grid-area: content;
}
</style>
