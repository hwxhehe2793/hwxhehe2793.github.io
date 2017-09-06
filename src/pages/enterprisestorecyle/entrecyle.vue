<template>
	<div class="ent-recyle">
		<header-top title='企业回收'></header-top>
		<div class="entrecyle_image">
			<img src="../../assets/imgs/entrecyle/major.png" />
		</div>
		<nav class="navigatio">
			<ul>
				<li>
					<img src="../../assets/imgs/entrecyle/quotedprice.png" />
				</li>
				<li>
					<img src="../../assets/imgs/entrecyle/copy.png" />
				</li>
				<li>
					<img src="../../assets/imgs/entrecyle/smash@2x.png" />
				</li>
			</ul>
		</nav>
		<section class="contact-information">
			<form action="" method="post" name="submit">
				<div>
					企业名称：<input type="text" v-model="firmname" />
				</div>
				<div>
					联系人：<input type="text" v-model="userinfor" />
				</div>
				<div>
					联系电话：<input type="text" v-model="phonenumber" />
				</div>
				<div>
					联系地址：
					<select name="" v-model="address">
						<option value="">请选择联系地址</option>
						<option value="深圳市光明新区高级中学">深圳市光明新区高级中学</option>
					</select>
				</div>
				<div>
					门牌号：<input type="text" placeholder="例如：5楼508" v-model="roomnumber" />
				</div>
				<div class="last-input" v-model="recycle">
					回收物品：<textarea placeholder="如办公室电脑十台"></textarea>
				</div>
			</form>
		</section>
		<footer class="commit">
			<div class="commit-outer">
				<div class="commit-btn" @click="verification">提交申请</div>
				<p>提交成功后，工作人员将在24小时内与你联系</p>
			</div>
		</footer>
	</div>
</template>

<script>
	import headerTop from '@/components/header/header'

	import { MessageBox } from 'mint-ui'

	export default {
		data() {
			return {
				//企业名称
				firmname: "",
				//联系人
				userinfor: "",
				//联系电话
				phonenumber: "",
				//联系地址
				address: "",
				//门牌号
				roomnumber: "",
				//回收物品
				recycle: ""
			}
		},

		methods: {
			verification() {
				if(this.firmname == "") {
					MessageBox({
						title: '提示',
						message: '企业名称未填写'
					})
				}else if(this.userinfor == "") {
					MessageBox({
						title: '提示',
						message: '联系人未填写'
					})
				}else if(this.phonenumber == "") {
					MessageBox({
						title: '提示',
						message: '联系电话未填写'
					})
				}else if(this.address == "") {
					MessageBox({
						title: '提示',
						message: '联系地址未定位'
					})
				}else if(this.roomnumber == "") {
					MessageBox({
						title: '提示',
						message: '门牌号未填写'
					})
				}else if(this.recycle == "") {
					MessageBox({
						title: '提示',
						message: '回收物品未填写'
					})
				}else{
					console.log("哎哟！不错哦")
				}
			}
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
	
	.ent-recyle {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: scroll;
	}
	
	.entrecyle_image {
		width: 100%;
		height: 6.44rem;
		margin: 2rem 0 0.21rem 0;
		img {
			width: 100%;
		}
	}
	
	.navigatio {
		width: 100%;
		height: 4.18rem;
		margin-bottom: 0.21rem;
		ul {
			width: 100%;
			display: flex;
			justify-content: space-between;
			li {
				width: 5.25rem;
				img {
					width: 100%;
				}
				;
			}
		}
	}
	
	.contact-information {
		width: 100%;
		div {
			position: relative;
			width: 100%;
			height: 1.625rem;
			margin-top: 0.8rem;
			display: flex;
			align-items: center;
			text-indent: 0.47rem;
			/*overflow: hidden;*/
			input {
				width: 11rem;
				height: 1.625rem;
				border: 1px solid rgb(229, 229, 229);
				border-radius: 0.2rem;
				position: absolute;
				top: 0;
				left: 3.8rem;
				text-indent: 1rem;
			}
			select {
				width: 11rem;
				height: 1.625rem;
				border: 1px solid rgb(229, 229, 229);
				border-radius: 0.2rem;
				position: absolute;
				top: 0;
				left: 3.8rem;
				text-indent: 1rem;
			}
		}
		.last-input {
			margin-bottom: 1rem;
			height: 4.975rem;
			textarea {
				width: 11rem;
				height: 4.16rem;
				resize: none;
				border: 1px solid rgb(229, 229, 229);
				position: absolute;
				top: 0;
				left: 3.8rem;
				text-indent: 1rem;
			}
		}
	}
	
	.commit {
		width: 100%;
		height: 7.425rem;
		background-color: rgb(240, 240, 240);
		position: relative;
		.commit-outer {
			position: absolute;
			top: 2.47rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			.commit-btn {
				/*position: absolute;
				top: 2.5rem;
				left: 0.42rem;*/
				width: 15rem;
				height: 2.1rem;
				background-color: rgb(4, 209, 2);
				text-align: center;
				line-height: 2.1rem;
				color: white;
			}
			p {
				width: 100%;
				height: 1.9rem;
				text-align: center;
				line-height: 1.9rem;
				color: rgb(170, 170, 170);
			}
		}
	}
</style>