<template>
  <div class="home">
    <header-yellow></header-yellow>
    <div class="main">
      <div class="category">
        <ul class="categories">
          <li v-for="(item,index) in activeClassifys"><span :class="{'active': activeClassifysId === item.classify_id}" @click="changCursor(item)">{{item.classify_title}}</span></li>
        </ul>
      </div>
      <div class="productList">
        <div class="product-filter" :class="{'active':leftsp===true||rightsp===true}">
          <div class="filter-titles">
            <div :class="{'active':leftsp===true}" @click="leftspBol"><span>全部分类</span><var>&nbsp;</var></div>
            <div :class="{'active':rightsp===true}" @click="rightspBol"><span>综合排序</span><var>&nbsp;</var></div>
          </div>
          <div class="filter-items">
            <ul>
              <li :class="{'active':activeName===item.name}" v-for="(item,index) in changeFilterItems" @click="changeCids(item)">{{item.name}}</li>
            </ul>
          </div>
        </div>
        <ul class="productList-wrap">
          <li v-for="(item,index) in activeClassifysCids">
            <dl>
              <dt>
              	 <router-link :to="{path: 'details' , query: { id : activeClassifysId , product_id : item.product_id,whose:'catproducts'}}">
               	 	<img :src="item.imgs.small" alt="" class="productList-images">
               	 </router-link>
              </dt>
              <dd class="nowrap product-item-title">{{item.title}}</dd>
              <dd class="product-specifics-wrap">
                <div class="product-specifics">
                  <span>{{item.unit}}ml</span>
                  <var>￥{{item.price}}</var><br />
                </div>
                <div class="product-operates">
                  <span class="inner" v-if="item.num!=0" @click="redCartNumber(item)">-</span>
                  <span class="product-operates-item" v-if="item.num!=0">{{item.num}}</span>
                  <span class="inner" @click="addcartnbumber(item)">+</span>
                </div>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import HeaderYellow from 'components/Header-yellow/Header-yellow'
