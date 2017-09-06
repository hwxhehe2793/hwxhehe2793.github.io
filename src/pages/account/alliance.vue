<template>
	<div class="alliance">
		<header-top title='加盟商申请' home></header-top>
		<div class="fixed-top-div"></div>
		<div class="alliance_box">
			<div class="alliance_img">
				<img src="../../assets/imgs/index/alliance.png"/>
			</div>
			<div class="alliance_list">
				<ul>
					<li>
						<p>姓名:</p>
						<input type="text" />
					</li>
					<li>
						<p>联系方式:</p>
						<input type="text" />
					</li>
					<li class="address">
						<p>联系地址:</p>
						<div>请选择联系地址 <i></i></div>
					</li>	
					<li>
						<p>门牌号:</p>
						<input type="text" placeholder="例如:5楼508"/>
					</li>	
					<li class="range">
						<p>可回收范围:</p>
						<textarea placeholder="民治,五和"></textarea>
					</li>	
					<li>
						<p>可回收种类:</p>
						<input type="text" placeholder="例如:塑料瓶"/>
					</li>
					<li class="alliance_btn">
						<span>申请加盟</span>
					</li>
				</ul>
			</div>
			<footer>
				<p>申请成功后，在3个工作日内将有工作人员联系你</p>
			</footer>
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
		HeaderTop,
	},
}
</script>

<style lang="less" scoped>
.alliance{
	width: 100%;
	height: 100%;
	.alliance_box{
		width: 100%;
		height: 93%;
		.alliance_img{
			height: 6.7rem;
			img{
				width: 100%;
			}
		}
		.alliance_list{
			width: 100%;
			height: 16.88rem;
			ul{
				height: 100%;
				padding: 0 0.42rem;
				li{
					height: 1.8rem;
					padding-top: 0.47rem;
					display: flex;
					padding-right: 1rem;
					p{
						flex: 1;
						text-align: left;
						line-height: 1.3rem;
						color: #000;
						font-size:0.6rem ;
					}
					input{
						flex: 2.6;
						border: 1px solid #e5e5e5;						
						border-radius: 0.2rem;
						padding-left: 0.7rem;
					}
				}
				.address{
					div{
						flex: 2.6;
						border: 1px solid #e5e5e5;						
						border-radius: 0.2rem;
						line-height: 1.2rem;
						padding-left: 0.7rem;
					}
				}
				.range{
					height: 4rem;
					textarea{
						flex: 2.4;
						padding: 0.3rem 0.7rem;
						resize : none; 
						border: 1px solid #e5e5e5;						
						border-radius: 0.2rem;
					}
				}
				.alliance_btn{
					padding-top: 0;
					margin-top: 1.96rem;
					padding-right: 0;
					background: #04D102;
					border-radius: 0.2rem;
					display: flex;
					align-items: center;
					justify-content: space-around;
					span{
						color: #fff;
					}
				}
			}
		}
	}
	footer{
		height: 2.6rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
		p{
			color: #b0b0b0;
		}
	}
}
</style>