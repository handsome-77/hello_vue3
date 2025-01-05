// 创建一个路由器，并暴露出去
// 1. 引入createRouter
import { createRouter, createWebHistory } from "vue-router";
// 引入组件
import Home from '@/components/Home.vue'
import Content from '@/components/Content.vue'
import About from '@/components/About.vue'

// 2. 创建路由器
const router = createRouter({
    history: createWebHistory(), // 路由器的工作模式
    routes: [ // 路由规则
        {
            path: '/home',
            component: Home
        },
        {
            path: '/content',
            component: Content
        },
        {
            path: '/about',
            component: About
        }
    ]
})

export default router