<template>
    <div class="child">
        <h2>我是child组件 {{ x }}</h2>
        <h3>当前求和为:{{ sum }}</h3>
        <h4 v-beauty="sum">哈哈</h4>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({
    name: 'Child'
})
let sum = ref(0)

</script>

<style scoped>
.child {
    background-color: skyblue;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
}
</style>