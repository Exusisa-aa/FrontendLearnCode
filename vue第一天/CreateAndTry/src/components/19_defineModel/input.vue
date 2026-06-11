<script setup>
  import { defineModel } from 'vue';
  const msg = defineModel()
</script>

<template>
  <input type="text" v-bind:value="msg" @input="msg=$event.target.value">
</template>

<style scoped>
</style>