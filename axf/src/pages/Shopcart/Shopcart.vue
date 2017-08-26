<template>
	<div class="shopcart">
		<header>
			<div>购物车</div>
		</header>
		<div class="tboday clearfix">
			<div class="tboday_left">
				<p>
					<span>收&nbsp;&nbsp;&nbsp;货&nbsp;&nbsp;&nbsp;人</span>
					<span>一拳君&nbsp;&nbsp;先生</span>
				</p>
				<p>
					<span>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</span>
					<span>18888888888</span>
				</p>
				<p>
					<span>收货地址</span>
					<span>西长安街174号中南海</span>
				</p>
			</div>
			<div class="tboday_right">
				<span>修改</span>
			</div>
	</div>
	<div class="product_list clearfix">
		<div class="introduce">
			<div class="introduce_one">
				<span>闪送超市</span>
				<div class="add-on_item">凑单专区</div>
			</div>
			<div class="introduce_two">¥0起送，22:00前满¥30免运费，22:00后满¥50免运费</div>
		</div>
		<p class="delivery_time">
			收货时间&nbsp;&nbsp;
			<select name="" class="select_time">
				<optgroup label="今天">
              		<option value="30分钟送达">30分钟送达</option>
              		<option value="15:00-16:00">15:00-16:00</option>
              		<option value="16:00-17:00">16:00-17:00</option>
              		<option value="17:00-18:00">17:00-18:00</option>
              		<option value="18:00-19:00">18:00-19:00</option>
            	</optgroup>
            	<optgroup label="明天">
              		<option value="明天 09:00-10:00">明天 09:00-10:00</option>
              		<option value="明天 10:00-11:00">明天 10:00-11:00</option>
              		<option value="明天 11:00-12:00">明天 11:00-12:00</option>
              		<option value="明天 12:00-13:00">明天 12:00-13:00</option>
            	</optgroup>
            	<optgroup label="后天">
              		<option value="后天 09:00-10:00">后天 09:00-10:00</option>
              		<option value="后天 10:00-11:00">后天 10:00-11:00</option>
              		<option value="后天 11:00-12:00">后天 11:00-12:00</option>
              		<option value="后天 12:00-13:00">明天 12:00-13:00</option>
            		</optgroup>
			</select>
			<span class="reserve_prd">可预定&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp</span></p>
			<div class="remarks_prd clearfix">
				<div>收获备注<input type="text" placeholder="可以输入一百字以内特殊要求内容" maxlength="100"/></div>
			</div>
			<div class="prd_list" v-for='(item,index) in cartprd'>
				<div class="prd_left">
					<div :class="{active:!item.pitchon}"@click="pitchon(item)"></div>
					<router-link :to="{path: 'details' , query: { id:item.id , product_id : item.product_id , whose:'shopproducts'}}">
						<div class="prd_list_imgs" :style="{backgroundImage:'url(\''+ item.imgs.small+'\')'}" @click="addnum(item)"></div>
					</router-link>
				</div>
				<div class="product_right clearfix">
					<p>{{item.title}}</p>
					<div class="prd_details">￥{{item.price}}
						<div class="prd_inner">
							<div @click="reduceORdelete(item)">&nbsp;</div><span>{{item.num}}</span><div @click="increase(item)">&nbsp;</div>
						</div>
					</div>
				</div>
			</div>
			<div class="total_money">
				<div class="total_money_inner">
					<span @click="allorcancel" :class="{active: activeALL}">全选</span>
					<span>￥{{totalPrice}}</span>
					<div :class="{active: activeCol}">选好了</div>
				</div>
			</div>
	</div>
	</div>
	
</template>

<script>
	export default{
		created () {
			this.$store.dispatch('getCart')
		},
		
		data(){
			return{
				activeALL: false,
				activeCol: false
			}
		},
		
		computed:{
		//动态计算属性获取想要的products
		cartprd () {
			if (this.$store.state.cart.length > 0){
				return this.$store.state.cart
			}
			else{
				return {}
			}
		},
		
		totalPrice () {
			return this.$store.getters.totalPrice
		}
	},
	
		methods:{
			increase(item){
				this.$store.dispatch('increase',item)
				var cartp = this.$store.state.cart
				for(var i =0; i<cartp.length;i++){
					if(cartp[i].pitchon==0){
						var result = 0
						result+=1
					}
				}
				if(result==0){
					this.activeALL = true
					this.activeCol = true
				}else{
					this.activeALL = false
					this.activeCol = false
				}
			},
			
			reduceORdelete(item){
				if(item.num>1){
					this.$store.dispatch('reduce',item)
				}
				else{
					this.$store.dispatch('delproduct',item)
				}
			},
			
			pitchon(item){
				var result = 0
				var result2 = 0
				var cartp = this.$store.state.cart
				item.pitchon = Number(!item.pitchon)
				console.log(item.pitchon)
				for(var i =0; i<cartp.length;i++){
					if(cartp[i].pitchon==0){
						result+=1
					}
				}
				if(result==0){
					this.activeALL = false
				}else{
					this.activeALL = true
				}
				
				for(var i =0; i<cartp.length;i++){
					if(cartp[i].pitchon==1){
						result2+=1
					}
				}
				if(result2==0){
					this.activeCol = true
				}else{
					this.activeCol = false
				}
			},
			
			allorcancel(){
				this.$store.state.activeall = !this.$store.state.activeall
				this.$store.dispatch('allOrCancel')
				var result = 0
				var cartp = this.$store.state.cart
				for(var i =0; i<cartp.length;i++){
					console.log(cartp[i].pitchon)
					if(cartp[i].pitchon==0){
						result+=1
					}
				}
				if(result==0){
					this.activeALL = true
					this.activeCol = true
				}else{
					this.activeALL = false
					this.activeCol = false
				}
			},
			
			addnum (item) {
  				this.$store.state.detprdid = item.product_id
  			}
		}
}		
		
