<template>
    <div class="person">
        <h1>情况5：监视上述的多个数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeCar">修改汽车</button>
        <button @click="changeC1">修改第一辆车</button>
        <button @click="changeC2">修改第二辆车</button>
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
    age: 18,
    car: {
        c1: '奔驰',
        c2: '宝马'
    }
})

// 方法
function changeName() {
    person.name += '~'
}

function changeAge() {
    person.age += 1
}

function changeCar() {
    person.car = { c1: '雅迪', c2: '艾玛' }
}

function changeC1() {
    person.car.c1 = '奥迪'
}

function changeC2() {
    person.car.c2 = '大众'
}

// 监视，情况5：监视上述的多个数据
watch([()=>person.name, person.car], (oldValue, newValue)=>{
    console.log("person.car变化了", oldValue, newValue);
}, {deep: true})

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