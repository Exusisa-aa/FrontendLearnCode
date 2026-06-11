// 导入ventui组件
import '@/utils/vent_ui.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './02_postcss.vue'
// import router from './router'

const app = createApp(App)

const pinia = createPinia()

// 导入pinia持久化插件
import peresistedState from 'pinia-plugin-persistedstate'
pinia.use(peresistedState)

app.use(pinia)
// app.use(router)


app.mount('#app')
