// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import viewPort from '../static/js/viewport'

// viewPort()
import '../static/css/reset.css'
import '../static/css/animate.css'

Vue.config.productionTip = false

Vue.prototype.$http  = axios;

var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
