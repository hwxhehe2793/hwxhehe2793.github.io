<template>
	<router-link to="/shopcart">
		<div class="shop_cart">
			<div class="prd_number" :class="{'active':totalNum==0}">{{totalNum}}</div>
		</div>
	</router-link>
</template>

<script>
	export default {
	computed:{
		totalNum () {
		return	this.$store.getters.totalNum
		}
	}
}
</script>

<style lang="less" scoped>
	@import url("../../common/styles/variable.less");
	@import url("../../common/styles/mixin.less");
	.shop_cart {
		width: 5.4rem;
		height: 5.4rem;
		border: solid .3rem #fff;
		border-radius: 50%;
		z-index: 3;
		position: fixed;
		right: .6rem;
		bottom: .7rem;
		background-color: #ffd600;
		background-position: center;
		background-repeat: no-repeat;
		background-size: 80%;
		background-image: url("./images/gwc.png");
	}
	
	.prd_number {
		position: absolute;
		top: 0;
		right: 0;
		background-color: #f40;
		color: #fff;
		line-height: 1.8rem;
		width: 1.8rem;
		text-align: center;
		font-size: 1rem;
		border-radius: 50%;
	}
	
	.prd_number.active{
		display: none;
	}
</style>