<script setup>
  import ALERT from '@/components/27_canshu_slot/canshu_slot.vue'
</script>

<template>
  <ALERT>
    <template v-slot:title="propsForTitle">
      <h1>{{ propsForTitle.titleMessage }}</h1>
    </template>
    <template #content="propsForContent">
      <h5>{{ propsForContent.contentMessage }}</h5>
    </template>
  </ALERT>
</template>
 

<style scoped>

</style>