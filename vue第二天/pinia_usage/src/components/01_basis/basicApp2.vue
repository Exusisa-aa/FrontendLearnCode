<script setup>
  import { useCounterStore } from '@/stores/counter.js'
  const counterStore = useCounterStore()
</script>

<template>
  <h1>我是字组件2 - {{ counterStore.count }} - {{ counterStore.msg }}
    <button @click="counterStore.addCount">+</button>
    <button @click="counterStore.subCount">-</button>
  </h1>
</template>

<style scoped>

</style>