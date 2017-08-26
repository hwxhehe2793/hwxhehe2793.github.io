<template>
	<div class="details">
		<header-gray></header-gray>
		<div class="picture" :style="{backgroundImage:'url(\''+ siteArr.imgs.big+'\')'}"></div>
		<div class="recommend">
			<p>{{siteArr.title}}</p>
			<p>￥{{siteArr.price}}</p>
		</div>
		<div class="product-properties">
			<div class="title">商品详细</div>
			<div class="pp">
				<span>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌</span>
				<span>{{siteArr.brand}}</span>
			</div>
			<div class="cpgg">
				<span>产品规格</span>
				<span>{{siteArr.unit}}ml</span>
			</div>
		</div>
		<div class="block">
			<div class="title_pic">
				<div>图文详情</div>
			</div>
			<p>温馨提示&nbsp;:</p>
			<div class="passage_one">商品签收后，如有问题请您在48小时内反馈在线人工客服、电话4008484842、或关注微信beequick24联系，并将商品及包装保留好。您可在“我的”“全部订单”中找到需要反馈的订单，在订单中点击“申请售后”描述问题并上传相关图片。</div>
			<div class="passage_two">由于部分包装更换较为频繁，因此您收到的货品可能与图片不完全一致，请您以收到的商品实物为准，同时我们会尽量做到及时更新，由此给您带来的不便请多多谅解，谢谢！</div>
			<img src="../../pages/Details/imgs/beff.jpg" />
			<div class="bottom_div"></div>
		</div>
		<shop-cart-list></shop-cart-list>
	</div>

</template>

