<template>
    <div class="person">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click="changePrice">修改汽车价格</button>
        <button @click="changeBrand">修改汽车名</button>
        <button @click="changeCar">修改汽车</button>
        <h2>总和：{{ sum }}</h2>
        <button @click="changeSum">修改总和</button>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

// vue3.2新特性，不用插件，可以定义component的name
defineOptions({
    name: 'Person'
})
// 数据
// let car = reactive({ brand: '奔驰', price: 100 })
let car = ref({ brand: '奔驰', price: 100 })
let sum = ref(0)

// 方法
function changePrice() {
    // car.price += 10 // reactive
    car.value.price += 10 // ref
}

function changeBrand(){
    // car.brand = '宝马' // reactive
    car.value.brand = '宝马' // ref
}

function changeCar(){
    // car = {brand:'奥拓', price:1} // 不更新
    // car = reactive({brand:'奥拓', price:1}) // 不更新

    // 更新
    Object.assign(car, {brand:'奥拓', price:1}) // reactive
    car.value = {brand:'奥拓', price:1} // ref
}

function changeSum(){
    sum.value += 1
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