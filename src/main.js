// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueWorker from 'vue-worker';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
if(process.env.NODE_ENV=="mock")
require("../src/mock");

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueWorker);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
