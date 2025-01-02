<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="title2">广东</h2>
        <h3>广州</h3>
        <button @click="showH2">点击输出h2元素</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// vue3.2新特性，不用插件，可以定义component的name
defineOptions({
    name: 'Person'
})

// 创建一个title2，用于存储ref标记的内容
let title2 = ref()

let a = ref(0)
let b = ref(1)
let c = ref(2)

function showH2(){
    console.log(title2.value);
}

defineExpose({a,b})

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