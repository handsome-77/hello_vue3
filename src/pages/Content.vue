<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <button @click="showDetail(news)">查看新闻</button>
                <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/content/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->

                <!-- 第二种写法 -->
                <RouterLink :to="{
                    name: 'xiangqing',
                    params: {
                        id: news.id,
                        title: news.title,
                        content: news.content
                    }
                }">
                    {{ news.title }}
                </RouterLink>
            </li>
        </ul>
        <!-- 展示区 -->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

defineOptions({
    name: 'Content'
})

const newsList = reactive([
    { id: '111', title: '新闻1', content: '新闻内容1' },
    { id: '222', title: '新闻2', content: '新闻内容2' },
    { id: '333', title: '新闻3', content: '新闻内容3' }
])

const router = useRouter()
interface NewsInter{
    id:string,
    title:string,
    content:string
}
function showDetail(news:NewsInter) {
    router.replace({
        name: 'xiangqing',
        params: {
            id: news.id,
            title: news.title,
            content: news.content
        }
    })
}
</script>