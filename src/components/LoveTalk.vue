<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="item in talkStore.talkList" :key="item.id">{{ item.content }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { useTalktStore } from '@/store/loveTalk';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { reactive } from 'vue';

defineOptions({
    name: 'LoveTalk'
})

const talkStore = useTalktStore()

// 方法
async function getLoveTalk() {
    // // 发请求，连续解构赋值
    // let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // // 把请求回来的字符串，包装成一个对象
    // let obj = { id: nanoid(), content }
    // // 放到数组中
    // talkList.unshift(obj)
}

</script>

<style scoped>
.talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>