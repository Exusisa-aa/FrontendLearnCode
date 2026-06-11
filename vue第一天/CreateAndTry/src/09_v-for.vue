<script setup>
  import { ref } from 'vue'
  const list = ref(["苹果","菠萝","香蕉","橘子"])
  const persons = ref([
    {name:"张三",age:18},
    {name:"李四",age:19},
    {name:"王五",age:20}
  ])
  const bookList = ref([
    {id:1,name:"《算法导论》",price:85.00},
    {id:2,name:"《UNIX编程艺术》",price:59.00},
    {id:3,name:"《代码大全》",price:39.00},
    {id:4,name:"《1》",price:59.00},
    {id:5,name:"《2》",price:59.00},
    {id:6,name:"《3》",price:59.00}
  ])

  const fn = (id) => {
    bookList.value = bookList.value.filter(item => item.id !== id)
  }
</script>

<template>
  <h2>水果店</h2>
  <ul>
    <li v-for="(item,index) in list">{{ index+1 }}.{{ item }}</li>
  </ul>
  <h2>人员列表</h2>
  <ul>
    <li v-for="(item,index) in persons">{{ index+1 }}.{{ item.name }} {{ item.age }}</li>
  </ul>
  <h2>商品列表</h2>
  <ul>
    <li v-for="(item,index) in bookList" v-bind:key="item.id">
      <span>{{ item.name }}</span>
      <span>{{ item.price }}</span>
      <button @click="fn(item.id)">删除</button>
    </li>
  </ul>
</template>

<style></style>