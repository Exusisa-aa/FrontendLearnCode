import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const userId = ref('')

  return {
    token,
    userId
  }
}, {
  persist: {
    key: 'userInfo',
    pick: ['token', 'userId']
  }
})