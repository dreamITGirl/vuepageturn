<template>
    <div class="load-container">
        <h1>Loading...</h1>
        <h2>{{percent}}</h2>
    </div>
</template>
<script>
export default {
    name:'load',
    data(){
        return {
            count:0,
            percent:null,
        }
    },
    mounted(){
        this.preload()
    },
    methods:{
        preload(){
            var imgList = [
                '/static/images/bg_1.jpg',
                '/static/images/bg_2.jpg',
                '/static/images/bg_5.jpg',
                '/static/images/music.png',
                '/static/images/picture2.jpg',
                '/static/images/picture3.jpg',
                '/static/images/picture4.jpg',
                '/static/images/picture_one.jpg'
            ]
            for(var i=0;i<imgList.length;i++){
                let image = new Image();
                image.src = imgList[i];
                image.onload =()=>{
                    this.count++;
                     // 计算图片加载的百分数，绑定到percent变量
                     let percent = Math.floor(this.count / (imgList.length) *100);
                     this.percent = `${percent}%`
                }
            }
        }
    },
    watch:{
        count:function(val){
            console.log(val);
            if (val=== 8) {
                var finished = true;
                this.$router.push({path:'page',query:{finished:true}})  
            } 
        }  
    }
    
}
</script>
<style lang="scss" scoped>
    .load-container{
        width:100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        padding:2rem 0;
    }

    h1,h2{
        color:#fff;
        font-weight:bold;
        margin: auto;
        text-align: center;
        margin-bottom: 1rem;
    }
    h1{
        font-size:.4rem;
    }
    h2{
        font-size: .26rem;
    }
</style>
