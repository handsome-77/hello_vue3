<template>
    <div class="child">
        <h2>我是child组件</h2>
        <h3>当前求和为:{{ sum }}</h3>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';

defineOptions({
    name: 'Child'
})
let sum = ref(0)
let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
console.log(content);

</script>

<style scoped>
.child {
    background-color: skyblue;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
}
</style>