<template>
    <div class="person">
        ？？？
    </div>
</template>

<script lang="ts" setup>
import type { PersonInter, Persons } from '@/types';


// vue3.2新特性，不用插件，可以定义component的name
defineOptions({
    name: 'Person'
})

let person:PersonInter = {id:'1111', name:'hhhh', age:20}

let personList:Persons = [
    {id:'222', name:'jjj', age:21},
    {id:'333', name:'kkk', age:22},
    {id:'444', name:'lll', age:23}
]

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