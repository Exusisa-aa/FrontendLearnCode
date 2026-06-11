<script setup>
import BasicApp1 from './components/01_basis/basicApp1.vue'
import BasicApp2 from './components/01_basis/basicApp2.vue'
import { useCounterStore } from '@/stores/counter.js'
const counterStore = useCounterStore()
</script>

<template>
  <div><h1>我是父组件 - {{ counterStore.count }} - {{ counterStore.msg }}</h1></div>
  <div><BasicApp1></BasicApp1></div>
  <div><BasicApp2></BasicApp2></div>
</template>

<style scoped>

</style>
