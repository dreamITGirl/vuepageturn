<template>
    <div class="container">
        <img  src="../../static/images/picture2.jpg" class="img">
    </div>
</template>
<script >
    export default {
        name:'componentTwo'
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
