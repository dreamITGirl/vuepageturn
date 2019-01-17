// 管理组件状态
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        hasAnimated:{
            hasAnimats:true,
            name:""
        }
    },
    mutations:{
        showAnimation(state,n){
            state.hasAnimated.hasAnimats = n.hasAnimats;
            state.hasAnimated.name = n.name
        }
    }
})

export default store