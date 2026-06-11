<script setup>
import { defineProps,defineEmits } from 'vue'
  const props = defineProps({
    name: {
      type: String,
      required: true,
      default: '父亲'
    },
    money:{
      type:Number,
      required: true,
      default: 0,
      validator(value) {
        if(value < 0){
          return false
        }else{
          return true
        }
      }
    }
  })
  
  const emit = defineEmits(['useMoney'])

  const spend = () => {
    emit('useMoney', 100)
  }
</script>

<template>
  <span class="test">{{ name }}的余额为：{{ money }}</span>
  <button @click="spend">花钱</button>
</template>

<style scoped>
.test {
  width: 300px;
  height: 100px;
  margin: 0 auto;
  border: 1px solid black;
  text-align: center;
}
</style>