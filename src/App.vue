<template>
  <div id="app">
    <navigation />
    <router-view id="router"></router-view>
  </div>
</template>

<script>
import Navigation from './components/navigation'
import store from './store'
import './assets/css/main.css'
import './assets/css/flaticon.css'
import 'font-awesome/css/font-awesome.css'
import 'bulma/css/bulma.css'

export default {
  store,
  name: 'app',

  components: { navigation: Navigation }
}
</script>

<style scoped>
#router {
  grid-area: content;
}
</style>