export default {
  created () {
		this.$store.dispatch('getCart')//临时加上去 有问题弄掉
		 	
	if(this.$store.state.cart.length==0){
		 this.$store.dispatch('getClassifys')
	}
	else{
//			this.$store.dispatch('getClassifys')
//			this.$store.commit('CHANGECAL')
	}
	
  },
  data () {
    return {
//  	classifys:[]
      // 激活的分类id
      activeClassifysId: 1,
      //全部分类激活
      leftsp:false,
      //综合排序
      rightsp:false,
      //存放全部分类的数组
      filterItems:[],
      //存放综合排序的数组
      rankings:[{id:1, name: '综合排序' }, {id:2, name: "价格最低" }, {id:3, name: "价格最高" }],
      //存放激活子分类的名字
      activeName:'all',
      //激活子分类的Id
      activeCids: 0,
      //确定是分类
      confirmLeft:false,
      //确定是排序
      confirmRight:false
    }
  },
  
  methods:{
  	addcartnbumber (item) {
			this.$store.dispatch('addCartNumber',item)
  	},
  	
  	redCartNumber(item){
			this.$store.dispatch('redCartNumber',item)
  	},
  //每次点击分类内容初始化属性
  	changCursor(item){
  			this.activeClassifysId = item.classify_id
  			this.leftsp = false
  			this.rightsp = false
				this.activeCids = 0
  			this.confirmLeft = false
  			this.confirmRight = false
  			this.activeName = 'all'
  		},
  	//点击全部分类初始化属性	
  	leftspBol(){
  		this.rightsp = false
  		this.leftsp = !this.leftsp
			this.activeName = 'all'
  		this.confirmLeft = true
  		this.confirmRight = false
  		this.activeCids = 0
  	},
  	//点击综合排序初始化内容
  	rightspBol(){ 
  		this.leftsp = false
  		this.rightsp = !this.rightsp
  		this.confirmRight = true
  	},
  	//点击内容传适合的参数
  	changeCids(item){
  		if(this.confirmRight != true){
  			this.activeCids = item.id
  		}
  		this.activeName = item.name
  		this.rightsp = false
  		this.leftsp = false
  	}
  	
  },
  
  components: {
    HeaderYellow
  },
  computed: {
  	//左侧分类栏属性
  	activeClassifys () {
  		if(this.$store.state.classifys.length > 0){
  			return this.$store.state.classifys
  		}
  	},
  	
  	
  //动态计算分类的属性
    activeClassifysProduct () {
//  	var _this = this
      // console.log(this.classifys.filter(item => Number(item.classify_id) === this.activeClassifysId))[0]
      if (this.$store.state.classifys.length > 0) {
        return this.$store.state.classifys.filter(item => Number(item.classify_id) === this.activeClassifysId)[0]
      } else {
        return {}
      }
    },
    
    //动态计算分类或者排序的因该返回的数据
    activeClassifysCids(){
    	if(this.confirmLeft==true&&this.activeCids==0){
    		return this.activeClassifysProduct.products
    	}
    	
    	
    	else if(this.confirmRight==true&&this.activeCids==0&&this.activeName=='all'){
    		return this.activeClassifysProduct.products
    	}
    	
    	else if(this.activeCids!=0&&this.confirmLeft==true&&this.confirmRight!=true){
    		var result = JSON.stringify(this.activeClassifysProduct)
    				result = JSON.parse(result)
    				result = result.products.filter(item => item.cids===this.activeCids%3+1)
    				return result
    	}
    	
    	else if(this.activeCids!=0&&this.confirmLeft==true&&this.confirmRight==true){
    		var result = JSON.stringify(this.activeClassifysProduct)
    				result = JSON.parse(result)
    				result = result.products.filter(item => item.cids===this.activeCids%3+1)
    		var arr = result
    		if(this.activeName=='综合排序'){
    				return arr
    			}
    			else if(this.activeName=='价格最低'){
    				 arr.sort(function(a, b){
    					if(a.price>b.price){
    						return 1
    					}
    					else if(a==b){
    						return 0
    					}
    					else{
    						return -1
    					}
    				})
    				 return arr
    			}
    			else if(this.activeName=='价格最高'){
    				arr.sort(function(a, b){
    					if(a.price>b.price){
    						return -1
    					}
    					else if(a==b){
    						return 0
    					}
    					else{
    						return 1
    					}
    				})
    				return arr
    			}
    			else{
    				return result
    			}
    		
    	}
    	
    	else if(this.confirmRight==true&&this.activeName!='all'){
    		var arr = this.activeClassifysProduct.products
    		var arrs = arr.slice(0)
    			if(this.activeName=='综合排序'){
    				return arrs
    			}
    			else if(this.activeName=='价格最低'){
    				 arr.sort(function(a, b){
    					if(a.price>b.price){
    						return 1
    					}
    					else if(a==b){
    						return 0
    					}
    					else{
    						return -1
    					}
    				})
    				 return arrs
    			}
    			else if(this.activeName=='价格最高'){
    				arrs.sort(function(a, b){
    					if(a.price>b.price){
    						return -1
    					}
    					else if(a==b){
    						return 0
    					}
    					else{
    						return 1
    					}
    				})
    				return arrs
    			}
    	}
    	
    		else{
    			return this.activeClassifysProduct.products
    		}
    },
    

    changeFilterItems(){
    	 if (this.$store.state.classifys.length > 0) {
      		if(this.leftsp===true){
      			return this.$store.state.classifys.filter(item => Number(item.classify_id) === this.activeClassifysId)[0].cids
      		}
      		else{
      			return this.rankings
      		}
      }
    }
  }
}
</script>
<style lang="less">
.home{
		overflow: scroll;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
}	
	
