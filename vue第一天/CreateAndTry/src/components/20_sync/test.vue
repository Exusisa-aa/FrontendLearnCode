<script setup>
  import { ref,defineModel } from 'vue'
  const isEdit = ref(false)
  const confirmMessage =  defineModel()

  const confirm = () => {
    if(confirmMessage.value.trim() === '') {
      alert('请输入内容')
      return
    }
    isEdit.value = false
  }
</script>

<template>
  <div v-if="isEdit">
    <input type="text" v-focus v-bind:value="confirmMessage" @input="confirmMessage=$event.target.value" @keyup.enter="confirm">
  </div>
  <div v-else @dblclick="isEdit = true">{{ confirmMessage }}</div>
</template>

<style scoped>

</style>