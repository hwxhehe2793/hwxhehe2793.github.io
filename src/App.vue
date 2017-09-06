<template>
  <div id="index" >
    <transition name='router-fade' mode='out-in'>
    	<router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import './assets/reset.less';

.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .1s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}

#app{
	width: 100%;
	height: 100%;	
}

#index{
	width: 100%;
	height: 100%;
}
</style>
