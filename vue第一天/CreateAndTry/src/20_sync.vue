<script setup>
//sync已被淘汰，选择defineModel
  import BOX from '@/components/20_sync/20_sync.vue'
  import BOX2 from '@/components/20_sync/test.vue'
  import { ref } from 'vue'
  const isShow = ref(false)

  const message = ref('测试')
</script>

<template>
  <button @click="isShow = true">弹窗</button>
  <BOX v-show="isShow" v-model="isShow"></BOX>
  <BOX2 v-model="message"></BOX2>
</template>

<style scoped>

</style>