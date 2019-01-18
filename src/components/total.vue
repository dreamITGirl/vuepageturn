<template>
    <div class="containers">
        <v-touch class="container" 
                 @panstart.prevent="panStart"
                 @panmove.prevent="panMove"
                 @panend.prevent="panEnd">
            <component v-for="(val,index) in componentList" 
                        :key="index" :is="val" 
                        :style="{
                            zIndex:zIndex(index),
                            transition:`all ${transition(index)}s`,
                            transform:`translateY(${top(index)}) scale3d(${scale(index)},1,${scale(index)})`
                        }"
                       :ref="`touch${index}`"
            ></component>  
              
        </v-touch>
    </div>
</template>
<script>
var componentList = {
     componentOne:require('@/components/componentOne.vue').default,
     componentTwo: require("@/components/componentTwo.vue").default,
     componentThree:require("@/components/componentThree.vue").default,
     componentFour:require('@/components/componentFour.vue').default
}
var windowHeight = window.innerHeight;
export default {
    name:'total',
    data(){
        return {
            componentList:['componentOne','componentTwo','componentThree','componentFour'],
            index:0,
            distance:0,//手指在页面滑动的距离
            nowZIndex:{
                before:10,
                current:6,
                next:10,
                others:0
            },
            nowTop:{
                before:-windowHeight,
                current:0,
                next:windowHeight
            },
            nowScale:{
                self:1,
                others:1
            },
            nowTransition:{
                self:0,
                others:0
            },
            zIndex(i){
                let zIndex = 0;
                if (i==this.index) {
                    zIndex = this.nowZIndex.current;
                } else if(i==this.index-1){
                    zIndex = this.nowZIndex.before;
                }else if(i==this.index+1){
                    zIndex = this.nowZIndex.next
                }else{
                    zIndex = this.nowZIndex.others
                }
                return  zIndex   
            },
            top(i){
                var topValue = 0;
                if (i==this.index) {
                    topValue = this.nowTop.current;
                } else if(i==this.index-1){
                    topValue = this.nowTop.before;
                }else if(i==this.index+1){
                    topValue = this.nowTop.next
                }else{
                    topValue = (i-this.index) * windowHeight
                }
                return topValue+'px'
            },
            scale(i){
                var scaleVal = 0;
                if (i==this.index) {
                    scaleVal = this.nowScale.self
                } else {
                    scaleVal = this.nowScale.others
                }
                return scaleVal
            },
            transition(i){
                var transitionVal = 0;
                if (i==this.index-1 || i==this.index || i==this.index+1) {
                    transitionVal = this.nowTransition.self
                } else {
                    transitionVal = this.nowTransition.others
                }
                return transitionVal
            },
            touchStart:0,
            canmove:true,
        }
    },
    methods:{
        panStart(e){
            e.preventDefault();
            if (!this.canmove) {
                return false
            } 
            this.distance = 0;
            this.nowTop = {
                before:-windowHeight,
                current:0,
                next:windowHeight,
            }
            this.nowTransition = {
                self:0,
                others:0
            }
            this.nowScale = {
                self:1,
                others:1
            }
            this.touchStart = e.center.y;
            
        },
        panMove(e){
            e.preventDefault();
            if (!this.canmove && this.touchStart ==0) {
                return false
            }else{
                this.distance = e.center.y-this.touchStart;
                //第一页不能下滑翻页，最后一页不能上滑翻页
                if (!((this.index == 0 && this.distance>0) || ((this.index == this.componentList.length-1) && this.distance<0)) ) {
                    this.nowTop = {
                            before:-windowHeight + this.distance,
                            current:this.distance/3,
                            next: windowHeight + this.distance,
                    }
                    this.nowScale = {
                        self:1-(Math.abs(this.distance)/windowHeight)*0.4,
                        others:1
                    }
                }
            } 
            
        },
        panEnd(e){
            e.preventDefault();
            if (!this.canmove || this.touchStart ==0) {
                return 
            }
            if (!((this.index == 0 && this.distance>0) || (this.index == this.componentList.length-1 && this.distance<0))) {
                    this.touchStart = 0;
                    this.canmove = false;
                if (this.distance >0 && this.distance>windowHeight/10) {//可以下滑
                    this.distance = 0;
                    this.nowTop = {
                        before:0,
                        current:windowHeight,
                        next:2*windowHeight
                    }
                    this.nowTransition = {
                        self:0.6,
                        others:0
                    }
                    this.nowScale = {
                        self:0.8,
                        others:1
                    }
                    setTimeout(()=>{
                        this.nowTop = {
                            before:-windowHeight,
                            current:0,
                            next:windowHeight,
                            others:0
                        }
                        this.nowTransition = {
                            self:0,
                            others:0
                        }
                        this.nowScale = {
                            self:1,
                            others:1
                        }
                        this.index--;
                        this.canmove = true;   
                    },600)
                    $(this.$refs[`touch${this.index}`][0].$el).addClass('animated').siblings().removeClass('animated');
                    var obj = {
                        hasAnimats:true,
                        name:`touch${this.index-1}`
                    }
                    this.$store.commit('showAnimation',obj)
                    
                } else if(this.distance>0 && this.distance < windowHeight/10){//不可以下滑
                    this.distance = 0;
                    this.canmove = false;
                    this.nowTop = {
                        before:-windowHeight,
                        current: 0,
                        next:windowHeight
                    }
                    this.nowScale = {
                        self:1,
                        others:1
                    }
                    this.nowTransition = {
                        self:0.3,
                        others:0
                    }
                    setTimeout(()=>{
                         this.nowTransition = {
                            self:0,
                            others:0
                        }
                         this.canmove = true
                    },300)
                   
                }else if(this.distance<0 && this.distance*(-1)>windowHeight/10){//可以上滑
                        this.distance = 0;
                        this.nowTop = {
                            before:-2 * windowHeight,
                            current:-windowHeight,
                            next:0
                        }
                        this.nowTransition = {
                            self:0.6,
                            others:0
                        }
                        this.nowScale = {
                            self:0.8,
                            others:1
                        }
                        setTimeout(()=>{
                            this.nowTop = {
                                before:-windowHeight,
                                current:0,
                                next:windowHeight
                            }
                            this.nowTransition = {
                                self:0,
                                others:0
                            }
                            this.nowScale = {
                                self:1,
                                others:1
                            }
                            this.index++;
                            this.canmove = true;
                        },600)
                       $(this.$refs[`touch${this.index}`][0].$el).addClass('animated').siblings().removeClass('animated');
                        var obj = {
                            hasAnimats:true,
                            name:`touch${this.index+1}`
                        }
                        this.$store.commit('showAnimation',obj)
                }else if(this.distance<0 && this.distance*(-1) < windowHeight /10){//不可以上滑
                        this.distance = 0;
                        this.nowTop = {
                            before:-windowHeight ,
                            current:0,
                            next:windowHeight
                        }
                        this.nowScale = {
                            self:1,
                            others:1
                        }
                        this.nowTransition = {
                            self:0.3,
                            others:0
                        }
                        setTimeout(()=>{
                           this.nowTransition = {
                                self:0,
                                others:0
                            } 
                            this.canmove = true;
                        },300)
                        
                        
                }
            }else{
                this.nowTop = {
                    before:-windowHeight,
                    current:0,
                    next:windowHeight
                }
            }
        }

    },
    components:componentList
}
</script>

