//导入路由规则文件
import router from '../router/routerFor28.js'

// import './assets/main.css'
import { createApp } from 'vue'
import App from './28_vueRouter_query.vue'

//导入全局组建
import BlackButton from './components/13_components/13All.vue'

//挂载器对象
const app = createApp(App)

//全局注册组件
app.component('BlackButton', BlackButton)

//全局注册属性
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

//使用路由
app.use(router)

//挂载
app.mount('#app')

