import { defineStore } from "pinia";

export const useTalktStore = defineStore('talk', {
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