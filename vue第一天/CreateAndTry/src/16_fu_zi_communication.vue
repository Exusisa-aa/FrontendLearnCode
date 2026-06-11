<script setup>
  import ZI from '@/components/16_fu_zi_communication/zi.vue'
  import { ref } from 'vue'
  const money = ref(0)
  const name = ref('父亲')

  const add = () => {
    money.value += 100
  }

  const mins = (m) => {
    money.value -= m 
  }
  
</script>

<template>
  <ZI v-bind:money="money" v-bind:name="name" @useMoney="mins"></ZI>
  <button @click="add">赚钱</button>
</template>

<style scoped>

</style>