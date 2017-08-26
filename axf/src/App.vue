<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar v-if="tbshow"></tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/TabBar/TabBar'
export default {
  name: 'app',
  created () {
  	
  },
   
  computed:{
  	tbshow () {
  		return this.$store.state.tbshow
  		
  	}
  },
  
  components: {
    TabBar
  }
}
</script>

<style>
</style>
