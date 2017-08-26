<template>
	<div class="topprd">
		<header-gray></header-gray>
		<div class="pitcure"></div>
		<div class="tittle_small"></div>
		<div class="prd_list">
			<ul>
				<li v-for="(item,index) in bannar">
					<router-link :to="{path:'details',query: {product_id:item.product_id,whose:'bannar'}}">
						<div :style="{backgroundImage:'url(\''+ item.imgs.small +'\')'}" ></div>
					</router-link>
					<p>{{item.title}}</p>
					<p>{{item.unit}}ml</p>
					<p>￥{{item.price}}</p>
					<div class="buy_button" @click="addcartnbumber(item)">立即购买</div>
				</li>
			</ul>
		</div>
		<div class="bottom_div"></div>
		<shop-cart></shop-cart>
	</div>
</template>

<script>
	import HeaderGray from 'components/Header-gray/Header-gray'
	import ShopCart from 'components/ShopCart/ShopCart'
	export default {
	created(){
		 let bannarUrl = 'http://localhost:8081/bannar'
		 this.$http.get(bannarUrl)
		 .then((data) => {
        this.bannar = data.data.product
     })
	},
	
	methods:{
		addcartnbumber (item) {
			this.$store.dispatch('addCartNumber',item)
  		}
	},
	
	data(){
		return {
			bannar:[]
		}
	},
		
	components:{
		HeaderGray,
		ShopCart
	}
}
</script>

<style lang="less" scoped>
@import url("../../common/styles/variable.less");
@import url("../../common/styles/mixin.less");
	.bottom_div{
		width: 100%;
		height: 5rem;
		float: left;
	}

	.topprd{
		overflow: scroll;
		position: relative;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(240,255,250,.95);
	}

	.pitcure{
		width: 100%;
		padding-bottom: 49.992188720512%;
		background-image: url(../../pages/Topprd/imgs/drink.jpg);
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: center center;
	}
	
	.tittle_small{
		width: 100%;
		padding-bottom: 14.060303077644%;
		background-image: url(../../pages/Topprd/imgs/xblj.png);
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: center center;
	}
	
	.prd_list>ul>li{
		float: left;
    	width: 45.5%;
    	background-color: #fff;
    	border: 0.1rem solid #c9c9c9;
    	box-sizing: border-box;
    	margin: 3% 0 0 3%;
    	padding-bottom: 1rem;
	}
	
	.prd_list div:nth-child(1){
		width: 100%;
		height: 10rem;
		/*background-image: url(../../pages/Topprd/imgs/dfsy.jpg);*/
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center center;
	}
	
	.prd_list>ul>li>p:nth-child(2){
		line-height: 1.5rem;
    	font-size: 1.4rem;
    	color: #3d3939;
    	text-indent: 0.5rem;
    	text-align: left;
    	padding-top: 0.3rem;
    	margin-top: 1rem;
    	white-space: nowrap;
  		text-overflow:ellipsis;
  		overflow: hidden;
	}
	
	.prd_list>ul>li>p:nth-child(3){
		font-size: 1.4rem;
    	height: 2.0rem;
    	text-indent: 0.5rem;
    	line-height: 2rem;
    	padding-top: 0.3rem;
	}
	
	.prd_list>ul>li>p:nth-child(4){
		font-size: 1.7rem;
    	text-indent: .4rem;
    	color: #c11328
	}
	
	.prd_list .buy_button{
		background-color: #c11328;
		width: 55%;
    	height: 30px;
    	line-height: 30px;
    	color: #fff;
    	text-align: center;
    	margin: 6px auto 0 auto;
    	border-radius: 5px;
    	font-size: 16px;
	}
</style>