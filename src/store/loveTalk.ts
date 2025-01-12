import axios from "axios";
import { nanoid } from "nanoid";
import { defineStore } from "pinia";

export const useTalktStore = defineStore('talk', {
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
            talkList: [
                { id: '001', content: '哈哈哈' },
                { id: '002', content: '呵呵呵' },
                { id: '003', content: '嘿嘿嘿' }
            ]
        }
    }
})