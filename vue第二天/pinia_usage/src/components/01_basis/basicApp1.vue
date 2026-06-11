<script setup>
  import { useCounterStore } from '@/stores/counter.js';
  import { storeToRefs } from 'pinia';
  const counterStore = useCounterStore();
  const { count, msg } = storeToRefs(counterStore);
  const { addCount, subCount } = counterStore;
</script>

<template>
  <h1>我是字组件1 - {{ count }} - {{ msg }}
    <button @click="addCount">+</button>
    <button @click="subCount">-</button>
  </h1>
</template>

<style scoped>

</style>