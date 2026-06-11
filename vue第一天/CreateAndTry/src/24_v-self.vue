<script setup>
  import { ref } from 'vue'
  const color1 = ref('red')
  const color2 = ref('blue')
  
  const vColor = {
    mounted:(el,binding) => {
      el.style.color = binding.value
    },
    updated:(el,binding) => {
      el.style.color = binding.value
    }
  }
</script>

<template>
  <input type="text" v-focus>
  <h1 v-color="color1">测试变色</h1>
  <h1 v-color="color2">测试变色</h1>
</template>


<style scoped>

</style>