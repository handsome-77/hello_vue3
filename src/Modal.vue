<template>
    <button @click="isShow = true" v-show="!isShow">展示弹窗</button>
    <Teleport to="body">
        <div class="modal" v-show="isShow">
            <h2>我是弹窗的标题</h2>
            <p>我是弹窗的内容</p>
            <button @click="isShow = false">关闭弹窗</button>
        </div>
    </Teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({
    name: 'Modal'
})
let isShow = ref(false)

</script>

<style scoped>
.modal {
    width: 200px;
    height: 200px;
    background-color: skyblue;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 5px;
    text-align: center;
    position: fixed;
    left: 50%;
    margin-left: -100px;
    top: 20px;
}
</style>