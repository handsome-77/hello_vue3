<template>
    <div class="outer">
        <h2>我是App组件</h2>
        <img src="https://search-operate.cdn.bcebos.com/4466f881476a1ee804b4a32aee790675.gif" alt="">
        <br>
        <Modal/>
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'App'
})
import Modal from './Modal.vue';

</script>

<style scoped>
.outer {
    background-color: #ddd;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 10px;
    width: 400px;
    height: 400px;
    filter: saturate(180%);
}

img {
    width: 180px;
}
</style>