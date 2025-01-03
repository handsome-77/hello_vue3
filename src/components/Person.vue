<template>
    <div class="person">
        <ul>
            <li v-for="x in list" :key="x.id">
                {{x.name}}-{{ x.age }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import type { PersonInter, Persons } from '@/types';


// vue3.2新特性，不用插件，可以定义component的name
defineOptions({
    name: 'Person'
})

// 只接收a和list
// defineProps(['a', 'list'])

// 接收a，同时将props保存起来
/* let x = defineProps(['a'])
console.log(x.a); */

// 接收list+限制类型
// defineProps<{list:Persons}>()

// 接收list+限制类型+限制必要性+指定默认值
withDefaults(defineProps<{list?:Persons}>(),{
    list:()=>[{id:'5555', name:'hhh', age:22}]
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