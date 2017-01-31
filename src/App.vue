<template>
  <div id="app">
    <navBar></navBar>
    <achievements :goals="goals"></achievements>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Achievements from './components/Achievements'

export default {
  name: 'app',
  props: ['goals'],
  data () {
    return {dummyGoals: [{name: 'dummy goals'}]}
  },
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
