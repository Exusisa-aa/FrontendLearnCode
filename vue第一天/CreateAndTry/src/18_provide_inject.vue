<script setup>
  import BOX1 from '@/components/18_provide_inject/son.vue'
  import { provide,ref } from 'vue'
  const money = ref(0)
  const name = ref('父亲')

  const earn = () => {
    money.value += 100
  }

  const spend = (m) => {
    money.value -= m
  }

  provide('money',money)
  provide('spendMoney',spend)
</script>

<template>
  {{ name }}:{{ money }}
  <button @click="earn">赚钱</button>
  <BOX1></BOX1>
</template>

<style scoped>

</style>