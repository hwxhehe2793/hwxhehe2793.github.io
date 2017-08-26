<template>
  <div class="home">
    <header-yellow></header-yellow>
    <!-- 主体部分 -->
    <div class="main">
      <div class="bannar">
        <router-link to="/topprd">
          <img :src="bannar.img">
        </router-link>
      </div>
      <ul class="acts-category">
        <li class="acts-category-item" v-for="(item,index) in classifys" @click="gethotsale(item)">
          <div class="acts-category-title">
            <span>{{item.classify_title}}</span>
            <router-link to="/category">更多&gt;</router-link>
          </div>
          <router-link to="/hotsale">
          	<img class="category-item-banner" :src="item.imgs.small" alt="">
          </router-link>
          <ul class="acts-category-item-goodsList">
            <li v-for="(pro,ind) in item.products">
             <router-link to="/details">
             	 <img class="acts-category-item-goodsList-img" :src="pro.imgs.small" @click="adddetails(pro)">
             </router-link>
              <p class="category-name">{{pro.title}}</p>
              <div class="product-specifics">
                <div class="product-specifics-left">
                  <p>{{pro.unit}}ml</p>
                  <p>￥{{pro.price}}</p>
                </div>
                <div class="product-specifics-right" @click = "addcartnbumber(pro)">+</div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import HeaderYellow from 'components/Header-yellow/Header-yellow'
export default {
  created () {
    // 获取首页的数据
    // bannar数据
    let bannarUrl = 'http://localhost:8081/bannar'
    this.$http.get(bannarUrl)
      .then((data) => {
        this.bannar = data.data
      })
    // 分类数据
    let classifysUrl = 'http://localhost:8081/classifys'
    this.$http.get(classifysUrl)
      .then((data) => {
        this.classifys = data.data
      })
 			
 			this.$store.dispatch("getCart")
  },
  data () {
    return {
      // bannar
      bannar: {},
      // 分类数据
      classifys: []
    }
  },
  
  methods:{
  	//执行方法 调用actions里面的getHotsale方法（参数一需要执行的方法，参数二item）
  	gethotsale (item) {
  		this.$store.dispatch('getHotsale',item)
  	},
  	
  	addcartnbumber (item) {
			this.$store.dispatch('addCartNumber',item)	
  	},
  	
//	adddetails (item) {
//		this.$store.dispatch('addDetails',item)
//	}
  	
  },
  components: {
    HeaderYellow
  }
}
</script>
<style lang="less" scoped>
.bannar{
  width: 100%;
  a{
    display: block;
    img{
      width: 100%;
    }
  }
}
.acts-category-item{
  background-color: #fff;
  padding: 1.4rem 0.9rem;
} 
.acts-category-title{
  overflow: hidden;
}
.acts-category-title>span{
  float: left;
  border-left: 0.8rem solid #eb4084;
  color: #eb4084;
  text-indent: 0.6rem;
  font-size: 1.4rem;
}
.acts-category-title>a{
  float: right;
  color: #a6a6a6;
  font-size: 1.3rem;
}
.category-item-banner{
  width: 100%;
  margin: 0.9rem 0;
}
.acts-category-item-goodsList{
  overflow: hidden;
}
.acts-category-item-goodsList>li{
  width: 31.33333%;
  padding: 0 1%;
  float: left;
  text-align: center;
  font-size: 1.2rem;
}
.acts-category-item-goodsList>li:nth-child(3n-1){
  border-left: 0.1rem solid #e5e5e5;
  border-right: 0.1rem solid #e5e5e5;
  box-sizing: border-box;
}
.acts-category-item-goodsList-img{
  width: 7.4rem;
  height: 7.4rem;
}
.product-specifics{
  overflow: hidden;
  margin-top: 3rem;
}
.product-specifics-left{
  float: left;
  text-align: left;
}
.product-specifics-right{
  float: right;
  width: 3rem;
  height: 3rem;
  border: 0.1rem solid #dee0dd;
  border-radius: 50%;
  font-size: 2rem;
  color: #ff3910;
  text-align: center;
  line-height: 3rem;
}
.product-specifics-left>p:nth-child(1){
  color: #acacac;
}
.product-specifics-left>p:nth-child(2){
  color: #e44619;
}
.category-name{
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow: hidden;
  vertical-align: top;
  text-align: -webkit-match-parent;
}
</style>