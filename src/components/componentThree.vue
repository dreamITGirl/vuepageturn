<template>
    <div class="container">
        <img src="/static/images/picture3.jpg" class="img animated fadeIn slower">
        <div>
           <p class="">哪有那么多一夜成名，全都是百炼成钢</p>
           <p>真正重要的东西用眼睛看不到的，事物的本质要用心灵才能看的见</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'componentThree'
}
</script>
<style lang="scss" scoped>
    .container{
        background: url(/static/images/bg_3.png) no-repeat;
        background-size: cover;
        .img{
            width:7rem;
        }
        p{
            font-size: .32rem;
            line-height: .48rem;
            color:#666;
            margin: 1rem;
            text-align: center;
        }
    }
</style>
