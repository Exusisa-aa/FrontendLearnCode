<script setup>
import { inject } from 'vue';
const money = inject('money')
const spend = inject('spendMoney')

</script>

<template>
<button @click="spend(200)">孙子花钱</button>
<span>孙子花200块,还剩{{ money }}</span>
</template>

<style scoped>

</style>