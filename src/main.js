import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'ant-design-vue/dist/antd.css';
import { Carousel , Icon } from 'ant-design-vue';
Vue.use(Carousel);
Vue.use(Icon);

// base样式
import '@/assets/less/base.less'

Vue.config.productionTip = false

// 设置title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
