<script setup>

  // vue3的data已经被淘汰，使用ref，新版使用setup和ref已经不会让同一个组件在多次使用时数据冲突
  import { ref } from 'vue'
  const count = ref(100)

  const add = () => {
    count.value += 1
  }

  const minus = () => {
    count.value -= 1
  }
</script>

<template>
  <div class="nums">
    <button @click="minus">-</button>
    <span>{{count}}</span>
    <button @click="add">+</button>
  </div>  
</template>

<style scoped>
 .nums {
   width: 200px;
   height: 100px;
   background-color: red;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
</style>