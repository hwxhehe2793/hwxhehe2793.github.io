<template>
	<div id="forget">
		<header-top title='忘记密码' ></header-top>
		<div class="fixed-top-div"></div>
		
		<div class="pwd_box">
			<div class="pwd_top">
			</div>
			
			<div class="pwd_content">
				<ul>
					<li class="pwd_li1">
						<i></i>
						<input type="text" placeholder="请输入你的手机号"/>
					</li>
					<li class="pwd_li1">
						<i></i>
						<input type="text" placeholder="请输入新密码"/>						
					</li>
					<li class="pwd_li1">
						<i></i>
						<input type="text" placeholder="请再次输入新密码"/>						
					</li>
					<li class="pwd_li1 pwd_span">
						<i></i>
						<input type="text" placeholder="请输入验证码"/>
						<span v-if="showCode" @click='getCode'>{{spancode}}</span>
						<span v-if='showSecond' class="span1">剩 {{second}} s</span>
						<span v-if='showCode1'	class="span2" @click='getCode'>重新获取验证码</span>						
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
			spancode:'获取验证码',
			second:10,
			showCode:true,
			showSecond:false,
			showCode1:false,			
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
		},
		getCode(){
			this.showCode = false;
			this.showSecond = true;
			this.showCode1 = false;
          	let time = setInterval(()=>{
            	this.second--;
            	if(this.second<=0){
	              	this.second = 10;
	              	this.showSecond = false;
	              	this.showCode1 = true;
	              	clearInterval(time);
            	}
          	},1000)			
		}		
	},
	
	
}
	
</script>

<style lang="less" scoped>
@import '../../assets/variable';	
	
#forget{
	.fixed();	
	.pwd_box{
		width: 100%;
		height: 10.67rem;
		padding: 0 0.43rem;
		.pwd_top{
			height: 1.92rem;
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
				position: relative;
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
			.pwd_span{
				span{
					position: absolute;
					right: 0;
					top: 50%;
					font-size: 0.5rem;
					border: 1px solid #04D102;
					height: 0.8rem;
					width: 3.1rem;
					min-width: 70px;
					text-align: center;
					line-height: 0.73rem;
					border-radius:0.15rem ;
					color:#04D102 ;
				}
				.span1{
					background: #bfbfbf;
					color: #fff;
					border: none;
				}
				.span2{
					width: 5rem;
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