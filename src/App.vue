<template>
	<div class="app">
		<h2>姓名：{{ person.name }}</h2>
		<h2>年龄：{{ person.age }}</h2>
		<button @click="changeAge">修改年龄</button>
		<hr>
		<h2>汽车为：{{ car2 }}</h2>
		<button @click="car2.price += 10">汽车价格+10</button>
	</div>
</template>

<script lang="ts" setup>
import { markRaw, reactive, toRaw } from 'vue';


defineOptions({
	name: 'App'
})

/* toRaw */
let person = reactive({
	name: 'tony',
	age: 18
})

// 用于获取一个响应式对象的原始对象
let rawPerson = toRaw(person)
// console.log('响应式对象', person);
// console.log('原始对象', rawPerson);

function changeAge() {
	person.age += 1
}

/* markRaw */
let car = markRaw({ brand: '奔驰', price: 100 })
let car2 = reactive(car)


</script>

<style scoped>
.app {
	background-color: #ddd;
	border-radius: 10px;
	box-shadow: 0 0 10px;
	padding: 10px;
}

button {
	margin: 0 0 0 10px;
}
</style>