.add-cart-item{
  position: fixed;
  -webkit-transform: scale(0.8) rotate(30deg);
  -ms-transform: scale(0.8) rotate(30deg);
  -o-transform: scale(0.8) rotate(30deg);
  transform: scale(0.8) rotate(30deg);
  opacity: 0.9;
  -webkit-transition: all 0.6s cubic-bezier(0.58,-1.15, 0.99, 1.07);
  -o-transition: all 0.6s cubic-bezier(0.58,-1.15, 0.99, 1.07);
  transition: all 0.6s cubic-bezier(0.58,-1.15, 0.99, 1.07);
  width: 8rem;
  height: 8rem;
}
.add-cart-item>img{
  width: 100%;
  border-radius: 50%;
}
.category{
  overflow: hidden;
  position: relative;
  height: 100%;
}
.categories{
  float: left;
  width: 23.4375%;
  font-size: 1.3rem;
  overflow-y: scroll;
  z-index: 5;
}
.categories>li{
  padding: 0.3rem 0;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 0.1rem solid #d9d9d9;
}
.categories>li>span{
  display: block;
  height: 3.4rem;
  line-height: 3.4rem;
}
.categories>li>span.active{
  border-left: 0.6rem solid #f0d001;
}
.productList{
  /*float: right;*/
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 76%;
}
.product-filter{
  display: flex;
  display: -webkit-flex;
  flex-direction:column;
  -webkit-flex-direction:column;
  position: absolute;
  z-index: 2;
  width: 100%;
}
.product-filter.active{
  height: 100%;
}
.filter-titles{
  height: 1.8rem;
  padding: 1.1rem 0;
  background-color: rgba(255,255,255,0.8);
  width: 100%;
  border-bottom: 0.1rem solid #e1dbdd;
}
.filter-titles>div{
  float: left;
  width: 50%;
  height: 1.8rem;
  line-height: 1.8rem;
  text-align: center;
  font-size: 1.2rem;
}
.filter-titles>div:nth-child(1){
  box-sizing:border-box;
  border-right: 0.1rem solid #d5d5d5;
}
.filter-titles>div>var{
  display: inline-block;
  width: 1.3rem;
  height: 1.8rem;
  line-height: 1.8rem;
  background: url("./images/icon-down.png") center center no-repeat;
  -webkit-background-size: 1rem 0.6rem;
  background-size: 1rem 0.6rem;
  -webkit-transition: 0.5s ease;
  -o-transition: 0.5s ease;
  transition: 0.5s ease;
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
}
.filter-titles>div.active>var{
  -webkit-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  -o-transform: rotate(-180deg);
  transform: rotate(-180deg);
}
.filter-items{
  flex:1;
  -webkit-flex:1;
  width: 100%;
  background-color: rgba(0,0,0,0.2);
  display: none;
  z-index: 3;
}

.product-filter.active>.filter-items{
	display: block;
}

.filter-items>ul{
  overflow: hidden;
  padding-bottom: 1rem;
  background-color: rgba(255,255,255,1);
}
.filter-items>ul>li{
  padding: 0.7rem 0.9rem;
  border: 0.1rem solid #e0e0e0;
  /*border: 0.1rem solid #e6d056;*/
  border-radius: 0.4rem;
  float: left;
  margin: 0.8rem 0 0 0.8rem;
  background-color: #fff;
  
}
.filter-items>ul>li.active{
  background-color: #fff9d9;
  border-color: #e6d056;
}
.productList-wrap{
  position: absolute;
  top: 4.1rem;
  bottom: 0;
  width: 100%;
  overflow-y: scroll;
  background-color: #fff;
  /*z-index: 4;*/
}
.productList-wrap>li{
  border-bottom: 0.1rem solid #e1dbdd;
  padding: 0.8rem 1rem;
}
.productList-wrap>li>dl{
  overflow: hidden;
}
.productList-wrap>li>dl>dt{
  float: left;
  width: 8rem;
  height: 8rem;
  overflow: hidden;
  text-align: center;
}
.productList-images{
  width: 100%;
}
.productList-wrap>li>dl>dd{
  font-size: 1.2rem;
}
.product-item-title{
  margin-bottom: 2.9rem;
}
.product-specifics-wrap{
  overflow: hidden;
}
.product-specifics{
  float: left;
  width: 30%;
  overflow: hidden;
}
.product-specifics>span{
  display: block;
  color: #858585;
  margin-bottom: 1rem;
}
.product-specifics>var{
  color: #f40;
}
.product-operates{
  float: right;
  width: 70%;
  overflow: hidden;
}
.product-operates>.inner{
  display: inline-block;
  font-size: 2.4rem;
  width: 2.9rem;
  height: 2.9rem;
  line-height: 2.9rem;
  color: #d73e00;
  text-align: center;
  /*padding: 0.8rem;*/
  border: 0.1rem solid #dcbd9e;
  border-radius: 50%;
}
.product-operates-item{
  display: inline-block;
  height: 2.8rem;
  line-height: 2.8rem;
  vertical-align: top;
  font-size: 1.2rem;
  margin: 0 0.5rem;
}
</style>