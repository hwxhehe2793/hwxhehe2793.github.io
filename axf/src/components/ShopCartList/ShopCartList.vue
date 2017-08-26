<template>
	<div class="list_warp">
		<div class="list_left" @click="addcollectlist()" :class="{'active':this.$store.getters.activeheart}">收藏</div>
		<div class="list_right">
			添加商品：
			<div class="right_warp">
				<div class="minus" @click="redCartNumber()"></div>
				<span class="num">{{prdnum}}</span>
				<div class="plus" @click="addcartnbumber()"></div>
			</div>
			<shop-cart></shop-cart>
		</div>
	</div>
</template>

<script>
import ShopCart from 'components/ShopCart/ShopCart'
	export default {
		
		computed:{
			
			prdnum () {
				return	this.$store.getters.prdnum
			}
		
		},
		
		methods:{
			addcartnbumber () {
				this.$store.dispatch('addCartNumber',this.$store.state.detprdarr)
  			},
  			
  			redCartNumber () {
				if(this.$store.state.detprdarr.num!=0){
  					this.$store.dispatch('redCartNumber',this.$store.state.detprdarr)
				}
  				
  			},
  			
  			addcollectlist () {
  				console.log(this.$store.getters.activeheart)
  				if(this.$store.getters.activeheart == false){
  					this.$store.dispatch('addCollectList',this.$store.state.detprdarr)
  				}else{
  					this.$store.dispatch('redCollectList',this.$store.state.detprdarr)
  				}
  				
  			}
  		
		}, 	
		
		components:{
			ShopCart
		}
	}
</script>

<style scoped>
	.list_warp{
		width: 100%;
		height: 5rem;
		background-color: #fff;
		border: 1px solid #e0e0e0;
		position: fixed;
		bottom: 0;
	}
	
	.list_left{
		width: 4rem;
		height: 1.8rem;
		font-size: 1rem;
		display: inline-block;
		background-image: url(./images/heart.png);
		background-repeat: no-repeat;
		background-position: top center;
		background-size: 1.8rem auto;
		padding-top: 1.7rem;
		line-height: 1.8rem;
		text-align: center;
		margin-top: .9rem;
		float: left;

	}
	
	.list_left.active{
		background-image: url(./images/yellow-heart.png);
	}
	
	.list_right{
		width: 22.1rem;
		height: 5rem;
		display: inline-block;
		float: right;
		font-size: 1.4rem;
		line-height: 5rem;
		position: relative;
	}
	
	
	.right_warp{
		width: 35%;
		height: 5rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: absolute;
		top: 0;
		right: 30%;
	}
	
	.minus{
		width: 2.6rem;
		height: 2.6rem;
		border: 1px solid #e0e0e0;
		border-radius: 50%;
		display: inline-block;
		float: left;
		background-image: url(./images/addorred.png);
		background-repeat: no-repeat;
		background-position: left center;
		background-size: 200% 100%;
		background-color: #ff4300
	}
	
	.num{
		width: 2.1rem;
		height: 5rem;
		display: inline-block;
		text-align: center;
	}
	
	.plus{
		width: 2.6rem;
		height: 2.6rem;
		border: 1px solid #e0e0e0;
		border-radius: 50%;
		display: inline-block;
		float: left;
		background-image: url(./images/addorred.png);
		background-repeat: no-repeat;
		background-position: right center;
		background-size: 200% 100%;
		background-color: #ff4300
	}
</style>