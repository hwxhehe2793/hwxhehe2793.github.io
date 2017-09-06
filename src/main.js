// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'

import router from './router'

import axios from './axios'
//使用vue-amap
import AMap from 'vue-amap'
Vue.use(AMap)

AMap.initAMapApiLoader({
  // 申请的高德key
  key: '9ad32d2473c2bbdda7e49ecdf2f316fd',
  // 插件集合
  plugin: ['AMap.Geolocation', 'AMap.PlaceSearch']
});
//自适应大小
import rem from './config/rem'

//轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'

//引入mint-ui css
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


//使用VueAwesomeSwiper
Vue.use(VueAwesomeSwiper)
//使用mint-ui
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
//template: '<App/>',
//components: { App }
})
