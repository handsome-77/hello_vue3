<template>
    <div>
        <ul>
            <li v-for="item in 3">新闻{{ item }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'Content'
})
</script>