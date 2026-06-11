<script setup>
const message = "first"
const fun = () => {
  console.log(message)
}
</script>
<template>
  <header>{{ message }}</header>
  <main>  
    <button @click="fun">按一下</button>
  </main>
</template>
<style></style>