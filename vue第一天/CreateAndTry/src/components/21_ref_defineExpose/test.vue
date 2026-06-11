<script setup>
  import { ref,defineExpose } from 'vue'
  const count = ref(999);
  const sayHi = () => {
    console.log('Hi');
  }

  defineExpose({
    count,
    sayHi
  })
</script>

<template>
  <div>测试组件</div>
</template>

<style scoped>

</style>