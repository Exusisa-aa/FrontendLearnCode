<script setup>
  import { ref } from 'vue'
  const img = ref("/草原.jpg")
  const title = ref("草原")
</script>

<template>
  <img v-bind:src="img" :title="title">
</template>

<style></style>