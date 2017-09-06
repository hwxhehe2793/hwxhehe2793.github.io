<template>
	<div id="smslogin">
		<header-top title='验证短信登录' ></header-top>
		<div class="fixed-top-div"></div>
		<div class="img_box"></div>
		<div class="login_content">
			<ul>
				<li class="con_li">
					<i></i>
					<input type="text" placeholder="请输入你的手机号码"/>
					<span v-if="showCode" @click='getCode'>{{spancode}}</span>
					<span v-if='showSecond' class="span1">剩 {{second}} s</span>
					<span v-if='showCode1'	class="span2" @click='getCode'>重新获取验证码</span>
				</li>
				<li class="con_li">
					<i></i>
					<input type="text" placeholder="请输入你的密码"/>
				</li>
				<li class="con_li1">
				</li>
				<li class="con_li2" @click='login'>登录</li>
			</ul>
		</div>
		<footer>未注册过的手机号码登录后将自动创建账号</footer>
	</div>
</template>

<script>
import headerTop from '@/components/header/header'

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
#smslogin{
	width: 100%;
	height: 100%;
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
				.span1{
					background: #bfbfbf;
					color: #fff;
					border: none;
				}
				.span2{
					width: 5rem;
				}
			}
			.con_li1{
				width: 13.1rem;
				height: 2.74rem;
			}
			.con_li2{
				font-size:0.6rem ;
				display: block;
				background: #04D102;
				border-radius: 0.3rem;
				text-align: center;
				color: #fff;
				line-height: 1.91rem;

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
			display: flex;
			align-items:center;		
			justify-content: center;
			 -webkit-box-pack:center; 
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
	footer{
		font-size: 0.56rem;
		text-align: center;
		color: #aaaaaa;
		padding-top: 6.5rem;
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