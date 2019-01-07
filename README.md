# vuepageturn

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 初始化项目
```npm i
   npm intall node-sass sass-loader --save-dev
   npm install axios --save
   npm install vuex --save 
   # 该分页是基于vue-touch的插件写的，当然，也可以不安装该插件，通过js原生touch事件去写，同样可以实现 
   npm  install vue-touch@next --save
```  
### 在main.js中配置文件
引入axios方法
``` 
   import axios from axios 
   Vue.prototype.$http = axios
```
引入组件状态管理vuex,一般情况下，项目中会创建一个store的文件夹 
该项目是在src中创建了一个store文件夹，并创建了index.js的文件
```// 管理组件状态
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{},
    mutations:{

    }
})

export default store
```




