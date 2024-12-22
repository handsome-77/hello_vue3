<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script setup>
import { reactive, toRef, toRefs } from 'vue';

// vue3.2新特性，不用插件，可以定义component的name
defineOptions({
    name: 'Person'
})
let person = reactive({
    name: '张三',
    age: 18
})

let {name, age} = toRefs(person)
let nl = toRef(person, 'age')

function changeName(){
    name.value += '~'
    console.log(name.value, person.name)
}

function changeAge(){
    age.value += 1
    console.log(age.value, person.age, nl.value)
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

li {
    font-size: 20px;
}
</style>