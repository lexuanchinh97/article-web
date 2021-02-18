<template>
  <div class="app">
    <!-- <img src="./assets/logo.png"> -->
    <comp-header/>
    <navbar/>
    <router-view/>
    <comp-footer/>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import navbar from './components/Navbar/Navbar.vue'
import footer from './components/Footer/Footer.vue'
export default {
  components: {
     navbar,
     'comp-header' : Header,
     'comp-footer' : footer
    }
  }
</script>

<style>

body {
  margin: 0 0;
  padding: 0 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
