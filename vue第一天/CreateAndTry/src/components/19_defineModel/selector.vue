<script setup>
  import { defineModel } from 'vue';
  const msg = defineModel()
</script>

<template>
  <select v-bind:value="msg" @input="msg = $event.target.value">
    <option value="101">上海</option>
    <option value="102">北京</option>
    <option value="103">广州</option>
    <option value="104">深圳</option>
  </select>
</template>

<style scoped>
</style>