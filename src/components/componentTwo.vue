<template>
    <div class="container">
        <img  src="../../static/images/picture2.jpg" class="img" :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">
    </div>
</template>
<script >
    export default {
        name:'componentTwo',
        data(){
            return {

            }
        },
        computed:{
            addAnimation(){
                if (this.$store.state.hasAnimated.name=='touch1' && this.$store.state.hasAnimated.hasAnimats) {
                    return true  
                }else{
                    return false
                }
            }
        }
}
</script>
<style lang="scss" scoped>
    .container{
        background: url(/static/images/bg_2.png) no-repeat;
        background-size: cover;
        .img{
            width: 5.7rem;
        }
    }
</style>
