import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(100)

  const addCount = () => {
    count.value++
  }
  const subCount = () => {
    count.value--
  }

  const msg = ref('Hello Pinia')

  return {
    count,
    addCount,
    subCount,
    msg,
  }
}, {
  persist: {
    key: 'counter_test',
    pick: ['count'],
  },
})
