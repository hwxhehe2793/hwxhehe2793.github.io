import Vue from 'vue'
import Vuex from 'vuex'
// 引入axios
import http from 'axios'

Vue.use(Vuex)

//相当于组件中的data
const state = {
	//创建一个空数组，存放共享数据
	hotsale: [],
	//创建一个空的数组，存放购物车数据
	cart: [],
	//创建一个空的数组，存放分类数据
	classifys: [],
	//创建一个空的数组， 存放详情数据
	site:[],
	//控制全选按钮的激活状态
	activeall: false,
	//控制tabbar显示或者隐藏
	tbshow: false,
	//详情页面商品的数量
	detprdid: 0,
	//详情页面商品返回的数组
	detprdarr:[],
	//topbar名称
	tbname:"卡卡",
	//收藏或者取消
	collectma: false

}



const getters = {
	//购物车的总数量
	totalNum(state) {
		let result = 0
		for(var i = 0; i < state.cart.length; i++) {
			result += (state.cart[i].num)
		}
		return result
	},
	//购物车总金额
		
	totalPrice (state) {
		let result =0
		for(var i = 0; i < state.cart.length; i++) {
			result += (state.cart[i].price*state.cart[i].num*state.cart[i].pitchon)
		}
		return result.toFixed(2)
	},
	
	prdnum (state) {
			for(let i = 0; i < state.cart.length; i++) {
				console.log(state.detprdid)
			if(state.cart[i].product_id===state.detprdid) {
				return state.cart[i].num
			}
		}
			return 0
	},
	
	activeheart (state) {
		return state.detprdarr.collect
	}
}

//执行异步操作
const actions = {
	//结构commit，并且传入home页面的item（通过dispatch方法）
	getHotsale({ commit }, item) {
		//获取classify_id相同于item.classify_id的数据
		let url = 'http://localhost:8081/classifys?classify_id=' + item.classify_id
		http.get(url)
			//成功回调，使用commit方法执行GET_HOTSALE
			.then(function(data) {
				commit('GET_HOTSALE', data.data)
			})
	},

	getCart({ commit }) {
		let url = 'http://localhost:8081/cart'
		http.get(url)
			.then(function(data) {
				commit('GET_CART', data.data)
			})
	},
	//获取分类数据
	getClassifys({ commit }) {
		
		
		let url = 'http://localhost:8081/classifys'
		http.get(url)
			.then(function(data) {
				commit('GET_CLASSIFYS', data.data)
			})
	},
	
	
	addDetails({ commit }, item) {
		if(state.site.length>0){
			let url = 'http://localhost:8081/site/1'
			http.put(url,item).then(function(data) {
				commit('REPLACE_DETAILS', item)
			})
			}
		else{
			let newurl = 'http://localhost:8081/site'
			item.num = 1
			http.post(newurl, item).then(function(data) {
			// 调用mutations下的ADD_CART方法,同时将后台返回的更新后的对象传给ADD_CART方法
				commit('ADD_DETAILS', item)

				})                            
		}
	},
	//购物车添加或者新增
	addCartNumber({ commit }, item) {
		//先要判断在数据库中是否已有这个商品对象
		let url = 'http://localhost:8081/cart?product_id=' + item.product_id
		http.get(url)
			.then(function(data) {
				if(data.data.length > 0) {
					// 就是让数据中的这个商品数量++
					let obj = data.data[0]
					obj.num++
						//				// 更新
						//        		// obj.id->商品在购物车中id
						let url = 'http://localhost:8081/cart/' + obj.id
					http.put(url, obj).then(function(data) {
						// 调用mutations下的ADD_CART方法,同时将后台返回的更新后的对象传给ADD_CART方法
						commit('ADD_CART_NUMBER', data.data)
					})
				} else {
					let url = 'http://localhost:8081/cart'
					item.num = 1
					http.post(url, item).then(function(data) {
						// 调用mutations下的ADD_CART方法,同时将后台返回的更新后的对象传给ADD_CART方法
						commit('ADD_CART_NUMBER', item)

					})
				}
			})
	},
	
	//收藏添加
	addCollectList({ commit }, item) {
		//先要判断在数据库中是否已有这个商品对象
		let url = 'http://localhost:8081/collect?product_id=' + item.product_id
		http.get(url)
			.then(function(data) {
				if(data.data.length > 0) {
					return
				} else {
					let url = 'http://localhost:8081/collect'
					item.collect = true
					http.post(url, item).then(function(data) {
						//未完待续
					})
				}
			})
	},
	//购物车减少或者删除
	redCartNumber({ commit }, item) {
		//先要判断在数据库中是否已有这个商品对象
		let url = 'http://localhost:8081/cart?product_id=' + item.product_id
		http.get(url)
			.then(function(data) {
				if(data.data[0].num > 1) {
					// 就是让数据中的这个商品数量++
					let obj = data.data[0]
					obj.num--
					//				// 更新
					//        		// obj.id->商品在购物车中id
					let url = 'http://localhost:8081/cart/' + obj.id
					http.put(url, obj).then(function(data) {
						// 调用mutations下的ADD_CART方法,同时将后台返回的更新后的对象传给ADD_CART方法
						commit('REDUCE', data.data)
					})
				} else {
					item.num--
					let obj = data.data[0]
					obj.num--
					let url = 'http://localhost:8081/cart/' + obj.id
					http.delete(url)
						.then(function(data) {
							commit('DELPRODUCT', item)
						})
				}
			})
	},
	//减少收藏或删除收藏
	redCollectList({ commit }, item) {
		//先要判断在数据库中是否已有这个商品对象
		let url = 'http://localhost:8081/collect?product_id=' + item.product_id
		http.get(url)
			.then(function(data) {
				if(data.data[0].num > 1) {
					return
				} else {
					item.collect = false
					let obj = data.data[0]
					obj.collect = false
					let url = 'http://localhost:8081/collect/' + obj.id
					http.delete(url)
						.then(function(data) {
							//未完待续
						})
				}
			})
	},
	//购物车加号按钮添加数量
	increase({ commit }, item) {
		let url = 'http://localhost:8081/cart/' + item.id
		item.num++
			http.put(url, item).then(function(data) {
				commit('INCREASE', item)
			})
	},
	//购物车按钮减少数量
	reduce({ commit }, item) {
		let url = 'http://localhost:8081/cart/' + item.id
		item.num--
			http.put(url, item).then(function(data) {
				commit('REDUCE', data.data)
			})
	},
	//购物车按钮删除数量
	delproduct({ commit }, item) {
		let url = 'http://localhost:8081/cart/' + item.id
		item.num--
			http.delete(url)
			.then(function(data) {
				commit('DELPRODUCT', item)
			})
	},
	//全选或者不选
	allOrCancel({commit}) {
		let url ='http://localhost:8081/cart'
		http.get(url).then(function(data) {
				for(var i = 0; i<data.data.length; i++){
					state.activeall==false?data.data[i].pitchon = 1:data.data[i].pitchon = 0
				}
				commit('ALLORCANCEL', data.data)
			})
	}

}

