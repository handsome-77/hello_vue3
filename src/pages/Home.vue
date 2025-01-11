<template>
    <div>
        <h3>首页内容</h3>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
    name: 'Home'
})

const router = useRouter()

/* onMounted(()=>{
    setTimeout(()=>{
        router.push('/content')
    },3000)
}) */
</script>