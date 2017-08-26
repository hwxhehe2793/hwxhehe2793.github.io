// 引入babel-polyfill解决为Babel 默认只转换新的 JavaScript 语法，而不转换新的 API的问题,不需要引入babel-runtime
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入fastclick-》解决300ms延迟的问题
import fastclick from 'fastclick'

// rem初始化
import 'common/reset'
// 引入axios
import axios from 'axios'
Vue.prototype.$http = axios

import 'common/styles/index.less'

// 官方推荐将fastclick绑定到body下，这样在body下的元素都不会有300ms的延迟
fastclick.attach(document.body)
Vue.config.productionTip = false

// 导航钩子控制tabBar的显示隐藏
router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/category' || to.path === '/shopcart' || to.path === '/mine') {
    store.state.tbshow = true
  } else {
    store.state.tbshow = false
  } 
  if (to.path ==='/topprd'){
  	 store.state.tbname = '酒水饮料'
  }
  else if(to.path ==='/hotsale'){
  	store.state.tbname = '热带水果'
  }
  else if(to.path ==='/details'){
  	store.state.tbname = '商品详情'
  }
  next()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
