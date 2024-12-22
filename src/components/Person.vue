<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"><br>
        名：<input type="text" v-model="lastName"><br>
        <button @click="changeName">将全名改为li-si</button>
        姓名：<span>{{ fullName }}</span> <br>
    </div>
</template>

<script setup>
import { ref,computed } from 'vue';

// vue3.2新特性，不用插件，可以定义component的name
defineOptions({
    name: 'Person'
})

let firstName = ref('zhang')
let lastName = ref('san')

// fullName是一个计算属性，只读不可修改
// let fullName = computed(()=>{
//     return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1)
//         + lastName.value
// })

// 这么定义的fullName是一个计算属性，可读可写
let fullName = computed({
    get(){
        return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1)
                + lastName.value
    },
    set(val){
        const [str1, str2] = val.split('-')
        firstName.value = str1
        lastName.value = str2
    }
})

function changeName(){
    fullName.value = 'li-si'
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