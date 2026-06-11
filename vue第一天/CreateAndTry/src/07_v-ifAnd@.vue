<script setup>
  import {ref} from 'vue'
  const count = ref(100)

  const fn = (a,b) => {
    count.value++
    console.log(a+b)
  }
</script>

<template>
  <button v-on:click="count--">-</button>
  <span>{{count}}</span>
  <button @click="fn(5,6)">+</button>
</template>

<style>
</style>