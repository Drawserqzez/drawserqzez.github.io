<template>
  <div id="app">
    <Wrapper />
  </div>
</template>

<script>
import Wrapper from './components/Wrapper.vue'

export default {
  name: 'App',
  components: {
    Wrapper
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  /* min-height: 78.7em; */
  /* background-image: linear-gradient(rgb(78, 78, 78), white) */
  background-color: rgb(80, 80, 80);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
