<template>
    <div class="person">
        <h2>当前sum：{{ sum }}，放大10倍后是：{{ bigSum }}</h2>
        <button @click="add">点击sum+1</button>
        <hr>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index">
        <button @click="getDog">随机生成一张图</button>
    </div>
</template>

<script lang="ts" setup>
// vue3.2新特性，不用插件，可以定义component的name
defineOptions({
    name: 'Person'
})

import useDog from '@/hooks/userDog';
import useSum from '@/hooks/useSum';

const{sum, add, bigSum} = useSum()
const{dogList, getDog} = useDog()

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

img {
    height: 100px;
    margin: 10px;
}
</style>