<template>
	<div id="home">
		<div class="home_box">
			<header>
				<section></section>
				<div>
					<p>
						<i></i>
						<b>搜索你需要的内容</b>
					</p>
				</div>
				<span class="user">
					<i></i>
					<p>个人中心</p>
				</span>
			</header>
			
			<div class="index_content" id="home1">
				<div class="box">
					<template>
						<swiper :options="swiperOption" class="swiper-box">
						    <swiper-slide class="swiper-item"><img src="../../assets/imgs/index/logo.png"/></swiper-slide>
						    <swiper-slide class="swiper-item"><img src="../../assets/imgs/index/logo.png"/></swiper-slide>
						    <swiper-slide class="swiper-item"><img src="../../assets/imgs/index/logo.png"/></swiper-slide>
						    <swiper-slide class="swiper-item"><img src="../../assets/imgs/index/logo.png"/></swiper-slide>
						    <div class="swiper-pagination" slot="pagination"></div>
						</swiper>
					</template>
					<div class="index_box">
						
						<div class="news">
							<i></i>
							<span>头条：如何培养孩子的环保意识？</span>
						</div>
						
						<div class="buy_box">
							<div class="buy_phone">
								<h3>卖手机</h3>
								<h4>拒绝脸盆换手机</h4>
								<div class="phone">
									<img src="../../assets/imgs/index/phone.png"/>
								</div>
							</div>
							<div class="domestic">
								<div class="appliances">
									<div class="img_aps">
										<img src="../../assets/imgs/index/appliances.png"/>
									</div>
									<div class="font_aps">
										<h3>卖家电</h3>
										<h4>丢掉麻烦，不如卖了</h4>
									</div>									
								</div>
								<div class="junk">
									<div class="font_junk">
										<h3>卖废品</h3>
										<h4>这些也值钱！</h4>
									</div>												
									<div class="img_junk">
										<img src="../../assets/imgs/index/junk.png"/>
									</div>
								</div>
							</div>
						</div>
						
						<div class="host_box">
							<div class="host_news">
								<div class="host_title">
									<i></i>
									<h3>热卖产品</h3>									
								</div>
								<div class="title_con">
									<h3>用户 188****766 卖掉了手机苹果iPhone8</h3>
								</div>
							</div>
							<div class="details">
								<div class="details_top">
									<i>
										<img src="../../assets/imgs/index/Iphone.png"/>
									</i>	
									<ul>
										<li>
											<h3>苹果 iPhone8</h3>
											<p>最高回收价 <span>2888</span></p>
										</li>
										<li class="btn_box">
											<div class="details_btn">
												马上卖掉
											</div>											
										</li>
									</ul>
								</div>
								<div class="details_top">
									<i>
										<img src="../../assets/imgs/index/Iphone.png"/>
									</i>	
									<ul>
										<li>
											<h3>苹果 iPhone8</h3>
											<p>最高回收价 <span>2888</span></p>
										</li>
										<li class="btn_box">
											<div class="details_btn">
												马上卖掉
											</div>											
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="details_con">
							<div>
								<ul>
									<li class="deta">苹果iPad Ari 1</li>
									<li class="deta2">最高回收价<span>3288</span></li>
								</ul>
								<i class="deta_img">
									<img src="../../assets/imgs/index/ipad.png"/>
								</i>
							</div>
							<div>
								<ul>
									<li class="deta">苹果iPad Ari 1</li>
									<li class="deta2">最高回收价<span>3288</span></li>
								</ul>
								<i class="deta_img">
									<img src="../../assets/imgs/index/ipad.png"/>
								</i>								
							</div>
							<div>
								<ul>
									<li class="deta">苹果iPad Ari 1</li>
									<li class="deta2">最高回收价<span>3288</span></li>
								</ul>
								<i class="deta_img">
									<img src="../../assets/imgs/index/ipad.png"/>
								</i>								
							</div>
							<div>
								<ul>
									<li class="deta">苹果iPad Ari 1</li>
									<li class="deta2">最高回收价<span>3288</span></li>
								</ul>
								<i class="deta_img">
									<img src="../../assets/imgs/index/ipad.png"/>
								</i>								
							</div>
						</div>
						<div class="service_con">
							<div>
								<ul>
									<li class="font_service">手机快修</li>
									<li class="font_service1">舍不得卖，就好好修</li>
								</ul>
								<i></i>
							</div>
							<div>
								<ul>
									<li class="font_service">手机快修</li>
									<li class="font_service1">舍不得卖，就好好修</li>
								</ul>
								<i ref="img"></i>							
							</div>
						</div>
						<div class="recovery">
							<div>
								<img src="../../assets/imgs/index/web端主页_02.png"/>
							</div>
							<div>
								<img src="../../assets/imgs/index/web端主页_04.png"/>
							</div>
							<div>
								<img src="../../assets/imgs/index/web端主页_06.png"/>
							</div>
						</div>
						<div class="topic">
							<div class="topic_top">
								<i></i>
								<h3>热门话题</h3>								
							</div>
							<ul>
								<li><p>iPhone 8 如何维修？</p></li>
								<li><p>iPhone 8 如何维修？</p></li>
								<li><p>iPhone 8 如何维修？</p></li>
								<li><p>iPhone 8 如何维修？</p></li>
								<li><p>iPhone 8 如何维修？</p></li>
								<li><p>iPhone 8 如何维修？</p></li>
								<li><p>iPhone 8 如何维修？</p></li>
								<li><p>iPhone 8 如何维修？</p></li>
							</ul>
						</div>
						<footer>
							<div class="footer">
								<ul>
									<li>
										<i class="footer_one"></i>
										<p>订单中心</p>
									</li>
									<li>
										<i class="footer_two"></i>
										<p>回收加盟</p>										
									</li>
									<li>
										<i class="footer_three"></i>
										<p>回收加盟</p>										
									</li>
									<li>
										<i class="footer_four"></i>
										<p>联系客服</p>
									</li>
								</ul>
							</div>
						</footer>
					</div>
				</div>
			</div>			
		</div>

	</div>
