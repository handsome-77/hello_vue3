<template>
    <div class="person">
        <h1>情况1：监视【ref】定义的【基本类型】数据</h1>
        <h2>总和为{{ sum }}</h2>
        <button @click="changeSum">点我+1</button>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// vue3.2新特性，不用插件，可以定义component的name
defineOptions({
    name: 'Person'
})

// 数据
let sum = ref(0)

// 方法
function changeSum() {
    sum.value += 1
}

// 监视，情况1：监视【ref】定义的【基本类型】数据
const stopWatch = watch(sum, (newValue, oldValue) => {
    console.log("sum值变化了", newValue, oldValue)
    if (newValue >= 10) {
        stopWatch()        
    }
})

</script>

<style scoped>
.person {
    background-color: azure;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}

li {
    font-size: 20px;
}
</style>