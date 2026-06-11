<script setup>
  import eventBus from '../../utils/eventBus.js'
  import {ref} from 'vue'
  const msg = ref('')


  eventBus.on('sendMessage',(data) => {
    msg.value = data
  })
</script>

<template>
  <div class="small">{{ msg }}</div>
</template>

<style scoped>
.small {
   width: 200px;
   height: 100px;
   border: 1px solid black;
   text-align: center;
   margin: 0 auto;
   line-height: 100px;
 }
</style>