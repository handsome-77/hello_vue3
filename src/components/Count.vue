<template>
    <div class="count">
        <h2>当前求和为：{{ sum }}，放大10倍后：{{ bigSum }}</h2>
        <h2>{{ title }}, {{ content }}</h2>
        <h2>title大写：{{ upperTitle }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script lang="ts" setup>
import { useCountStore } from '@/store/count';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

defineOptions({
    name: 'Count'
})

const countStore = useCountStore()

// 数据
let n = ref(1) // 用户选择的数据
// storeToRefs智慧关注store中的数据，不会对方法进行ref包裹
const { sum, title, content,bigSum, upperTitle } = storeToRefs(countStore)

// 方法
function add() {
    // 第一种修改方式
    // countStore.sum += n.value

    // 第二种修改方式
    /*     countStore.$patch({
            sum:888,
            title: '标题',
            content: '内容'
        }) */

    // 第三种修改方式
    countStore.increment(n.value)
}

function minus() {
    countStore.sum -= n.value
}

</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select,
button {
    margin: 0 5px;
    height: 25px;
}
</style>