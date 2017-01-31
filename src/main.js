// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueFire from 'vuefire'
import Firebase from 'firebase'

let firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyD1J5m2PaKJGahr_YIsphKkb2r9D33ZUUQ',
  authDomain: 'ak-ai-96329.firebaseapp.com',
  databaseURL: 'https://ak-ai-96329.firebaseio.com',
  storageBucket: 'ak-ai-96329.appspot.com',
  messagingSenderId: '330424948909'
})
let db = firebaseApp.database()

let goalsRef = db.ref('goals')

console.log(goalsRef)

Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App :goals="goals" />',
  components: { App },
  firebase: {
    goals: goalsRef
  }
})