</template>

<script>
import bScroll from 'better-scroll'	

import { swiper, swiperSlide } from 'vue-awesome-swiper'  

	export default{
		data(){
			return{
				swiperOption: {
		          	pagination: '.swiper-pagination',
		          	direction: 'horizontal',
		          	initialSlide :1,
		          	slidesPerView: 1,
		          	paginationClickable: true,
		          	autoplayDisableOnInteraction : false,
		          	spaceBetween: 1,
		          	loop:true,
		         	mousewheelControl: true,
		         	speed:500,
		          	autoplay:2000,
		        },
				scroll:null,
			}
		},
		 components: {
		 	swiper,
		 	swiperSlide
		 },        
		mounted(){
			this.scroll = new bScroll('#home1',{
				bounce: false,
				click: true,
			})
			this.$nextTick(()=>{
				
			})
		}
	}
</script>

<style lang="less">

header{
	position: absolute;
	z-index: 9999;
	width: 100%;
	height: 2rem;
	display: flex;
	background: #04D102;
	section{
		flex: 1;
	}
	div{
		flex: 2.8;
		display: flex;
		align-items: center;
		-webkit-box-align: center;
		justify-content: space-around;		
		p{
			width: 100%;
			height: 1.28rem;
			background: #fff;
			border-radius: 0.2rem;
			display: flex;
			align-items: center;
			-webkit-box-align: center;
			/*justify-content: space-around;*/				
			i{
				width: 1.49rem;
				height: 100%;
				background: url(../../assets/imgs/index/search@2x.png) no-repeat 50%;
				background-size:0.64rem 0.64rem ;
			}
			b{
				font-size: 0.56rem;
				color: #aaaaaa;
				margin-left: 1rem;
			}
		}
		
	}
	.user{
		flex: 1;
		i{
			display: block;
			height: 1.28rem;
			width: 100%;
			background: url(../../assets/imgs/index/Personal@2x.png) no-repeat 50%;
			background-size:0.68rem 0.8rem ;
		}
		p{
			font-size: 0.51rem;
			color: #fff;
			text-align: center;
		}
	}
}

