<template>
    <div class="person">
        <h2>姓名： {{ name }}</h2>
        <h2>年龄： {{ age }}</h2>
        <button @click="showTel">查看电话</button>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script setup>
// vue3.2新特性，不用插件，可以定义component的name
defineOptions({
    name: 'Person'
})

import {ref} from 'vue'

// 数据，不是响应式的数据
let name = ref('张三')
let age = ref(20)
let tel = '13888888888'
// 方法，不是响应式数据，修改后页面没变化
function showTel() {
    alert(tel)
}
function changeAge() {
    age.value += 1
}
function changeName() {
    name.value = 'Zhangsan'
}
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
</style>