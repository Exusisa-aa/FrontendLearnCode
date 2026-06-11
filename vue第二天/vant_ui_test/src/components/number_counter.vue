<script setup>
  import { defineModel } from 'vue'
  const numberMsg = defineModel()

  const addMsg = () => {
    numberMsg.value++
  }

  const subMsg = () => {
    if (numberMsg.value <= 1){
      return
    }
    numberMsg.value--
  }

  const inputRule = ($event) => {
    if(+$event.target.value.trim() < 1 || isNaN(+$event.target.value.trim()) || /^0\d+$/.test($event.target.value.trim())){
      $event.target.value = numberMsg.value
    }
    numberMsg.value = +$event.target.value
  }

</script>

<template>
  <div class="content">
    <button class="sub" @click="subMsg">-</button>
    <input class="number" type="text" v-bind:value="numberMsg" @input="inputRule($event)">
    <button class="add" @click="addMsg">+</button>
  </div>
</template>

<style scoped>
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sub, .add {
    width: 40px;
    height: 40px;
    background-color: rgb(199, 196, 196);
    border: none;
    outline: none;
    line-height: 40px;
    text-align: center;
  }
  .number {
    width: 70px;
    height: 38px;
    text-align: center;
    line-height: 38px;
    margin: 5px;
    border: none;
    outline: none;
    background-color: rgb(201, 196, 196);
  }
</style>