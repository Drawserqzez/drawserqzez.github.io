<template>
  <div id="app">
    <!-- <Navigation /> -->
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
// import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    // Navigation,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #141414;
  color: rgb(1, 236, 236);
  /* background-color: #A1F0F7; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0;
}

main {
  width: 100%;
  padding-top: 1rem;
}

@media (min-width: 786px) {
  main {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    /* border: solid 1px black;
    border-top: none;
    border-bottom: none; */
  }
}
</style>
