<template>
    <!-- vue2 表达式：
     a为1+1字符串，b为2，c为x字符串，d为变量x的值 -->
    <!-- <h2 a="1+1" :b="1+1" c="x" :d="x"></h2> -->
    <Person v-if="show"/>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Person from './components/Person.vue'
defineOptions({
    name: 'App'
})

let show = ref(true)

onMounted(()=>{
    console.log('父--挂载完毕')
})

</script>