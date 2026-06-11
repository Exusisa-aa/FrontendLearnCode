<script setup>
  import { defineModel } from 'vue';
  const isShow = defineModel()
</script>

<template>
  <div class="a">
    <span class="close" v-bind:value="isShow" @click="isShow = false">X</span>
  </div>
</template>

<style scoped>
  .a {
    position: relative;
    width: 400px;
    height: 200px;
    border: 1px solid black;
    margin: 0 auto;
    text-align: center;
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
  }

  .close:hover{
    cursor: pointer;
  }
</style>