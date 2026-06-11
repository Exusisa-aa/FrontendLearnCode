import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

export const useChannelStore = defineStore('channel', () => {
  const number = ref(200)
  const doubleNumber = computed(() => number.value * 2)
  const thirdNumber = computed(() => number.value * 3)
  const list = ref([])

  const getList = async () => {
    const res = await axios('http://geek.itheima.net/v1_0/channels')
    list.value = res.data.data.channels
  }

  return {
    number,
    doubleNumber,
    thirdNumber,
    list,
    getList,
  }
})
