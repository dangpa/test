import Vue from 'vue'
import axios from 'axios'
import router from './router/index'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from 'components/app-root'
import { FontAwesomeIcon } from './icons'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

// Registration of global components
//Vue.component('icon', FontAwesomeIcon)
router.beforeEach((to, from, next) => {
  store.state.show_loading = true;
  next();
});


Vue.prototype.$http = axios

sync(store, router)

const app = new Vue({
  store,
  router,
  ...App
})

export {
  app,
  router,
  store
}
