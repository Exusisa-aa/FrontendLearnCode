<script setup>
  import { ref } from 'vue'
  const username = ref('')
  const password = ref('')
  const gender = ref('man')
  const habits = ref(['football'])
  const location = ref('beijing')
  const login = () => {
    console.log(`用户名: ${username.value}, 密码: ${password.value}`)
  }
  const reset = () => {
    username.value = ''
    password.value = ''
  }
</script>

<template>
  <div>账号:<input type="text" v-model="username"></div>
  <div>密码:<input type="password" v-model="password"></div>
  <span><button @click="login">登录</button></span>
  <span><button @click="reset">重置</button></span><br>
  <span><input type="radio" name="gender" value="man" v-model="gender">男 <input type="radio" name="gender" value="woman" v-model="gender">女</span><br>
  <span><input type="checkbox" name="habits" value="football" v-model="habits">足球 <input type="checkbox" name="habits" value="basketball" v-model="habits">篮球 <input type="checkbox" name="habits" value="swimming" v-model="habits">游泳</span><br>
  <select name="location" v-model="location">
    <option value="beijing">北京</option>
    <option value="shanghai">上海</option>
    <option value="guangzhou">广州</option>
    <option value="shenzhen">深圳</option>
  </select>
</template>

<style></style>