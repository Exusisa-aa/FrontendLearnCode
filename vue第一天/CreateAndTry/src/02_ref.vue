<script setup>
  import {ref} from 'vue'
  const num = ref(1)
  const msg = ref('hello world')
  const obj = ref({
    name: '张三',
    age: 5
  })
  const fn = () => {
    num.value++ //在非脚本访问简单数据类型要点value
    obj.value.age++
    console.log(num, obj)
  }
</script>

<template>
  <h1>{{ num }}和{{ obj.age }}</h1>
  <button @click="fn">点一下</button>
</template>

<style></style>