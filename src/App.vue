<template>
  <div id="app">
    <i class="icon"></i>
    <audio src=""></audio>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,html{
  width:100%;
  height:100%;
  overflow: hidden;
  font-family: "微软雅黑"
}
</style>
<style lang="scss" scoped>
  .icon{
    display:inline-block;
    
  }
</style>
