<template>
	<div id="login">
		<header-top title='设置密码' ></header-top>
		<div class="fixed-top-div"></div>
		
		<div class="pwd_box">
			
			<div class="pwd_top">
				<span>设置密码后，您将可以使用手机号码＋密码登录</span>
			</div>
			
			<div class="pwd_content">
				<ul>
					<li class="pwd_li1">
						<i></i>
						<input type="text" placeholder="请输入密码"/>
					</li>
					<li class="pwd_li1">
						<i></i>
						<input type="text" placeholder="请输入密码"/>						
					</li>
					<li></li>
					<li class="pwd_li3">
						<span>确认</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import headerTop from '@/components/header/header'

import {Toast} from 'mint-ui'
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
	methods:{
		login(){
			Toast({
			  	message: '账号不存在,可使用手机短信登录',
			  	duration: 1500,
			});
		},
		toSmslogin(){
			this.$router.push('/smslogin')
		}
	},
	
	
}
	
</script>

<style lang="less" scoped>
@import '../../assets/variable';	
	
#login{
	.fixed();	
	.pwd_box{
		width: 100%;
		height: 10.67rem;
		padding: 0 0.43rem;
		.pwd_top{
			height: 2.73rem;
			display: flex;
			align-items:center;
			justify-content: space-around;
			span{
				font-size: 0.65rem;
				color: #04D102;
			}
		}
		.pwd_content{
			li{
				height: 1.92rem;
			}
			.pwd_li1{
				display: flex;
				margin: 0 1rem;
				border-bottom: 1px solid #dcdcdc;
				i{
					margin-top: 0.45rem;
					flex: 1;
					background: url(../../assets/phone@2x.png) no-repeat 50%;
					background-size:0.51rem 0.81rem ;
				}
				input{
					margin-top: 0.45rem;
					flex: 6;
					padding: 0 0.5rem;
				}
			}
			.pwd_li3{
				background: #04d102;
				border-radius: .3rem;
				display: flex;
				align-items:center;
				justify-content: space-around;				
				span{
					font-size: 0.64rem;
					color: #fff;
				}
			}
		}
	}
}


.mint-toast{
	width: 10rem;
	height: 2rem;
	padding: 0.65rem !important;
}
.mint-toast-text{
	font-size:0.56rem
}
</style>