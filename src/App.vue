<template>
  <div id="app">
    <router-view />
    <!-- <MTimeContainer></MTimeContainer> -->
  </div>
</template>

<script>
import MTimeContainer from './components/MTimeContainer.vue'
export default {
  name: 'App',
  components: {
    MTimeContainer
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
</style>
 