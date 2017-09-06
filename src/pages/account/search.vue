<template>
	<div class="search">
		<header-top title='搜索' home></header-top>
		<div class="fixed-top-div"></div>
		<div class="search_con">
			<div class="search_box">
				<input type="text"/>
				<i></i>
				<span>取消</span>
			</div>
			<div v-if='true' class="top_box">
				<h3>历史搜索</h3>
				<span>清空</span>
			</div>
			<div v-if='true' class="history">
				<ul>
					<li>
						<span>苹果 iPhone 8</span>
						<span>苹果 iPhone 8</span>
					</li>
				</ul>
			</div>
			<div v-if='false' class="result">
				<ul>
					<li class="search_first">
						<p>抱歉，没有搜索到相关内容</p>
						<p>搜索建议：尽量减少关键词，扩大搜索范围.</p>
						<p>如“13年苹果iPhone5s去掉13年”</p>
					</li>
					<li class="search_two">
						热卖推荐
					</li>
					<li>
						<p class="left">红米手机1S</p>
						<p class="right">回收最高价    <span>85￥</span></p>
					</li>
					<li>
						<p class="left">红米手机1S</p>
						<p class="right">回收最高价    <span>85￥</span></p>
					</li>
					<li>
						<p class="left">红米手机1S</p>
						<p class="right">回收最高价    <span>85￥</span></p>
					</li>
					<li>
						<p class="left">红米手机1S</p>
						<p class="right">回收最高价    <span>85￥</span></p>
					</li>
				</ul>
			</div>			
		</div>
	</div>
</template>

<script>

import HeaderTop from '@/components/header/header'
export default{
	data(){
		return{
			
		}
	},
	components:{
		HeaderTop
	},
	mounted(){
		
	}
}
	
</script>

<style lang="less" scoped>
	.search{
		width: 100%;
		height: 100%;
		.search_con{
			height: 93%;
			padding-left: 0.42rem;
			.search_box{
				height: 2.4rem;
				padding-top: 1rem;
				display: flex;
				position: relative;
				input{
					flex: 4.9;
					border: 1px solid #E5E5E5;
					border-radius: 0.2rem;
					padding-left: 1.8rem;
				}
				span{
					flex: 1;
					text-align: center;
					line-height: 1.4rem;
					color: #aaaaaa;
				}
				i{
					position: absolute;
					left: 0;
					top: 1rem;
					width: 1.49rem;
					height: 1.4rem;
					background: url(../../assets/imgs/index/search.png)no-repeat 50%;
					background-size:0.76rem 0.76rem ;
				}
			}
			.top_box{
				height: 2.28rem;
				display: flex;
				padding-bottom: 0.5rem;
				padding-top: 1rem;
				h3{
					flex: 4.9;
					line-height: 0.77rem;
					color: #676767;
				}
				span{
					flex: 1;
					text-align: center;
					line-height: 0.77rem;
					color: #04D102;
				}
			}
			.history{
				height: 21rem;
				padding-right: 3.6rem;
				ul{
					width: 100%;
					height: 100%;
					li{
						height: 1.8rem;
						padding-bottom: 0.3rem;
						span{
							display: inline-block;
							width: 4rem;
							height: 1.5rem;
							margin-right: 1.9rem;
							background: #f0f0f0;
							border-radius:0.2rem ;
							line-height: 1.5rem;
							text-align: center;
							color: #676767;
						}
					}
				}
			}
			.result{
				width: 100%;
				height: 87%;
				padding-right: 0.42rem;
				ul{
					height: 100%;
					li{
						height: 1.5rem;
						border-bottom: 1px solid #e8e8e8;
						display: flex;
						p{
							flex: 1;
							line-height: 1.5rem;
							color: #676767;
						}						
						.left{
							text-align: left;
						}
						.right{
							text-align: right;
							span{
								color: #04d102;
							}
						}
					}
					.search_first{
						height: 3.75rem;
						display: block;
						p{
							text-align: center;
							font-size: 0.51rem;
							height: 33%;
						}
					}
					.search_two{
						line-height: 1.5rem;
						border: 0;
					}
				}
			}
		}
	}
	
	
	
</style>