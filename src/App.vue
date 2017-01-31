<template>
  <div id="app">
    <navBar></navBar>
    <achievements></achievements>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Achievements from './components/Achievements'

export default {
  name: 'app',
  components: {
    NavBar,
    Achievements
  }
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
