<template>
	<header>
			<router-link to="/">
				<span class="span-for-left"></span>
			</router-link>
			<div>{{this.$store.state.tbname}}</div>
			<a href="#">
				<span class="span-for-right"></span>
			</a>
		</header>
</template>

<script>
</script>

<style lang="less" scoped>
@import url("../../common/styles/variable.less");
@import url("../../common/styles/mixin.less");
	header{
		/*position: absolute;*/
		width: 100%;
    	height: 4.5rem;
    	line-height: 4.5rem;
    	background-color: #f9fafd;
    	z-index: 2;
		border-bottom-width: 1px;
    	border-bottom-style: solid;
    	border-color: #e0e0e0;
	}
	
	.span-for-left{
		display:inline-block;
		cursor: pointer;
    	width: 6rem;
    	height: 4.4rem;
    	background-repeat: no-repeat;
    	background-position: left center;
    	-webkit-background-size: auto 2.5rem;
    	background-size: auto 2.5rem;
    	background-image: url(./imgs/lt.png);
    	line-height: 4.5rem;
    	text-align: left;
    	position: absolute;
    	left: .6rem;
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
	
	.span-for-right{
		display:inline-block;
		cursor: pointer;
    	width: 6rem;
    	height: 4.4rem;
    	background-repeat: no-repeat;
    	background-position: center center;
    	-webkit-background-size: auto 2.5rem;
    	background-size: auto 2.5rem;
    	background-image: url(./imgs/break.png);
    	line-height: 4.5rem;
    	position: absolute;
    	right: .6rem;
	}
</style>