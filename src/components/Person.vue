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
    name: 'person234'
})

// 数据，不是响应式的数据
let name = '张三'
let age = 20
let tel = '13888888888'
// 方法，不是响应式数据，修改后页面没变化
function showTel() {
    alert(tel)
}
function changeAge() {
    age += 1
}
function changeName() {
    name = 'Zhangsan'
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