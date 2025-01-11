<template>
    <ul class="news-list">
        <li>编号：{{ id }}</li>
        <li>标题：{{ title }}</li>
        <li>内容：{{ content }}</li>
    </ul>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

defineOptions({
    name: 'Detail'
})
defineProps(['id','title','content'])

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