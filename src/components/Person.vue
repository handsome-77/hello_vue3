<template>
    <div class="person">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click="changePrice">修改汽车价格</button>
        <br>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <button @click="changeFirstGame">修改第一个游戏名</button>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

// vue3.2新特性，不用插件，可以定义component的name
defineOptions({
    name: 'Person'
})
// 数据
let car = reactive({ brand: '奔驰', price: 100 })
let games = reactive([
    { id: 'gameid01', name: 'game01' },
    { id: 'gameid02', name: 'game02' },
    { id: 'gameid03', name: 'game03' }
])

// 方法
function changePrice() {
    car.price += 10
}

function changeFirstGame(){
    games[0].name = 'changed game name'
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