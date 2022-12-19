<template>
  <div id="app">
    <div class="content">
      <Header />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>


import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style lang="scss">
@import './assets/scss/variables.scss';

#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: $main-bg-color;
  position: relative;
}

.content {
  flex-grow: 1;
}
</style>
