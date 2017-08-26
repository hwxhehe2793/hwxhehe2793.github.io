<template>
	<div class="hotsale">
		<header-gray></header-gray>
		<div class="picture"></div>
		<div class="theme-prd">
			<h1></h1>
			<ul>
				<li v-for="(item,index) in sale">
					<div class="theme-prd-left" :style="{backgroundImage:'url(\''+ item.imgs.small +'\')'}">
					</div>
					<div class="theme-prd-right">
						<p>{{item.title}}</p>
						<p>{{item.unit}}/盒</p>
						<p>
							<span>￥{{item.price}}</span>
							<span>/</span>
							<span>原价：¥{{item.price}}</span>
						</p>
						<div @click="addcartnbumber(item)">立即购买</div>
					</div>
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
	
	created () {
		console.log(this.$store.state.hotsale)
	},
	
	computed:{
		//动态计算属性获取想要的products
		sale () {
			if (this.$store.state.hotsale.length>0){
				return this.$store.state.hotsale[0].products
			}
			else{
				return {}
			}
		}
	},
	
	methods:{
		addcartnbumber (item) {
			this.$store.dispatch('addCartNumber',item)
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


	.hotsale{
		overflow: scroll;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(246,246,246,.95);
	}

	
	
	.picture{
		width: 100%;
    	position: relative;
    	background-repeat: no-repeat;
    	background-position: center center;
    	background-size: 100% 100%;
    	padding-bottom: 49.992188720512%;
    	background-image: url(../../pages/Hotsale/imgs/theme.jpg);
	}
	
	.theme-prd>h1{
		width: 100%;
		background-image: url(../../pages/Hotsale/imgs/theme_title.jpg);
		background-size: 100% 100%;
		-webkit-background-size: 100% 100%;
		background-repeat: no-repeat;
		padding-bottom: 9.5297609748477%;
	}
	
	.theme-prd>ul>li{	
    	margin: 3%;
    	padding: 3%;
    	position: relative;
    	overflow: auto;
    	border: 1px solid #dbdbdb;
    	background-color: #fff;
	}
	
	.theme-prd-left{
		width: 45%;
		float: left;
    	height: 10.5rem;
    	background-size: 100% 100%;
    	background-repeat: no-repeat;
    	background-image: url(../../pages/Hotsale/imgs/grape.jpg);
	}
	
	.theme-prd-right{
		width: 50%;
		float: left;
		display: inline-block;
    	height: 8.5rem;
    	margin-top: 1rem;
    	margin-left: 1rem;
	}
	
	.theme-prd-right>p{
		white-space: nowrap;
    	text-overflow: ellipsis;
    	overflow: hidden;
    	line-height: 20px;
    	color: #000;
    	font-size: 12px;
    	/*text-align: center;*/
	}
	.theme-prd-right>p:nth-child(3)>span:nth-child(1){
		font-size: 18px;
		color: #078b35;
		font-style: italic;
	}
	
	.theme-prd-right>p:nth-child(3)>span:nth-child(2){
		font-size: 18px;
		color: #797879;
		font-style: italic;
	}
	.theme-prd-right>p:nth-child(3)>span:nth-child(3){
		color: #797879;
		font-style: italic;
	}
	.theme-prd-right>div{
		background-color: #078b35;
		width: 9.4rem;
    	height: 2.8rem;
    	line-height: 2.8rem;
    	border-radius: 1.4rem;
    	color: #FFF;
    	text-align: center;
    	margin: 0 auto;
    	box-shadow: 0 2px 2px 0 #FFF;
	}
</style>