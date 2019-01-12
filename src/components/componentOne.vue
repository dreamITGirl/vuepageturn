<template>
    <div class="container">
        <img src="../../static/images/picture_one.jpg" class="img animated fadeIn slower">
        <div class="">
            <p class="animated fadeIn slower delay-1s">时光静好，与君语</p>
            <p class="animated fadeIn slower delay-2s">细水流年，与君同</p>
            <p class="animated fadeIn slower delay-3s">繁华落尽，与君老</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'componentOne',
    data(){
        return {
            
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
