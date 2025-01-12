import { createApp } from "vue"
import App from "./App.vue"
import { createPinia } from "pinia"
// 创建一个应用
const app = createApp(App)
// 创建pinia
const pinia = createPinia()
// 安装pinia
app.use(pinia)
// 挂载
app.mount('#app')