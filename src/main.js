// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Goals from './components/Goals'
import Achievements from './components/Achievements'

import VueFire from 'vuefire'
import Firebase from 'firebase'
import VueRouter from 'vue-router'

let firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyD1J5m2PaKJGahr_YIsphKkb2r9D33ZUUQ',
  authDomain: 'ak-ai-96329.firebaseapp.com',
  databaseURL: 'https://ak-ai-96329.firebaseio.com',
  storageBucket: 'ak-ai-96329.appspot.com',
  messagingSenderId: '330424948909'
})
let db = firebaseApp.database()

Vue.use(VueFire)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Goals
    },
    {
      path: '/goals',
      component: Goals
    },
    {path: '/achievements', component: Achievements}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App />',
  components: { App },
  methods: {
    addGoal: function (name) {
      this.$firebaseRefs.goals.push({name: name})
    }
  },
  firebase: {
    goals: db.ref('goals')
  }
})