<script>
	import HeaderGray from 'components/Header-gray/Header-gray'
	import ShopCartList from 'components/ShopCartList/ShopCartList'
	export default {
		created() {
			//获取bannar页数据
			if(this.$route.query.whose === 'bannar') {
				let bannarUrl = 'http://localhost:8081/bannar'
				this.$http.get(bannarUrl)
					.then((data) => {
						this.site = data.data.product
					})
			} else if(this.$route.query.whose === 'hotsale') {
				let hotsaleUrl = 'http://localhost:8081/classifys?id=' + this.$route.query.id
				this.$http.get(hotsaleUrl)
					.then((data) => {
						this.site = data.data[0].products
					})
			} else if(this.$route.query.whose === 'homeproducts') {
				let productsUrl = 'http://localhost:8081/classifys?id=' + this.$route.query.id
				this.$http.get(productsUrl)
					.then((data) => {
						this.site = data.data[0].products
						console.log(this.site)
					})
			} else if(this.$route.query.whose === 'catproducts') {
				let productsUrl = 'http://localhost:8081/classifys?id=' + this.$route.query.id
				this.$http.get(productsUrl)
					.then((data) => {
						this.site = data.data[0].products
						console.log(this.site)
					})
			} else if(this.$route.query.whose === 'shopproducts') {
				let productsUrl = 'http://localhost:8081/cart?id=' + this.$route.query.id
				this.$http.get(productsUrl)
					.then((data) => {
						this.site = data.data[0]
						console.log(this.site)
					})
			}

		},

		data() {
			return {
				site: [],
				whose: null
			}
		},

		computed: {
			siteArr() {
				//遍历site数组，拿到bannar页面商品详细数据
				if(this.$route.query.whose === 'bannar') {
					if(this.site.length > 0) {
						for(let i = 0; i < this.site.length; i++) {
							if(this.site[i].product_id == this.$route.query.product_id) {
								this.$store.state.detprdid = this.site[i].product_id
								this.$store.state.detprdarr = this.site[i]
								return this.site[i]
							}
						}
					} else {
						return {
							imgs() {}
						}
					}
				} else if(this.$route.query.whose === 'hotsale') {
					if(this.site.length > 0) {
						for(let i = 0; i < this.site.length; i++) {
							if(this.site[i].product_id == this.$route.query.product_id) {
								this.$store.state.detprdid = this.site[i].product_id
								this.$store.state.detprdarr = this.site[i]
								return this.site[i]
							}
						}
					} else {
						return {
							imgs() {}
						}
					}
				} else if(this.$route.query.whose === 'homeproducts') {
					if(this.site.length > 0) {
						for(let i = 0; i < this.site.length; i++) {
							if(this.site[i].product_id == this.$route.query.product_id) {
								this.$store.state.detprdid = this.site[i].product_id
								this.$store.state.detprdarr = this.site[i]
								return this.site[i]
							}
						}
					} else {
						return {
							imgs() {}
						}
					}
				} else if(this.$route.query.whose === 'catproducts') {
					if(this.site.length > 0) {
						for(let i = 0; i < this.site.length; i++) {
							if(this.site[i].product_id == this.$route.query.product_id) {
								this.$store.state.detprdid = this.site[i].product_id
								this.$store.state.detprdarr = this.site[i]
								return this.site[i]
							}
						}
					} else {
						return {
							imgs() {}
						}
					}
				} else if(this.$route.query.whose === 'shopproducts') {
						if(this.site.product_id == this.$route.query.product_id) {
							this.$store.state.detprdid = this.site.product_id
							this.$store.state.detprdarr = this.site
							return this.site
						} else {
							return {
								imgs() {}
							}
						}
				}
			}
		},
		
//		mounted () {
//			this.$store.state.collectproduct = this.siteArr
//		},

		components: {
			HeaderGray,
			ShopCartList
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../common/styles/variable.less");
	@import url("../../common/styles/mixin.less");
	.bottom_div {
		width: 100%;
		height: 5rem;
		float: left;
	}
	
	.details {
		overflow: scroll;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	
	.picture {
		width: 100%;
		background-image: url(../../pages/Details/imgs/vita.jpg);
		background-position: center center;
		background-size: cover;
		position: relative;
		overflow: hidden;
		padding-bottom: 100%;
	}
	
	.recommend>P:nth-child(1) {
		color: #292d33;
		font-size: 2.3rem;
		line-height: normal;
		height: auto;
		text-align: center;
		text-indent: 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	.recommend>P:nth-child(2) {
		font-size: 2.2rem;
		font-weight: 700;
		color: #f40;
		text-align: center;
		padding: 1rem 0 3rem 0;
	}
	
	.title {
		width: 100%;
		background-image: url(../../pages/Details/imgs/hf.png);
		background-size: auto .2rem;
		text-align: center;
		color: #e0bd6a;
		background-repeat: no-repeat;
		background-position: center;
		font-size: 1.4rem;
		margin-bottom: 1.5rem;
	}
	
	.product-properties>div:nth-child(2) {
		width: 100%;
		line-height: 3rem;
	}
	
	.pp>span:nth-child(1) {
		width: 27%;
		display: inline-block;
		text-align: center;
		color: #848c99;
		font-size: 1.4rem;
	}
	
	.pp>span:nth-child(2) {
		font-size: 1.4rem;
	}
	
	.cpgg>span:nth-child(1) {
		width: 27%;
		display: inline-block;
		text-align: center;
		color: #848c99;
		font-size: 1.4rem;
	}
	
	.cpgg>span:nth-child(2) {
		font-size: 1.4rem;
	}
	
	.title_pic {
		width: 100%;
		height: 5rem;
		display: flex;
		align-items: center;
		-webkit-box-align: center;
		-webkit-box-pack: center;
		justify-content: center;
	}
	
	.title_pic>div {
		font-size: 1.4rem;
		margin: 0 1.4rem;
		padding: 0;
	}
	
	.title_pic:before {
		content: '';
		display: block;
		width: 4.4rem;
		border-top: .1rem solid #c9c9c9;
		border-bottom: .1rem solid #d6d6d6;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
	}
	
	.title_pic:after {
		content: '';
		display: block;
		width: 4.4rem;
		border-top: .1rem solid #c9c9c9;
		border-bottom: .1rem solid #d6d6d6;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
	}
	
	.block p {
		font-weight: bold;
		font-size: 14px;
	}
	
	.passage_one {
		color: red;
		font-size: 14px;
		line-height: 1.5;
		font-weight: bold;
	}
	
	.passage_two {
		font-size: 14px;
		line-height: 1.5;
		font-weight: bold;
	}
	
	.block img {
		width: 100%;
		vertical-align: middle;
	}
</style>