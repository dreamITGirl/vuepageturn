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

### 初始化项目
```npm i
   npm intall node-sass sass-loader --save-dev
   npm install axios --save
   npm install vuex --save 
   # 该分页是基于vue-touch的插件写的，当然，也可以不安装该插件，通过js原生touch事件去写，同样可以实现 
   npm  install vue-touch@next --save
```  
### 在main.js中配置文件
#### 引入axios方法
``` 
   import axios from axios 
   Vue.prototype.$http = axios
```
#### 引入组件状态管理vuex,一般情况下，项目中会创建一个store的文件夹 ，该项目是在src中创建了一个store文件夹，并创建了index.js的文件
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


#### 引入了viewport.js,适配移动端，同时，不受手机字体大小设置的影响，引入初始化的reset.css,animated.css

#### 1.0版本：基本实现上滑下滑的翻页效果
#### 1.1版本：解决页面之间滑动时产生的距离差（在comment循环时不能增加top属性）
#### 1.2版本：解决在翻页后该页面才开始执行动画(采用了状态管理)
#### 2.0版本：解决在组件内仍有滚动区域时，滚动区域在ios手机滚动不了，在Android手机滚动不流畅的问题
      造成滑动冲突的原因，其实是因为在可滚动的列表中，滚动条触底了，或者是触顶了，造成整个滑动列表区域卡住，所以我的解决方式就是不让它触顶或触底，在它触顶或者触底时判断，如果触顶或触底了，就自动让它往下或者往上滑一下。
     注意：这个解决方式用户体验并不是很好，因为用户滑到列表底部后，列表会有明显的上滑到页面90%的位置处。 
#### 2.1版本：增加图片预加载功能，并实现加载百分比


