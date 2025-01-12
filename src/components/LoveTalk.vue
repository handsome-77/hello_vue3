<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="item in talkList" :key="item.id">{{ item.content }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { useTalktStore } from '@/store/loveTalk';
import { storeToRefs } from 'pinia';

defineOptions({
    name: 'LoveTalk'
})

const talkStore = useTalktStore()
const {talkList} = storeToRefs(talkStore)

// 方法
function getLoveTalk() {
    talkStore.getTalk()
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