import Vue from 'vue'
import { store } from './store'
import App from './App'
import './css/gameField.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
