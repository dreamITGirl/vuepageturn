<template>
    <div class="container">
        <img src="../../static/images/picture_one.jpg" class="img " :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">
        <div class="">
            <p class="delay-1s" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">时光静好，与君语</p>
            <p class="delay-2s" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">细水流年，与君同</p>
            <p class="delay-3s" :class="{animated:addAnimation, fadeIn:addAnimation, slower :addAnimation}">繁华落尽，与君老</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'componentOne',
    data(){
        return {
            
        }
    },
    computed:{
        addAnimation(){
            if (this.$store.state.hasAnimated.name=='touch0' && this.$store.state.hasAnimated.hasAnimats) {
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
        background:url(/static/images/bg_1.png) no-repeat;
        background-size:100%;
        .img{
            width:5.2rem;
            margin:.6rem .2rem;
        }
        p{
            font-size:.32rem;
            color:#666;
            text-align: center;
            line-height: .48rem;
        }
    }
</style>
