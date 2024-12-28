<template>
    <div class="person">
        <h1>情况3：监视【reactive】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script setup>
import { reactive, watch } from 'vue';

// vue3.2新特性，不用插件，可以定义component的name
defineOptions({
    name: 'Person'
})

// 数据
let person = reactive({
    name: '张三',
    age: 18
})

// 方法
function changeName() {
    person.name += '~'
}

function changeAge() {
    person.age += 1
}

function changePerson() {
    Object.assign(person, { name: '李四', age: 90 })
}

// 监视，情况3：监视【reactive】定义的【对象类型】数据，默认开启深度监视，该深度监视不能被关闭
watch(person, (newValue, oldValue) => { // 大部分不关注旧值
    console.log("person变化了", newValue, oldValue);
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