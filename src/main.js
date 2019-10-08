// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import fastClick from 'fastclick'
import 'lib-flexible'
import './pages/style/reset.css'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    fastClick.attach(document.body);
  }, false);
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
