<template>
    <!-- vue2 表达式：
     a为1+1字符串，b为2，c为x字符串，d为变量x的值 -->
    <!-- <h2 a="1+1" :b="1+1" c="x" :d="x"></h2> -->
    <Person a="哈哈"/>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { type Persons } from './types';
import Person from './components/Person.vue'
defineOptions({
    name: 'App'
})

let x = 9
let personList = reactive < Persons > ([
    { id: '1111', name: '张三', age: 18 },
    { id: '2222', name: '李四', age: 20 },
    { id: '3333', name: '王五', age: 21 }
])

console.log(personList);


</script>