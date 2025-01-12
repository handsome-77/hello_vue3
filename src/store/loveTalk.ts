import axios from "axios";
import { nanoid } from "nanoid";
import { defineStore } from "pinia";
import { reactive } from "vue";

// 选项式
/* export const useTalktStore = defineStore('talk', {
    actions: {
        async getTalk() {
            // 发请求，连续解构赋值
            let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            // 把请求回来的字符串，包装成一个对象
            let obj = { id: nanoid(), content }
            // 放到数组中
            this.talkList.unshift(obj)
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    }
}) */

// 组合式
export const useTalktStore = defineStore('talk', () => {
    // talkList就是state
    const talkList = reactive(
        JSON.parse(localStorage.getItem('talkList') as string) || []
    )
    // getTalk函数相当于action
    async function getTalk() {
        // 发请求，连续解构赋值
        let { data: { content } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        // 把请求回来的字符串，包装成一个对象
        let obj = { id: nanoid(), content }
        // 放到数组中
        talkList.unshift(obj)
    }
    return { talkList, getTalk }
})