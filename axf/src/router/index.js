import Vue from 'vue'
import Router from 'vue-router'

// 主页
import Home from 'pages/Home/Home'
import Category from 'pages/Category/Category'
import Shopcart from 'pages/Shopcart/Shopcart'
import Mine from 'pages/Mine/Mine'
import Details from 'pages/Details/Details'
import Hotsale from 'pages/Hotsale/Hotsale'
import Topprd from 'pages/Topprd/Topprd'

Vue.use(Router)

export default new Router({	
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopcart',
      component: Shopcart
    },
    {
    	path: '/mine',
      component: Mine
    },
    {
    	path: '/details',
      component: Details
    },
    {
    	path: '/hotsale',
      component: Hotsale
    },
    {
    	path: '/topprd',
      component: Topprd
    },
  ]
})
