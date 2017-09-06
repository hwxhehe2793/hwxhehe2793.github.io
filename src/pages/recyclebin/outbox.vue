<template>
	<div class="outbox">
		<header-top title="回收箱" home></header-top>
		<div class="fixed-top-div"></div>
		<div class="outbox_top">
			<div class="top_left">
				<i></i>
				<p>扫码开箱</p>
				<span></span>
			</div>
			<div class="top_con">
				<i></i>
				<p>我要卖废品</p>
				<span></span>				
			</div>
			<div class="top_right">
				<i></i>
				<p>快速付款</p>
			
			</div>
		</div>
		
		<!-- 扫码登录   -->
		
		<div class="scancode">
			<div class="scan_ban">
				<img src="../../assets/imgs/recycle/回收箱_02.png"/>
			</div>
		</div>
		
	</div>
</template>

<script>
	import headerTop from '@/components/header/header'
	
	export default{
		data(){
			return{
				
			}
		},
		components:{
			headerTop,
		},
		mounted(){
			
			
		},
	}
</script>

<style lang="less" scoped>
.outbox{
	width: 100%;
	height: 100%;
	.outbox_top{
		height: 2rem;
		padding: 0 0.43rem;
		div{
			display: inline-block;
			height: 100%;
			i{
				float: left;
				height: 100%;
			}
			p{
				float: left;
				height: 100%;
				line-height: 2rem;
				
			}
			span{
				float: left;
				height: 100%;
			}
		}
		.top_left{
			width: 5.2rem;
			i{
				width: 1.6rem;
				background: url(../../assets/imgs/recycle/Scan-code@2x.png)no-repeat 70% 50%;
				background-size:0.6rem 0.55rem ;
			}
			p{
				width: 2.85rem;
				color: #04d102;
			}
			span{
				width: 0.7rem;
				background: url(../../assets/imgs/recycle/next@2x.png)no-repeat center center;
				background-size: 0.7rem 0.38rem;
			}
		}
		.top_con{
			width: 5.46rem;
			i{
				width: 1.4rem;
				background: url(../../assets/imgs/recycle/Sell@2x.png)no-repeat 70% 50%;
				background-size:0.6rem 0.55rem ;
			}
			p{
				width: 3.2rem;
				color: #aaaaaa;
			}
			span{
				width: 0.7rem;
				background: url(../../assets/imgs/recycle/next@2x.png)no-repeat center center;
				background-size: 0.7rem 0.38rem;
			}			
		}
		.top_right{
			width: 4.15rem;
			i{
				width: 1.4rem;
				background: url(../../assets/imgs/recycle/payment@2x.png)no-repeat 70% 50%;
				background-size:0.6rem 0.55rem ;
			}
			p{
				color: #aaa;
			}
		}
	}
}
</style>