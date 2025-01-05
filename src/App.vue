<template>
    <div class="app">
        <h2 class="title">Vue路由测试</h2>
        <!-- 导航区 -->
        <div class="navigate">
            <RouterLink to="/home" active-class="active">首页</RouterLink>
            <RouterLink to="/content" active-class="active">内容</RouterLink>
            <RouterLink :to="{path:'/about'}" active-class="active">关于</RouterLink>
        </div>
        <!-- 展示区 -->
        <div class="main-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';

defineOptions({
    name: 'App'
})

</script>

<style scoped>
/* 整体应用样式 */
.app {
    width: 800px;
    margin: 0 auto;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: #f8f9fa;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

/* 标题样式 */
.title {
    text-align: center;
    color: #343a40;
    margin-bottom: 20px;
    font-size: 24px;
}

/* 导航区样式 */
.navigate {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
    background-color: #e9ecef;
    padding: 10px 0;
    border-radius: 5px;
}

.navigate a {
    text-decoration: none;
    color: #495057;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 3px;
    transition: all 0.3s ease;
}

.navigate a.active {
    background-color: #007bff;
    color: white;
}

.navigate a:hover {
    background-color: #0056b3;
    color: white;
}

/* 展示区样式 */
.main-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    min-height: 300px;
    line-height: 1.6;
    font-size: 16px;
}
</style>