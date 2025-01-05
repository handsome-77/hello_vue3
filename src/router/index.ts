// 创建一个路由器，并暴露出去
// 1. 引入createRouter
import { createRouter, createWebHistory } from "vue-router";
// 引入组件
import Home from '@/pages/Home.vue'
import Content from '@/pages/Content.vue'
import About from '@/pages/About.vue'

// 2. 创建路由器
const router = createRouter({
    history: createWebHistory(), // 路由器的工作模式
    routes: [ // 路由规则
        {
            name: 'zhuye',
            path: '/home',
            component: Home
        },
        {
            name: 'neirong',
            path: '/content',
            component: Content
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        }
    ]
})

export default router