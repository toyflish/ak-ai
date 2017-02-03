// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'
import Firebase from 'firebase'
import VueRouter from 'vue-router'

import App from './App'
import Goals from './components/Goals'
import Achievements from './components/Achievements'

let firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyD1J5m2PaKJGahr_YIsphKkb2r9D33ZUUQ',
  authDomain: 'ak-ai-96329.firebaseapp.com',
  databaseURL: 'https://ak-ai-96329.firebaseio.com',
  storageBucket: 'ak-ai-96329.appspot.com',
  messagingSenderId: '330424948909'
})
let db = firebaseApp.database()

Vue.use(Vuex)
Vue.use(VuexFire)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Goals},
    {path: '/goals', component: Goals},
    {path: '/achievements', component: Achievements}
  ]
})

const store = new Vuex.Store({
  state: {
    goals: null,
    goalsRef: null
  },
  mutations: {
    ...VuexFire.mutations,
    addGoal: function (state, {ref, payload}) {
      ref.push(payload)
    }
  },
  getters: {
    goals: function (state) { return state.goals }
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App />',
  components: { App },
  methods: {
    addGoal: function (name) {
      store.commit('addGoal', {ref: this.$firebaseRefs['goals'], payload: {name: name}})
    }
  },
  computed: Vuex.mapGetters([
    'goals'
  ]),
  firebase: {
    goals: db.ref('goals')
  },
  beforeCreate: function () {
    store.commit('setRef', db.ref('goals'))
  }
})
