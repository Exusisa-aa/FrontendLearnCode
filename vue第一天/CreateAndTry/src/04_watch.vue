<script setup>  
  import { ref, watch } from 'vue'
  const age = ref(18)
  const name = ref('张三')
  const person = ref({
    name:'王五',
    age:50
  })

  const ageAdd = () => {
    age.value++
    person.value.age++
    person.value.name = '赵六'
  }
  const nameChange = () => {
    name.value = '李四'
  }


  //1.
  watch(age,(newValue,oldValue) => {
    console.log(newValue,oldValue)
  })

  //2.
  watch([age,name],(newArr,oldArr) => {
    console.log(newArr,oldArr)
  },{
    deep:true
  })

  //3.
  watch(person,(newValue) => {
    console.log(newValue)
  },{
    immediate:true,
    deep:true
  })

  //4.
  watch(()=>person.value.name,(newValue,oldValue)=>{
    console.log(newValue,oldValue)
  })
  
  
</script>

<template>
  <h1>{{ age }}</h1>
  <button @click="ageAdd">点击</button>
  
  <h1>{{ name }}</h1>
  <button @click="nameChange">点击</button>
</template>

<style scoped>

</style>