import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    if( to.matched.some(m => m.meta.isLogin ) && store.state.user.id == 0 ) {
      return next({
        path: '/login',
        query: {}
      })
    }
    next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')