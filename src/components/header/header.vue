<template>
<div id='header_top'>
	<h3>{{ title || '标题'}}</h3>

	<div class="icon">
		<slot></slot>
	</div>

	<span v-if='back' class='_back' @click='backPage'>
		<i></i>
	</span>
	
	<div v-if='home' class="right" @click='toSup'>
		<i>首页</i>
	</div>
</div>


</template>

<script>

	export default{
		data(){
			return{
				//title:'标题'
			}
		},
		props:{
			title:'',
			back:{
				type:Boolean,
				dafult:true
			},
			home:{
				type:Boolean,
				dafult:true
			}
		},
		methods:{
			toSup(){
				console.log(1111)
				this.$router.push('/supply')
			},
			backPage(){
				// console.log(this.$router.go(-1))
				this.$router.go(-1);


			}
		}
	}


</script>

<style lang="less" scoped>
#header_top{
	line-height:2rem;
	text-align: center;
	background: #04d102;
	font-size:18px;
	color:#fff;
	width:100%;
	z-index:999;

	position: fixed;

	/*position: absolute;*/



}

h3{
	/*line-height:40px;*/
	font-size:.9rem;
	/*font-weight:normal;*/
	color:#fff;
}



.icon{
	position: absolute;
	right:.2rem;
	top:0;
	bottom:0;
	/*width:2rem;*/
	font-size:.7rem;

	display: flex;

	align-items: center;
	justify-content: center;


	img{
		height:60%;
	}
}

._back{
	position: absolute;
	left:0;
	top:0;
	bottom:0;
	width:2rem;
}
._back i{
	position: absolute;
	top:0;
	bottom:0;
	margin:auto;
	width:0.5rem;
	height:0.5rem;
	border-top:0.1rem solid #fff;
	border-left:0.1rem solid #fff;
	transform:rotate(-45deg);
}

.right{
	position: absolute;
	top: 0;
	right: 0;
	width: 3rem;
	line-height: 2rem;
}
.right i{
}

</style>