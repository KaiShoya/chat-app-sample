import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDY_PiUPLCn4kk7UBmp3vRNUjHBTuGSjW8",
  authDomain: "chat-app-cdaff.firebaseapp.com",
  databaseURL: "https://chat-app-cdaff.firebaseio.com",
  projectId: "chat-app-cdaff",
  storageBucket: "chat-app-cdaff.appspot.com",
  messagingSenderId: "162052740584",
  appId: "1:162052740584:web:f04384381b8f7d22"
};
firebase.initializeApp(firebaseConfig)

new Vue({
  render: h => h(App),
  template: '<App/>',
}).$mount('#app')
