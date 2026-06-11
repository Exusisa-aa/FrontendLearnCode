<script setup>
import {ref} from 'vue'
import {computed} from 'vue'

const count = ref([1,2,3,4,5,6,7,8,9,10,11,12,13])
const computedCount = computed(() => count.value.filter(item => item > 3))
const fn = () => {
  count.value.push(1)
  count.value.push(10)
}

const computedCount0 = computed({
  get: () => count.value.filter(item => item > 8),
  set: (val) => {
    count.value = val
  }
})

const c = ref(1)
const plusone = computed({
  get: () => c.value + 1,
  set: (val) => {
    c.value = val - 1
  }
})


const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)
const list = [checked1, checked2, checked3]

const checkedAll = computed({
  get:() => list.every(item => item.value),
  set:(val) => {list.forEach(item => item.value = val)}
})




</script>

<template>
  <h2>原数组：{{ count }}</h2>
  <h2>过滤后的只读数组：{{ computedCount }}</h2>
  <h2>过滤后的非只读数组：{{ computedCount0 }}</h2>
  <button @click="fn">点击</button>
  <h2>{{ plusone }}</h2>
  <h2>{{ plusone = 1 }}</h2>
  {{ c }}

  <br>

  <input type="checkbox" v-model="checked1">1
  <input type="checkbox" v-model="checked2">2
  <input type="checkbox" v-model="checked3">3
  <input type="checkbox" v-model="checkedAll">全选
  
</template>

<style></style>