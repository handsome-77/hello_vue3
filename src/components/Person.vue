<template>
    <div class="person">
        <h2>姓名： {{ name }}</h2>
        <h2>年龄： {{ age }}</h2>
        <button @click="showTel">查看电话</button>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script>
export default {
    name: 'Person',
    data() {
        return {
            name: '张三',
            age: 18,
            tel: '13888888888'
        }
    },
    methods: {
        showTel() {
            alert(this.tel)
        },
        changeAge() {
            this.age += 1
        },
        changeName() {
            this.name = 'Zhangsan'
        }
    }
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
</style>