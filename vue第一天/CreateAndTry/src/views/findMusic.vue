<script setup>
import { onActivated,onDeactivated,defineOptions, onMounted } from 'vue';
onMounted(() => {
  console.log('onMounted');
})
onActivated(() => {
  console.log('onActivated');
})
onDeactivated(() => {
  console.log('onDeactivated');
})

defineOptions({
  name: 'findMusicIndex'
})

</script>

<template>
  <div>发现音乐</div>
  <div>发现音乐</div>
  <div>发现音乐</div>
  <div>发现音乐</div>
</template>

<style scoped>

</style>