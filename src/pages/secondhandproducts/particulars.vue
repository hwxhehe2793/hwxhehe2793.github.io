<template>
	<div class="particulars">
		<header-top title='苹果 iPhone 7'>
			<span class="homepage">首页</span>
		</header-top>
			<div class="product_img"></div>
		<div class="presentation">
			<div class="pre_wall">
				<p class="phone_name">苹果 iPhone7</p>
				<p class="phone_describe">
					<span>九九新</span>
					<span>金色</span>
					<span>32G</span>
					<span>国行</span>
					<span>全网通</span>
					<span></span>
				</p>
				<p class="phone_price">￥3833.00<span class="sell">已经售出1台</span></p>
			</div>
		</div>
		<div class="property">
			<p>
				<span>机身颜色</span>
				<span>容量</span>
				<span>网络制式</span>
				<span>新旧程度</span>
			</p>
		</div>
		<div class="tab">
				<ul>
					<li :class="{'spanactive': activespan === item.classify_id}">
						<span class="test">产品参数</span>
					</li>
					<li>
						<span>产品评价</span>
					</li>
					<li>
						<span>售后服务</span>
					</li>
				</ul>
				<div class="parameter"></div>
				<div class="evaluate"></div>
				<div class="aftersales"></div>
		</div>
		<payment></payment>
	</div>
</template>

<script>
	import headerTop from '@/components/header/header'
	import payment from '@/components/payment/payment'
	export default {
		data() {
			return {
				activespan:'parameter',
			}
		},

		methods: {
			showOrhidden () {
				
			}
		},

		components: {
			headerTop,
			payment,
		},
		mounted() {

		},
	}
</script>

<style lang="less" scoped>
	.particulars {
		background-color: rgb(240,240,240);
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: scroll;
		.product_img {
			margin-top: 2rem;
			width: 100%;
			height: 7.9rem;
			border-bottom: 1px solid whitesmoke;
			background-color: white;
		}
		.presentation {
			width: 100%;
			/*height: 3.41rem;*/
			background-color: white;
			padding: 0.49rem 0.44rem;
			margin-bottom: 0.21rem;
		}
		.pre_wall {
			width: 100%;
			height: 100%;
			p {
				margin-bottom: 0.45rem;
			}
			.phone_name {
				font-size: 0.65rem;
			}
			.phone_describe {
				color: rgb(103,103,103);
			}
			.phone_price {
				color: rgb(4,209,2);
				.sell {
					float: right;
					color: rgb(170,170,170);
				}
			}
		}
		
		
		.property{
			width: 100%;
			height: 1.45rem;
			background-color: white;
			display: flex;
			align-items: center;
			padding: 0.45rem 0.45rem;
			margin-bottom: 0.21rem;
			span {
				margin-left: ;
			}
		}
		
		.tab {
			width: 100%;
			height: 24.3rem;
			background-color: white;
			position: relative;
			li {
				width: 33.33%;
				height: 1.43rem;
				float: left;
				text-align: center;
				line-height: 1.43rem;
			}
			.spanactive{
				border-bottom: 2px solid rgb(4,209,2);
				border-radius: 0.5rem;
				color: rgb(4,209,2);
			}
			.test{
				border-bottom: 2px solid rgb(4,209,2);
				/*border-radius: 0.5rem;*/
				padding: 0.2rem;
				color: rgb(4,209,2);
			}
			div {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 1.43rem;
			}
			.parameter {
				background-color: yellow;
			}
			.evaluate {
				background-color: green;
			}
			.aftersales {
				background-color: blue;
			}
		}
	}
</style>