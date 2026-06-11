<script setup>
  import ALERT from '@/components/26_named_slot/named_slot.vue'
</script>

<template>
  <ALERT>
    <template v-slot:title>
      <h1>警告</h1>
    </template>
    <template #content>
      <h5>你确定要删除吗?</h5>
    </template>
    <template v-slot:cancelButton>
      <h3>取消</h3>
    </template>
    <template v-slot:confirmButton>
      <h3>确认</h3>
    </template>
  </ALERT>
</template>


<style scoped>

</style>