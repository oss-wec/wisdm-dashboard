<template>
  <div id="app">
    <navigation />
    <router-view id="router"></router-view>
  </div>
</template>

<script>
import Navigation from './components/navigation'
import './assets/css/main.css'
import './assets/css/flaticon.css'
import 'font-awesome/css/font-awesome.css'
import 'bulma/css/bulma.css'

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
