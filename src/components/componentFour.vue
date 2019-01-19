<template>
    <div class="container">
        <div class="main">
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
                {
                    url:'/static/images/picture3.jpg',
                    title:'生于忧患，死于安乐3',
                    desc:'故天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。3'
                },
                {
                    url:'/static/images/picture3.jpg',
                    title:'生于忧患，死于安乐4',
                    desc:'故天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。4'
                },
            ]
        }
    },
    methods:{

    },
    mounted(){
        var list = document.getElementsByClassName('list')[0];
        $('.list').animate({"scrollTop":".2rem"},100);
        var timer = null;
        var canScroll  = false;
        var currentTop = $('.main').position().top;
        $('.list').scroll(function(){
            clearTimeout(timer);
            timer = null; 
            timer = setTimeout(function(){
                var scrollTop =  $('.list').position().top;
                var timerTop = null,timerBottom = null;
               
                if (list.scrollTop === 0 && canScroll == false && currentTop == scrollTop) {
                    clearTimeout(timer)
                    timer = null;
                    canScroll =true;
                    timerTop = setTimeout(function(){
                        $("#markList").animate({"scrollTop":5},100);
                        canScroll =false;
                        clearTimeout(timerTop)
                        timerTop = null;
                        clearTimeout(timer)
                        timer = null;
                    },100);	
                } else if((list.scrollHeight - list.clientHeight) == list.scrollTop){
                   canScroll = true;
                   clearTimeout(timerBottom);
                   timerBottom = null;
                   timerBottom = setTimeout(function(){
                       let num = $('.list').height() * 0.9;
                       $('.list').animate({scrollTop:num},100);
                       canScroll = false;
                       clearTimeout(timerBottom);
                       timerBottom = null;
                       clearTimeout(timer)
                       timer = null;
                   },100)
                }else{
                    clearTimeout(timer);
                    timer = null;
                }
            },100)
        })
    }
}
</script>
<style lang="scss" scoped>
    .container{
        background: url(/static/images/bg_5.png) no-repeat;
        background-size:cover;
        color:#fff;
        padding:.8rem 0;
        .main{
            -webkit-overflow-scrolling:touch;
             overflow: auto;
           
        }
        .main:after{
            content:"";
            height:calc(3rem+1px);
        }
        .list{
            box-sizing: border-box;
            height:calc(3rem + 1px);
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
