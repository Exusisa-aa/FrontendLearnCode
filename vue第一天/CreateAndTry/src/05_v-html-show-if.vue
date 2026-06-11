<script setup>
  import { ref } from 'vue'
  const msg = ref('<a href = "https://ak.hypergryph.com/">arknigths</a>')
  const flag = ref(true)
</script>

<template>
  <h1 v-html="msg"></h1>
  <h1 v-show="flag">v-show css控制display</h1>
  <h1 v-if="flag">v-if dom控制删除或创建</h1>
</template>

<style></style>