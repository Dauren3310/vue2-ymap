import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import ymapPlugin from './smt';

Vue.config.productionTip = false
Vue.use(ymapPlugin);

new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')

