<template>
    <div class="container">
        <img  src="../../static/images/picture2.jpg" class="img" :class="{animated:addAnimation,slower:addAnimation,fadeIn:addAnimation}">
        <div class="text">
            <p>盼一巷秋雨乏凉，收潋了容颜的翅膀，</p>
            <p>温开了苦涩的青花，暗黛远瓦中，</p>
            <p>追逐着风中的雨、雨里的风。</p>
            <p> 一阵寒过一阵的眼神，伫立窗前望着流水浊浪发呆。</p>
            <p> 墨黑的天空，比黑还黑，雨水中流着苦，一直下着，正颠沛着十月。</p>
           
        </div>
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
        background: url(/static/images/bg_1.png) no-repeat;
        background-size: cover;
        text-align: center;
        .img{
            height: 5.7rem;
            margin:.6rem 0;
            // width:100%;
        }
        .text{
            line-height: .4rem;
            font-size: .24rem
        }
    }
</style>
