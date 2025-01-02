<template>
    <h2 ref="title2">App的h2</h2>
    <button @click="showH2">展示App的H2元素</button>
    <Person ref="ren"/>
    <button @click="showRen">展示person组件</button>
</template>

<script setup>
import { ref } from 'vue';
import Person from './components/Person.vue'
defineOptions({
    name: 'App'
})

let title2 = ref()
let ren = ref()

function showH2(){
    console.log(title2.value);
}

function showRen(){
    console.log(ren.value);
}

</script>