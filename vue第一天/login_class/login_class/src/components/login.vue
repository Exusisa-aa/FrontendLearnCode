<script setup>
  import { ref } from 'vue'
  const username = ref('')
  const password = ref('')

  const login = () => {
    
  }
</script>


<template>
    <div class="login_box">
      <h1>用户登录</h1>
    <form action="" method="get" >
      <table>
        <tr>
          <td>用户名：</td>
          <td align="left"><input type="text" v-model="username"></td>
        </tr>
        <tr>
          <td align="left">密码：</td>
          <td><input type="password" v-model="password"></td>
        </tr>
        <tr>
          <td></td>
          <td><button>登录</button></td>
        </tr>
      </table>
    </form>
    </div>
</template>

<style scoped>
  .login_box {
    width: 300px;
    height: 300px;
    text-align: center;
    margin: 0 auto;
  }
</style>