const mutations = {
	//方法把获取的data.data  赋值给state.hotsale
	GET_HOTSALE(state, hotArr) {
		state.hotsale = hotArr
	},

	GET_CART(state, cartArr) {
		state.cart = cartArr
	},

	GET_CLASSIFYS(state, calssifysArr) {
		state.classifys = calssifysArr
	},
	
	GET_DETAILS(stat, siteArr) {
		state.site = siteArr
	},

	REPLACE_DETAILS(state, siteArr) {
		state.site.splice(0,1,siteArr)
	},
	

	ADD_CART_NUMBER(state, cartNumber) {
		if(cartNumber.num > 1) {
			for(var i = 0; i < state.cart.length; i++) {
				if(state.cart[i].product_id === cartNumber.product_id) {
					state.cart[i].num++
				}
			}

			for(var i = 0; i < state.classifys.length; i++) {
				let result = state.classifys[i].products
				for(var j = 0; j < result.length; j++) {
					if(result[j].product_id === cartNumber.product_id) {
						result[j].num = cartNumber.num
					}
				}
			}
		} else {
			state.cart.push(cartNumber)
		}

		for(var i = 0; i < state.classifys.length; i++) {
			let result = state.classifys[i].products
			for(var j = 0; j < result.length; j++) {
				if(result[j].product_id === cartNumber.product_id) {
					result[j].num = cartNumber.num
				}
			}
		}
	},

	INCREASE(state, cartNumber) {
		for(var i = 0; i < state.classifys.length; i++) {
			let result = state.classifys[i].products
			for(var j = 0; j < result.length; j++) {
				if(result[j].product_id === cartNumber.product_id) {
					result[j].num = cartNumber.num
				}
			}
		}
	},

	REDUCE(state, cartNumber) {
		for(var i = 0;i<state.cart.length; i++){
    			if(state.cart[i].product_id === cartNumber.product_id){
    				state.cart[i].num = cartNumber.num
    			}
    	}
		
		for(var i = 0; i < state.classifys.length; i++) {
			let result = state.classifys[i].products
			for(var j = 0; j < result.length; j++) {
				if(result[j].product_id === cartNumber.product_id) {
					result[j].num = cartNumber.num
				}
			}
		}
	},

	DELPRODUCT(state, item) {
		for(var i = 0; i < state.classifys.length; i++) {
			let result = state.classifys[i].products
			for(var j = 0; j < result.length; j++) {
				if(result[j].product_id === item.product_id) {
					result[j].num = item.num
				}
			}
		}

		for(var i = 0; i < state.cart.length; i++) {
			if(state.cart[i].product_id === item.product_id) {
				state.cart.splice(i, 1)
			}
		}
	},
	
	ALLORCANCEL(state, cartNumber) {
		for(var i = 0;i<state.cart.length; i++){
    			if(state.cart[i].product_id === cartNumber[i].product_id){
    				state.cart[i].pitchon = Number(cartNumber[i].pitchon)
    			}
    	}
		
	},
	
	CHANGECAL(state){
		for(var i = 0; i<state.classifys.length; i++){
			for(var j = 0; j<state.cart.length;j++){
				if(state.classifys[i].product_id===state.cart[j].product_id){
					state.classifys[i].num=state.cart[j].num
				}
			}
		}
	}
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})