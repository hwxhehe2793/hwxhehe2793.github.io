<template>
	<div class="secproducts">
		<header-top title='二手精品'>
			<span class="homepage">首页</span>
		</header-top>
		<div class="flexslider">
			<img src="../../assets/imgs/secprd/slider2x.png"/>
		</div>
		<div class="aftersale">
			<p>品质保证</p>
			<ul>
				<li>
					<img src="../../assets/imgs/secprd/returnsales2x.png"/>
				</li>
				<li>
					<img src="../../assets/imgs/secprd/safeguard@2x.png"/>
				</li>
				<li>
					<img src="../../assets/imgs/secprd/supplyofgoods@2x.png"/>
				</li>
			</ul>
		</div>
		<div class="hotsale">
			<p class="hotsale_wall">热卖墙</p>
			<ul>
				<li>
					<div class="product_img">
						<img src="../../assets/imgs/secprd/iPhone8@2x.png"/>
					</div>
					<div class="commodity_details">
						<p class="price">6880</p>
						<p class="phone_model">苹果 iPhone 8</p>
						<p class="hashtags">
							<span>九成新</span>
							<span>64G</span>
							<span>全网通</span>
						</p>
					</div>
				</li>
				<li>
					<div class="product_img">
						<img src="../../assets/imgs/secprd/iPhone8@2x.png"/>
					</div>
					<div class="commodity_details">
						<p class="price">6880</p>
						<p class="phone_model">苹果 iPhone 8</p>
						<p class="hashtags">
							<span>九成新</span>
							<span>64G</span>
							<span>全网通</span>
						</p>
					</div>
				</li>
				<li>
					<div class="product_img">
						<img src="../../assets/imgs/secprd/iPhone8@2x.png"/>
					</div>
					<div class="commodity_details">
						<p class="price">6880</p>
						<p class="phone_model">苹果 iPhone 8</p>
						<p class="hashtags">
							<span>九成新</span>
							<span>64G</span>
							<span>全网通</span>
						</p>
					</div>
				</li>
				<li>
					<div class="product_img">
						<img src="../../assets/imgs/secprd/iPhone8@2x.png"/>
					</div>
					<div class="commodity_details">
						<p class="price">6880</p>
						<p class="phone_model">苹果 iPhone 8</p>
						<p class="hashtags">
							<span>九成新</span>
							<span>64G</span>
							<span>全网通</span>
						</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="advertising">
			<img src="../../assets/imgs/secprd/aaadvertising@2x.png"/>
		</div>
		<footer class="brand">
			<p class="brand_wall">品牌墙</p>
			<ul>
				<li>
					<!--<img src="../../assets/imgs/secprd/358baa46c9ee8b754807e969874e514c@2x.png"/>-->
				</li>
				<li>
					<!--<img src="../../assets/imgs/secprd/3b03eb7e6bba80832cf9546d3ca30183@2x.png"/>-->
				</li>
				<li>
					<!--<img src="../../assets/imgs/secprd/dbd8f2ecc39cf7bc49fb0ff7cf660262@2x.png"/>-->
				</li>
				<li>
					<!--<img src="../../assets/imgs/secprd/a88d1b94be545c7394f24e68c9b85eaa@2x.png"/>-->
				</li>
				<li>
					<!--<img src="../../assets/imgs/secprd/aacbb5b30aef44cb612b354b727d8fc1@2x.png"/>-->
				</li>
				<li>
					<!--<img src="../../assets/imgs/secprd/963c9828adff600ca5360adcdaab085b@2x.png"/>-->
				</li>
			</ul>
		</footer>
	</div>
	
</template>

<script>
	import headerTop from '@/components/header/header'

	export default {
		data() {
			return {

			}
		},

		methods: {

		},

		components: {
			headerTop,
		},
		mounted() {

		},
	}
</script>

<style lang="less" scoped>
	.clearfix:after {
		content: ".";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden
	}

	.secproducts {
		background-color: rgb(240,240,240);
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: scroll;
		.homepage{
			font-size: xx-small;
		}
		.flexslider {
			width: 100;
			height: 6rem;
			background-color: white;
			margin-top: 2rem;
			margin-bottom: 0.21rem;
			img {
				width: 100%;
			}
		}
		.aftersale {
			width: 100%;
			height: 5.9rem;
			background-color: white;
			margin-bottom: 0.21rem;
			p {
				width: 100%;
				height: 1.34rem;
				text-align: center;
				font-size: 0.7rem;
				line-height: 1.34rem;
			}
			ul {
				width: 100%;
				display: flex;
				justify-content: space-between;
			}
			li {
				width: 5.18rem;
				height: 4.13rem;
				img {
					width: 100%;
				}
			}
		}
		.hotsale {
			width: 100%;
			background-color: white;
			margin-bottom: 0.21rem;
			.hotsale_wall {
				width: 100%;
				height: 1.25rem;
				line-height: 1.25rem;
				text-align: center;
			}
			
			
			li {
				display: inline-block;
				margin-left: 0.34rem;
				margin-bottom: 0.28rem;
				border: 1px solid rgb(229,229,229);
				img {
					width: 100%;
				}
			}
			.product_img {
				width: 7.3rem;
				height: 6.1rem;
				background-color: white;
				border-bottom: 1px solid rgb(229,229,229);
			}
			
			.commodity_details{
				width: 7.3rem;
				p {
					width: 100%;
					text-align: center;
				}
				.price {
					color: rgb(4,209,2);
					height: 1.1rem;
					line-height: 1.1rem;
				}
				.phone_model{
					height: 1.1rem;
					line-height: 1.1rem;
				}
				.hashtags {
					width: 100%;
					padding-bottom: 0.38rem;
					span {
						display: inline-block;
						border: 1px solid rgb(170,170,170);
						color: rgb(103,103,103);
						padding: 0.21rem;
						font-size: 0.1rem;
					}
				}
			}
		}
		
		.advertising {
			width: 100%;
			height: 6.18rem;
			background-color: white;
			margin-bottom: 0.21rem;
			img {
				width: 100%;
				height: 100%;
			}
		}
		
		.brand {
			width: 100%;
			height: 7.85rem;
			background-color: white;
			.brand_wall {
				width: 100%;
				height: 1.25rem;
				line-height: 1.25rem;
				text-align: center;
			}
			ul {
				width: 100%;
			}
			li {
				width: 4.88rem;
				height: 2.97rem;
				border: 1px solid rgb(229,229,229);
				margin-left: 0.33rem;
				margin-bottom: 0.3rem;
				float: left;
				background-color: white;
				background-image: url("../../assets/imgs/secprd/358baa46c9ee8b754807e969874e514c@2x.png");
				background-size: contain;
				background-repeat: no-repeat;
				background-position: center;
			}
		}
		
	}
</style>