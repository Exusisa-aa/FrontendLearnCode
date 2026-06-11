<script setup>
  import { onMounted, ref } from 'vue'
  
  onMounted(() => {
    const div = document.querySelector('.box')
    div.addEventListener('mouseenter', () => {
      div.style.backgroundColor = 'blue'
    })
    div.addEventListener('mouseleave', () => {
      div.style.backgroundColor = 'red'
    })
  })
</script>

<template>
  <div class="box"></div>
</template>

<style scoped>
  .box {
   width: 100px;
   height: 100px;
   background-color: red;
   margin: 0 auto;
   transition: all 1s;
   transform: translate(0, 0);
   &:hover {
     transform: translate(100px, 100px);
   }
    
  }
</style>