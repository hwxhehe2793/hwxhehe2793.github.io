import vue from 'vue'
import axios from 'axios'

import {apiUrl} from '@/config/apiUrl'


vue.prototype.$http = axios


// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.create({
// 	transformRequest:function(data){

// 		console.log(data);

// 	}

// })
//发送请求之前，把参数格式化。
axios.defaults.transformRequest = function(data){
	let params = new FormData();
	for(let key in data){
		// console.log(i+"===="+data[i])
		params.append(key,data[key]);
	}
	return params;
}
//http://120.76.112.141:8080/zswjk/queryTender?pageNo=1

axios.defaults.baseURL = apiUrl;


//axios.get("http://192.168.0.121:8080/beta6.3/query",{pageNo:1,type:"",area:"":areaLevel:"",typeLevel:""}).then((res)=>{
//	console.log(res);
//})

//axios.request({
//	url:"http://192.168.0.121:8080/beta6.3/queryTender",
//	params:{
//		pageNo:1,type:"",area:"",areaLevel:"",typeLevel:""
//	},
////	paramsSerializer:function(data) {
////		console.log("===============")
////  	var params = new FormData();
////		for(var key in data){
////			// console.log(i+"===="+data[i])
////			params.append(key,data[key]);
////		}
////		return params;
////	},
//	headers: {'X-Requested-With': 'XMLHttpRequest'},
//}).then((res)=>{
//	console.log(res);
//})




