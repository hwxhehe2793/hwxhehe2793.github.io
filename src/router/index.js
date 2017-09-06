import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'

import login from '@/pages/account/login'
import smslogin from '@/pages/account/smslogin'
import password from '@/pages/account/password'
import forget from '@/pages/account/forget'
import index from '@/pages/account/index'
import alliance from '@/pages/account/alliance'
import ditu from '@/pages/account/ditu'
import search from '@/pages/account/search'
import outbox from '@/pages/recyclebin/outbox'
import entrecyle from '@/pages/enterprisestorecyle/entrecyle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
			redirect:'/alliance',
			component:App,
			children:[
				{
					path:'/password',
					component:password,
				},				
				{
					path:'/login',
					component:login,
				},
				{
					path:'/smslogin',
					component:smslogin,
				},
				{
					path:'/forget',
					component:forget,
				},
				{
					path:'/index',
					component:index,
				},
				{
					path:'/alliance',
					component:alliance,
				},
				{
					path:'/ditu',
					component:ditu,
				},		
				{
					path:'/search',
					component:search,
				},
				{
					path:'/outbox',
					component:outbox,
				},
				{
					path:'/entrecyle',
					component:entrecyle,
				}
			]
    }
  ]
})
