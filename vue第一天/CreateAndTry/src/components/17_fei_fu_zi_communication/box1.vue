<script setup>
  import eventBus from '../../utils/eventBus.js'
  import {ref} from 'vue'
  const person = ref({
    name: '张三',
    msg: 'hello,how are you?'
  })

  const add = () => {
    eventBus.emit('sendMessage',person.value.msg)
  }
</script>

<template>
  <div class="big"><button @click="add">发布</button></div>
</template>

<style scoped>
 .big {
   width: 200px;
   height: 100px;
   border: 1px solid black;
   text-align: center;
   margin: 0 auto;
   line-height: 100px;
 }
</style>