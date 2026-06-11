<script setup>
  import { ref } from 'vue'
  import INPUT from '@/components/19_defineModel/input.vue'
  import SELECTOR from '@/components/19_defineModel/selector.vue'
  const username = ref('123456')
  const location = ref('101')
</script>

<template>
<INPUT v-model="username"></INPUT>
<SELECTOR v-model="location"></SELECTOR>
</template>

<style scoped>
</style>