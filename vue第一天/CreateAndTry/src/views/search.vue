<script setup>
  import { watch } from 'vue';
  import { useRoute,useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();
</script>

<template>
  <div>{{ route.query }}</div>
  <button @click="router.back()">返回上一级</button>
</template>

<style scoped>

</style>