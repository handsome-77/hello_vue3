<template>
    <ul class="news-list">
        <li>编号：{{ query.id }}</li>
        <li>标题：{{ query.title }}</li>
        <li>内容：{{ query.content }}</li>
    </ul>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';

defineOptions({
    name: 'Detail'
})

let route = useRoute()
let {query} = toRefs(route)

</script>

<style scoped>
/* 标题样式 */
.news-list li:nth-child(2) {
    font-weight: bold;
    font-size: 16px;
    color: #333;
}

/* 内容样式 */
.news-list li:nth-child(3) {
    font-size: 15px;
    color: #666;
    line-height: 1.5;
}
</style>