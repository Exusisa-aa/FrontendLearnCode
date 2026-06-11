<script setup>
import BOX2 from '@/components/18_provide_inject/grandSon.vue'
import { inject } from 'vue';
const money = inject('money')
const spend = inject('spendMoney')

</script>

<template>
<button @click="spend(100)">儿子花钱</button>
<span>儿子花100块,还剩{{ money }}</span>
<BOX2></BOX2>
</template>

<style scoped>

</style>