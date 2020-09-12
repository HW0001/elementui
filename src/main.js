import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/global.css"
import axios from "axios"
import 'babel-polyfill' 

axios.defaults.baseURL="http://timemeetyou.com:8889/api/private/v1/"

axios.defaults.regeneratorRuntime=10000

axios.interceptors.request.use(re=>{
  re.headers.Authorization=window.sessionStorage.getItem('token')
  return re
})

Vue.prototype.$axios=axios

import element from './plugins/element' //element-ui的部分组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css 
 

Vue.config.productionTip = false 

new Vue({
  router,
  store,
  render: h => h(App)  
}).$mount('#app')
