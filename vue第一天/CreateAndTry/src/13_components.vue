<script setup>
  import Header from '@/components/13_components/13Header.vue'
  import Body from '@/components/13_components/13Body.vue'
  import Footer from '@/components/13_components/13Footer.vue'
</script>

<template>
  <div class="box">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<style lang="less">
  .box {
    height: 700px;
    width: 400px;
    border: 1px solid black;
    margin: 0 auto;
    background-color: blue; 
  }
</style>