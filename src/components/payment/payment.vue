<template>
	<div id="payment">
		<div class="support" @click="toSupport">
			<span>联系客服</span>
		</div>
		<div class="buy" @click="toBuy">
			<span>立即购买</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				//title:'标题'
			}
		},
		props:{
//			title:'',
//			back:{
//				type:Boolean,
//				dafult:true
//			},
//			home:{
//				type:Boolean,
//				dafult:true
//			}
		},
		methods:{
			toBuy(){
				this.$router.push('/buy')
			},
			toSupport(){
				this.$router.push('/support');
			}
		}
	}
</script>

<style lang="less" scoped>
	#payment{
		width: 100%;
		height: 1.88rem;
		position: fixed;
		bottom: 0;
		z-index: 888;
		div {
			width: 50%;
			height: 100%;
			float: left;
			display: flex;
			justify-content: center;
		}
		span {
			display: inline-block;
			height: 100%;
			text-align: center;
		}
		.buy {
			color: white;
			background-color: rgb(4,209,2);
			span {
				line-height: 1.88rem;
			}
		}
		.support {
			color: rgb(170,170,170);
			background-color: white;
			span {
				background-image: url(./img/Customer-service@2x.png);
				background-repeat: no-repeat;
				background-position: top;
				background-size: 40%;
				line-height: 2.8rem;
			}
		}
	}
	
	
</style>