<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue'
export default {
  components: { navbar },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
