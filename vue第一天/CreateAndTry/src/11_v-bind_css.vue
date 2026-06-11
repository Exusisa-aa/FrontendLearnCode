<script setup>
  import { ref } from 'vue'
  const big = ref('big')
  const red = ref('red')
</script>

<template>
  <div class="box" v-bind:class="{big:false,red:true}"></div>
  <div class="box" v-bind:class="[big,red]"></div>
  <div class="box" v-bind:style="{backgroundColor:'red',width:'300px',height:'300px'}"></div>
</template>

<style>
.box {
  width: 100px;
  height: 100px;
  border: 2px solid black;
}

.red {
  background-color: red;
}

.big {
  width: 300px;
  height: 300px;
}
</style>