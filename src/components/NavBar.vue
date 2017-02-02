<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/goals">Goals</router-link>
    <router-link to="/achievments">Achievements</router-link>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
