<template>
  <div id="app">
    <i class="icon "></i>
    <!-- <audio src="../static/audio/bg.mp3" autoplay loop preload></audio> -->
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
  font-family: "微软雅黑" ;
  font-size:12px;
}
.container{
    width:100%;
    height:100%;
    overflow: hidden;
    position:absolute;
}
</style>
<style lang="scss" scoped>
  #app{
    height:100%;
  }
  .icon{
    display:inline-block;
    width:20px;
    height:20px;
    background: url(../static/images/music.png) no-repeat;
    background-size: 100%;
    margin:10px;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 100;

  }
</style>
