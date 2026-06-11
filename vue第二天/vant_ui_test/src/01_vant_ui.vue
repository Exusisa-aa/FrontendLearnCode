<script setup>
import { ref } from 'vue'
import { loginPicCode, loginMsgCode, login } from './api/login.js'
import Counter from './components/number_counter.vue'
const number = ref(1)

const date = ref('')
const show0 = ref(false)
const show1 = ref(false)

const formatDate = (date) => {
  return `${date.value.getFullYear()}/${date.value.getMonth() + 1}/${date.value.getDate()}`
}
const onConfirm = (value) => {
  show0.value = false
  date.value = formatDate(value)
}

const checked = ref(true)

const fieldValue = ref('')
const cascaderValue = ref('')
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [{ text: '杭州市', value: '330100' }],
  },
  {
    text: '江苏省',
    value: '320000',
    children: [{ text: '南京市', value: '320100' }],
  },
]
// 全部选项选择完毕后，会触发 finish 事件
const onFinish = ({ selectedOptions }) => {
  show1.value = false
  fieldValue.value = selectedOptions.map((option) => option.text).join('/')
}

const active = ref(0)

const base64 = ref('')
const key = ref('')
const getTU = async () => {
  const res = await loginPicCode()
  base64.value = res.data.base64
  key.value = res.data.key
}
getTU()

import { showLoadingToast, showSuccessToast } from 'vant'
const showLoading = () => {
  showLoadingToast({
    message: '加载中...',
    forbidClick: true,
  })
}

const showSuccess = (msg) => {
  showSuccessToast({
    message: msg,
    forbidClick: true,
    duration: 2000,
  })
}

const successpointer = () => {
  showSuccess('点击成功')
}

const code = ref('')
const sendCode = async () => {
  const res = await loginMsgCode(code.value, key.value, '15751776629')
  console.log(res)
  if (res.status === 200) {
    showSuccess('验证码发送成功')
  }
}

import { useUserStore } from './stores/user.js'
const userStore = useUserStore()
const loginIn = async () => {
  const res = await login('15384238085', '246810')
  console.log(res)
  userStore.token = res.data.token
  userStore.userId = res.data.userId
  if (res.status === 200) {
    showSuccess('登录成功')
  }
}

const searchMsg = ref('')

const showActionSheet = ref(false)
const title = ref('')
const buy = () => {
  title.value = '购买商品'
  showActionSheet.value = true
}
const addCart = () => {
  title.value = '加入购物车'
  showActionSheet.value = true
}

</script>

<template>
    <van-button type="primary" size="mini">主要按钮</van-button>
    <van-button type="success" size="mini">成功按钮</van-button>
    <van-button type="default" size="mini">默认按钮</van-button>
    <van-button type="danger" size="mini">危险按钮</van-button>
    <van-button type="warning" size="mini">警告按钮</van-button>

    <van-cell title="选择单个日期" :value="date" @click="show0 = true" />
    <van-calendar v-model:show="show0" @confirm="onConfirm"  color="#ee0a24" switch-mode="year-month"/>

    <div><van-switch v-model="checked" active-color="#ee0a24" inactive-color="#dcdee0"  /></div>

    <van-field
    v-model="fieldValue"
    is-link
    readonly
    label="地区"
    placeholder="请选择所在地区"
    @click="show1 = true"
    />
    <van-popup v-model:show="show1" round position="bottom">
    <van-cascader
    v-model="cascaderValue"
    title="请选择所在地区"
    :options="options"
    @close="show1 = false"
    @finish="onFinish"
    />
    </van-popup>

    <van-loading color="#1989fa"/>
    <van-loading type="spinner" color="#1989fa"/>

    <van-tabbar v-model="active" active-color="#ee0a24">
      <van-tabbar-item icon="shop">主页</van-tabbar-item>
      <van-tabbar-item icon="goods-collect">分类页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="vip-card">我的</van-tabbar-item>
    </van-tabbar>

    <div style="width: 100px; height: 100px; margin-top: 20px;">
      <img v-bind:src="base64" @click="getTU" v-if="base64">
    </div>

    <button @click="showLoading">点击加载</button>
    <button @click="successpointer">点击成功</button>

    <div><input type="text" v-model="code"><button @click="sendCode">发送验证码</button></div>
    <div><button @click="loginIn">登录</button></div>

    <van-search v-model="searchMsg" placeholder="请输入搜索关键词" />

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <van-grid square>
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>

    <van-action-sheet v-model:show="showActionSheet" :title="title">
      <div class="content">内容</div>
      <Counter v-model="number"></Counter>
    </van-action-sheet>
    <button @click="buy">购买</button><button @click="addCart">加入购物车</button>

</template>

<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
