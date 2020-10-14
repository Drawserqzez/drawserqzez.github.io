import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Welcome from './Pages/Welcome.vue'
import Skills from './Pages/Skills.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);
const routes = [
  { path: '/', component: Welcome },
  { path: '/skills', component: Skills },
]
const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
