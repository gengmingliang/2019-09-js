import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/less/common.less' //共用样式引入
// // 全部引入的方式
// import vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(vant)
import {Search,Button,Icon,Tab,Tabs} from 'vant'
Vue.use(Search)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)

Vue.config.productionTip = false

// 判断登录
let token = localStorage.getItem('token')
if(token){
  store.commit('stateChange',{loginState:true})
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
