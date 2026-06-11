<script setup>
  import TEST from '@/components/21_ref_defineExpose/test.vue'
  import { onMounted, ref } from 'vue'
  const focus = ref(null)
  const toFocus = () => {
    focus.value.focus()
  }

  const write = () => {
    focus.value.value = 'hello,world'
  }

  const test = ref(null)
  onMounted(() => {
    console.log(test.value)
    test.value.sayHi()
    console.log(test.value.count)
  })
</script>

<template>
  <input ref="focus" type="text">
  <button @click="toFocus">点击聚焦</button>
  <button @click="write">填写</button>
  <TEST ref="test"></TEST>
</template>

<style scoped>

</style>