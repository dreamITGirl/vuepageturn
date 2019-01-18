<template>
    <div class="container">
        <ul class="list">
            <li class="item" v-for="(item,index) in newList" :key="index">
                 <img :src= item.url  class="scale-img">  
                 <div class="right">
                     <p class="title">{{item.title}}</p>
                     <p class="desc">{{item.desc}}</p>
                 </div> 
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'componentFour',
    data(){
        return {
            index:0,
            newList:[
                {
                    url:'/static/images/picture3.jpg',
                    title:'生于忧患，死于安乐',
                    desc:'故天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。'
                },
                {
                    url:'/static/images/picture3.jpg',
                    title:'生于忧患，死于安乐1',
                    desc:'故天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。1'
                },
                {
                    url:'/static/images/picture3.jpg',
                    title:'生于忧患，死于安乐2',
                    desc:'故天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。2'
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .container{
        background: url(/static/images/bg_5.jpg) no-repeat;
        background-size:cover;
        color:#fff;
        .list{
            margin:.8rem 0;
            box-sizing: border-box;
            height:3rem;
            overflow: auto;
        }
        .item{
            display: flex; 
            background:rgba(0,0,0,0.3);
            margin:.1rem 0;
            .title{
                font-size: .26rem;
                line-height: .6rem;
            }
            .desc{
               font-size: .2rem;
               line-height: .4rem;
               width:3.4rem;
               white-space: nowrap;
               text-overflow: ellipsis;
               overflow: hidden;     
            }  
        }
    }
    .scale-img{
        height:1rem;
        margin:.1rem;
    }
</style>