</script>

<style scoped>
	.clearfix:after {
		content: ".";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden
	}
	
	.shopcart{
		overflow: scroll;
		position: absolute;
		top: 0;
		bottom: 5rem;
		left: 0;
		right: 0;
		background-color: rgba(246,246,246,.95);
		overflow: scroll;
	}
	
	header{
		width: 100%;
    	height: 4.5rem;
    	line-height: 4.5rem;
    	background-color: #f9fafd;
    	z-index: 2;
		border-bottom-width: 1px;
    	border-bottom-style: solid;
    	border-color: #e0e0e0;
	}
	
	header>div{
		cursor: pointer;
		position: absolute;
    	top: 0;
    	left: 6rem;
    	right: 6rem;
    	text-align: center;
    	font-weight: 700;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    	overflow: hidden;
	}
	
	.tboday{
		width: 100%;
	}
	
	.tboday>.tboday_left{
		width: 83%;
		/*height: 9.6rem;*/
		float: left;
	}
	
	.tboday>.tboday_right{
		width: 17%;
		height: 8.25rem;
		float: left;
	}
	.tboday_left>p{
		width: 100%;
		color: #333;
		white-space: nowrap;
  		text-overflow:ellipsis;
  		overflow: hidden;
	}
	
	.tboday_left>p>span:nth-child(1){
		width: 28%;
		padding: .7rem 1rem .7rem 1.5rem;
    	font-weight: 400;
    	text-align: left;
    	vertical-align: baseline;
    	display: inline-block;
    	font-size: 1.4rem;
    	line-height: 1.4rem;
	}
	.tboday_left>p>span:nth-child(2){
		width: 58%;
		padding: .7rem 0;
		display: inline-block;
		line-height: 1.4rem;
		font-size: 1.4rem;
	}
	.tboday_right{
		display: flex;
		align-items: center;
	}
	.tboday_right>span{
		display: block;
		width: 100%;
		font-size: 1.4rem;
		background-image: url(../../pages/Shopcart/images/cart-more.png);
		background-position: right;
		background-size: auto 1rem;
		background-repeat: no-repeat;
	}
	.tboday{
		background-image: url("./images/cart-bg.png"),url("./images/cart-bg.png");
  		background-position: left top,left bottom;
  		background-repeat: repeat-x;
  		-webkit-background-size: auto 0.3rem;
  		background-size: auto 0.3rem;
  		background-color: #fff;
  		margin-bottom: 1rem;
  		box-sizing: border-box;
	}
	.introduce{
		width: 100%;
		color: #999;
		font-size: 1.2rem;
    	padding-left: 1.4rem;
    	box-sizing: border-box;
    	background-color: #fff;
    	border-bottom: .1rem solid #e0e0e0;	
	}
	.introduce_one{
		width: 100%;
		height: 3rem;
		padding-top: .5rem;
	}
	
	
	.introduce_one::before{
		content: '';
    	display: inline-block;
    	width: .4rem;
    	height: 1.2rem;
    	vertical-align: -.1rem;
    	border-radius: .2rem;
    	margin-right: .5rem;
    	background-color: #ffd600;
	}
	
	.add-on_item{
		display: inline-block;
		float: right;
		text-align: center;
		border-radius: 1.2rem;
		border: .1rem solid #ff3800;
		margin-right: 1.4rem;
		font-size: 1.2rem;
		width: 7rem;
		height: 2.4rem;
		text-align: center;	
		line-height: 2.4rem;
		color: #ff3800;
	}
	
	.introduce_two{
		font-size: 1.1rem;
    	line-height: 2rem;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    	overflow: hidden;
	}
	
	.delivery_time{
		width: 100%;
		color: #333;
		font-size: 1.4rem;
    	padding-left: 1.4rem;
    	box-sizing: border-box;
    	background-color: #fff;
    	height: 5rem;
    	line-height: 5rem;
    	border-bottom: .1rem solid #e0e0e0;	
	}
	
	.reserve_prd{
		float: right;
		background-image: url(../../pages/Shopcart/images/cart-more.png);
		background-repeat: no-repeat;
		background-position:right;
		background-size: auto .9rem;
	}
	
	.select_time{
		color: #e64f1a;
		border: 0;
		font-size: 1.4rem;
		outline: 0;
		/*background: 0 0;*/
	}
	
	.remarks_prd{
		width: 100%;
		color: #333;
		font-size: 1.4rem;
    	padding-left: 1.4rem;
    	box-sizing: border-box;
    	background-color: #fff;
    	height: 5rem;
    	line-height: 5rem;
    	border-bottom: .1rem solid #e0e0e0;
    	box-sizing: border-box;
	}
	
	.remarks_prd>div>input{
		width: 70%;
    	height: 3.2rem;
    	border: solid 1px #cecece;
    	text-indent: .5rem;
    	border-radius: .5rem;
    	margin-left: 1.4rem;
    	-webkit-appearance: none;
    	outline: none;
	}
	
	.prd_list{
		width: 100%;
		color: #333;
		font-size: 1.4rem;
    	/*padding-left: 1.4rem;*/
    	box-sizing: border-box;
    	background-color: #fff;
    	height: 9rem;
    	border-bottom: .1rem solid #e0e0e0;
    	box-sizing: border-box;
	}
	
	.prd_left{
		width: 37.5%;
		float: left;
	}
	.prd_left>div:nth-child(1){
		width: 5rem;
		background-image: url(./images/checkbox-selectd.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 1.8rem 1.8rem;
		line-height: 9rem;
		height: 9rem;
		float: left;
	}
	
	.prd_left>div:nth-child(1).active{
		background-image: url(./images/checkbox.png);
	}
	
	.prd_list_imgs{
		width: 5rem;
		background-image: url(./images/mimi.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100%;
		line-height: 9rem;
		height: 9rem;
		float: left;
	}
	
	.product_right{
		width: 62.5%;
		float: left;
		box-sizing: border-box;
	}
	
	.product_right>p{
		padding-left: 1.4rem;
		white-space: nowrap;
    	text-overflow: ellipsis;
    	overflow: hidden;
    	line-height: 4rem;
    	height: 4rem;
	}
	
	.product_right>.prd_details{
		padding-left: 1.4rem;
		line-height: 5rem;
    	height: 5rem;
	}
	
	.prd_inner{
		display: flex;
    	justify-content:flex-end;
    	align-items:center;
    	float: right;
	}
		
	.product_right>.prd_details>.prd_inner>div:nth-child(3){
		width: 2.6rem;
    	height: 2.6rem;
    	background-image: url(./images/addorprep.png);
    	background-position:right center;
    	background-size: 200% 100%;
    	background-color: #ff4300;
    	text-align: center;
    	line-height: 2.6rem;
    	border: .1rem solid #ffbe89;
    	border-radius: 50%;
    	float: right;
	}
	
	.product_right>.prd_details>.prd_inner>div:nth-child(1){
		width: 2.6rem;
    	height: 2.6rem;
    	background-image: url(./images/addorprep.png);
    	background-position:left center;
    	background-size: 200% 100%;
    	background-color: #ff4300;
    	text-align: center;
    	line-height: 2.6rem;
    	border: .1rem solid #ffbe89;
    	border-radius: 50%;
    	float: right;
	}
	
	.product_right>.prd_details>.prd_inner>span{
		float: right;
		display: inline-block;
		width: 2rem;
		text-align: center;
	}
	
	.total_money{
		width: 100%;
		color: #333;
		font-size: 1.4rem;
    	padding-left: 1.4rem;
    	box-sizing: border-box;
    	background-color: #fff;
    	height: 5rem;
    	border-bottom: .1rem solid #e0e0e0;
    	box-sizing: border-box;
    	text-align: center;
    	line-height: 5rem;
	}
	
	.total_money_inner>span{
		width: 30%;
		float: left;
		height: 5rem;
	}
	
	.total_money_inner>div{
		width: 35%;
		float: left;
		height: 5rem;
		background-color: #ffd600;
	}
	
	.total_money_inner>div.active{
		content: '满￥0起送';
		background-color: gray;
	}
	
	.total_money_inner>span:nth-child(1){
		background-image: url(./images/checkbox-selectd.png);
		background-position: left center;
		background-repeat: no-repeat;
		background-size: 1.8rem 1.8rem;
	}
	
	.total_money_inner>span:nth-child(1).active{
		background-image: url(./images/checkbox.png);
	}
	
	.total_money_inner>span:nth-child(2){
		width: 35%;
		color: #ff4300;
	}
	
	.total_money_inner>span:nth-child(2):before{
		content: '共：';
		color: #000
	}
	
</style>