.index_content{
	position: absolute;
	left: 0;
	right: 0;
	top: 2rem;
	bottom: 0rem;
	/*overflow: hidden;*/
	.swiper-box {
		position: relative;
		width: 100%;
		margin: 0 auto;
		height:5.44rem ;
		/*overflow: hidden;*/
		z-index:1;
		img{
			width:100%;
		}
	}	
	.swiper-wrapper{
		position: relative;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	.index_box{
		width: 100%;
		height: 52rem;
		background: #efefef;
		/*overflow: hidden;*/
		.news{
			height: 1.4rem;
			background: #fff;
			margin: 0 1px;
			margin-top: 0.21rem;
			padding-left: 0.85rem;
			display:flex;
			i{
				flex: 1;
				background: url(../../assets/imgs/index/headlines@2x.png) no-repeat center left;
				background-size: 0.6rem 0.5rem;
			}
			span{
				flex: 18;
				padding: 0.4rem 0;
				color: #141414;
			}
		}
		.buy_box{
			height: 6.6rem;
			background: #fff;
			border-top: 1px solid #e5e5e5;
			display: flex;
			.buy_phone{
				flex: 1;
				border-right: 1px solid #e5e5e5;
				h3{
					height: 1.24rem;
					text-align: center;
					line-height: 1.9rem;
					color: #010101;
				}	
				h4{
					height: 1.36rem;
					text-align: center;
					line-height: 1.36rem;
					color: #717171;
					font-weight: 100;
				}
				.phone{
					height: 3.96rem;
					display: flex;
					justify-content: space-around;
					img{
						width: 2.68rem;
						height: 3.75rem;
					}
				}
			}
			.domestic{
				flex: 1;
				.appliances{
					height: 3.3rem;
					border-bottom: 1px solid #e5e5e5;
					.img_aps{
						float: left;
						width: 3.1rem;
						height: 3.3rem;
						display: flex;
						justify-content: space-around;
						align-items:center;
						img{
							width: 2.8rem;
							height: 2.15rem;
						}
					}
					.font_aps{
						float: left;
						width: 4.76rem;
						height: 3.3rem;
						box-sizing: border-box;
						-webkit-box-sizing: border-box;
						-moz-box-sizing: border-box;
						
						/*display: flex;
						flex-direction:column;					
						align-items: center;
						-webkit-box-align: center;	
						justify-content: space-around;*/
						h3{
							margin-top: 0.68rem;
							line-height: 0.9rem;
							width: 100%;
							text-align: center;
						}
						h4{
							line-height: 0.8rem;
							width: 100%;
							font-weight:100 ;
							color:#717171 ;
							text-align: center;
						}
					}
				}
				.junk{
					height: 3.3rem;
					display: flex;
					.font_junk{
						flex: 1.15;
						h3{
							margin-top: 0.68rem;
							text-align: center;
							line-height: 1.1rem;
						}
						h4{
							text-align: center;
							line-height: 1.1rem;
							font-weight: 100;
							color:#717171 ;
						}
					}
					.img_junk{
						flex: 1;
						display: flex;
						justify-content: space-around;
						align-items:center;
						img{
							height: 3.2rem;
							height: 2.3rem;
						}
					}
				}
			}
		}
		.host_box{
			width: 100%;
			margin-top: 0.21rem;
			background: #fff;
			.host_news{
				width: 100%;
				/*height: 1.4rem;*/
				display: flex;
				.host_title{
					flex: 1;
					i{
						float: left;
						width: 1rem;
						height: 100%;
						background: url(../../assets/imgs/index/selling@2x.png) no-repeat center right;
						background-size:0.5rem 0.59rem ;
					}
					h3{
						float: left;
						width: 3rem;
						height: 100%;
						padding: 0.4rem;
					}
				}
				.title_con{
					flex: 3;
					h3{
						padding: 0.4rem;
						color: #717171;
						font-weight: 100;
					}
				}
			}
			.details{
				width: 100%;
				height: 7.5rem;
				border-top: 1px solid #e5e5e5;
				display: flex;
				.details_top{
					flex: 1;
					border-right: 1px solid #e5e5e5;
					i{
						display: block;
						width: 100%;
						height: 4rem;
						display: flex;
						justify-content: space-around;
						align-items:center;
						img{
							width: 2.98rem;
							height: 2.88rem;
						}
					}
					ul{
						width: 100%;
						li{
							width: 100%;
							height: 1.7rem;
							h3{
								height: 50%;
								line-height: .81rem;
								text-align: center;
								color: #04d102;
							}
							p{
								height: 50%;
								line-height: .81rem;
								text-align: center;
								color: #676767;
								span{
									color: #ff902d;
								}
							}
						}
						.btn_box{
							display: flex;
							align-items: center;
							-webkit-box-align: center;	
							justify-content: space-around;								
							.details_btn{
								width: 6.87rem;
								height: 1rem;
								border-radius: 0.2rem;
								background: #04D102;
								text-align: center;
								line-height: 1rem;
								color: #fff;
							}							
						}						
					}
				}
			}
		}
		.details_con{
			height: 5.5rem;
			background: #fff;
			border-top: 1px solid #e5e5e5;
			display: flex;
			div{
				flex: 1;
				border-right: 1px solid #e5e5e5;
				ul{
					height: 2.2rem;
					.deta{
						height: 50%;
						font-weight: 600;
						text-align: center;
						color: #04D102;
						line-height: 1.5rem;
					}
					.deta2{
						height: 50%;
						text-align: center;
						color: #676767;
						line-height: 1.2rem;
						span{
							color: #ff902d;
						}
					}
				}
				.deta_img{
					display: block;
					height: 3.2rem;
					display: flex;
					justify-content: space-around;
					align-items:center;
					img{
						width: 1.9rem;
						height: 2.7rem;
					}
				}
			}
		}
		.service_con{
			height: 6.8rem;
			background: #fff;
			margin-top: 0.21rem;
			display: flex;
			div{
				flex: 1;
				border-right: 1px solid #e5e5e5;
				ul{
					height: 3.1rem;
					li{
						height: 50%;
						text-align: center;
					}
					.font_service{
						line-height: 1.8rem;
						font-weight: 600;
						color: #000000;
					}
					.font_service1{
						line-height: 1.2rem;
						color: #676767;
					}
				}
				i{
					display: block;
					height: 3.7rem;
					background: url(../../assets/imgs/index/service.png) no-repeat top center;
					background-size:3.8rem 3.2rem ;
				}				
			}
		}
		.recovery{
			height: 3.89rem;
			display: flex;
			margin-top: 0.21rem;
			div{
				flex: 1;
				border-right: 1px solid #e5e5e5;
				img{
					width: 5.29rem;
				}
			}
		}
		.topic{
			height: 13.3rem;
			background: #fff;
			margin-top: 0.21rem;
			border-top: 1px solid #e5e5e5;
			
			.topic_top{
				height: 1.4rem;
				border-bottom:1px solid #e5e5e5;
				i{
					float: left;
					width: 1rem;
					height: 1.4rem;
					background: url(../../assets/imgs/index/hot@2x.png) no-repeat center right;
					background-size:0.59rem 0.55rem ;
				}
				h3{
					float: left;
					width: 10rem;
					height: 1.4rem;
					padding: 0.41rem;
				}
			}
			li{
				width: 95%;
				height: 1.49rem;
				margin: 0 0.43rem;
				border-bottom: 1px solid #e5e5e5;
				display: flex;
				align-items: center;
				-webkit-box-align: center;	
				p{
					color: #676767;
				}
			}
		}
		footer{
			margin-top: 0.21rem;
			height: 1.96rem;
			background: #fff;
			display: flex;
			align-items: center;
			-webkit-box-align: center;				
			.footer{
				width: 100%;
				height: 0.85rem;
				ul{
					width: 100%;
					height: 100%;
					display: flex;
					li{
						flex: 1;
						border-right: 1px solid #e5e5e5;
						i{
							float: left;
							width: 0.85rem;
							height: 0.85rem;
						}
						.footer_one{
							background: url(../../assets/imgs/index/order@2x.png) no-repeat center right;
							background-size: 0.64rem 0.64rem;
						}
						.footer_two{
							background: url(../../assets/imgs/index/join@2x.png) no-repeat center right;
							background-size: 0.64rem 0.64rem;
						}
						.footer_three{
							background: url(../../assets/imgs/index/safeguard@2x.png) no-repeat center right;
							background-size: 0.64rem 0.64rem;
						}
						.footer_four{
							background: url(../../assets/imgs/index/service@2x.png) no-repeat center right;
							background-size: 0.64rem 0.64rem;
						}
						p{
							width: 65%;
							height: 100%;
							float: left;
							line-height: 0.88rem;
							color: #aaaaaa;
							margin-left: 0.38rem;
						}
					}					
				}
			}
		}
	}	
}
</style>