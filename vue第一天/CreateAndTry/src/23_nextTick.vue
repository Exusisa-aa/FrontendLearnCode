<script setup>
  import { nextTick,ref } from 'vue'
  const isShow = ref(false)
  const focus = ref(null)

  const changeShow = () => {
    isShow.value = true
    nextTick(() => {
      focus.value.focus()
    })
  }
</script>

<template>
  <div v-if="isShow">
    <input type="text" ref="focus">
    <button>确定</button>
  </div>
  <div v-else>
    <span>标题</span>
    <button @click="changeShow">修改</button>
  </div>
</template>

<style scoped>

</style>