<script setup>
  import { ref } from 'vue'
  const score = ref(89)
</script>

<template>
  <h1 v-if="score >= 90 && score <= 100">优秀</h1>
  <h1 v-else-if="score >= 80 && score < 90">良好</h1>
  <h1 v-else-if="score >= 60">及格</h1>
  <h1 v-else>不及格</h1>
</template>

<style></style>