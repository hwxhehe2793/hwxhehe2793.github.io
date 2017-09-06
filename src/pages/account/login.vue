<template>
	<div id="login">
		<header-top title='登录' ></header-top>
		<div class="fixed-top-div"></div>
		<div class="img_box"></div>
		<div class="login_content">
			<ul>
				<li class="con_li">
					<i></i>
					<input type="text" placeholder="请输入你的手机号码"/>
				</li>
				<li class="con_li">
					<i></i>
					<input type="text" placeholder="请输入你的密码"/>
				</li>
				<li class="con_li1">
					<a>忘记密码?</a>
				</li>
				<li class="con_li2" @click='login'>登录</li>
				<li class="con_li3" @click='toSmslogin'>短信登录</li>
			</ul>
		</div>
		<div class="login_bottom">
			<div class="bom_box">
				<div class="lines"></div>
				<div class="login_h3">使用第三方账号登录</div>
				<div class="lines2"></div>
			</div>

		</div>
	</div>
</template>

<script>
import headerTop from '@/components/header/header'

import {Toast,MessageBox } from 'mint-ui'
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
		checkinp(){
			
		},
		login(){
			
			
//			Toast({
//			  	message: '账号不存在,可使用手机短信登录',
//			  	duration: 1500,
//			});
		},
		toSmslogin(){
			this.$router.push('/password')
		}
	},
	
	
}

</script>

<style lang="less">
			
@import '../../assets/variable';

	
#login{
	.fixed();	
	.img_box{
		width: 100%;
		height: 7.6rem;
		
	}
	.login_content{
		width: 100%;
		height: 10.45rem;
		ul{
			width: 100%;
			height: 100%;
			padding: 0.43rem;
			
			li{
				position: relative;
				width: 100%;
				height: 1.91rem;
				display: flex;
				font-size: .6rem;
				line-height: 1.91rem;
				i{
					flex: 1;
				}
				input{
					margin-top: 3.5%;
					height: 75%;
					flex: 6;
					padding: 0 1rem;
	
					color: #aaaaaa;
					border: none;
					outline: medium;
				}
				a{
					position: absolute;
					right: 0;
					color: #04D102;
				}
			}
			.con_li{
				width: 13.1rem;
				margin: 0 1rem;
				border-bottom: 1px solid #dcdcdc;
				i{
					margin-top: 3.5%;
					background: url(../../assets/phone@2x.png) no-repeat 50%;
					background-size: 0.51rem 0.81rem ;
				}
			}
			.con_li1{
				width: 13.1rem;
				margin: 0 1rem;			
			}
			.con_li2{
				font-size:0.6rem ;
				display: block;
				background: #04D102;
				border-radius: 0.3rem;
				text-align: center;
				color: #fff;
			}
			.con_li3{
				font-size:0.6rem ;
				display: block;
				margin-top: 0.5rem;
				border: 1px solid #04D102;
				border-radius: 0.3rem;
				text-align: center;
				color: #04D102;
			}
		}
	}	
	.login_bottom{
		margin-top: 3.28rem;
		width: 100%;
		height: 5rem;
		padding: 0 0.43rem;
		.bom_box{
			height: 1rem;
			width: 100%;
			display: flex;align-items:center;justify-content: center;-webkit-box-pack:center; 
			.lines{
				display: inline-block;
				width: 4.69rem;
				border-bottom: 1px solid #dcdcdc;
			}
			.lines2{
				display: inline-block;
				width: 4.69rem;
				border-bottom: 1px solid #dcdcdc;
				margin: auto;
			}
			.login_h3{
				display: inline-block;
				font-size: 0.56rem;
				width: 6.1rem;
				text-align: center;
				color: #676767;
			}		
		}
	
	}		
}



.is-placemiddle{
	width: 10rem;
	height: 2rem;
	padding: 0.65rem !important;
}
.mint-toast-text{
	font-size:0.56rem
}
</style>