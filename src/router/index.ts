// 创建一个路由器，并暴露出去
// 1. 引入createRouter
import { createRouter, createWebHistory } from "vue-router";
// 引入组件
import Home from '@/pages/Home.vue'
import Content from '@/pages/Content.vue'
import About from '@/pages/About.vue'
import Detail from "@/pages/Detail.vue";

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
            component: Content,
            children:[
                {
                    name: 'xiangqing',
                    path: 'detail/:id/:title/:content?', // ?表示可传可不传参数
                    component: Detail,

                    // 第一种写法：将路由收到的所有params参数作为props传给路由
                    props:true,

                    // 第二种写法：函数写法，可以自己决定将什么作为props给路由组件
                    // props(route){
                    //     return route.query
                    // }

                    // 第三种写法：对象写法，可以自己决定将什么作为props给路由组件
                    // props:{
                    //     a:100,
                    //     b:200,
                    //     c:300
                    // }
                }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})

export default router