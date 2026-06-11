<template>
  <nav class="music-navbar">
    <div class="navbar-container">
      <div class="logo">
        <h2>Music</h2>
      </div>
      <ul class="nav-menu">
        <li class="nav-item">
          <slot name="discover">
            <router-link to="/findMusic?word=find&id=1" class="nav-link" :class="{ active: activeTab === 'discover' }" @click.prevent="setActiveTab('discover')">
              发现音乐
            </router-link>
          </slot>
        </li>
        <li class="nav-item">
          <slot name="my-music">
            <router-link to="/myMusic?word=music&id=2" class="nav-link" :class="{ active: activeTab === 'my-music' }" @click.prevent="setActiveTab('my-music')">
              我的音乐
            </router-link>
          </slot>
        </li>
        <li class="nav-item">
          <slot name="friends">
            <router-link to="/myFriend?word=friend&id=3" class="nav-link" :class="{ active: activeTab === 'friends' }" @click.prevent="setActiveTab('friends')">
              我的朋友
            </router-link>
          </slot>
        </li>
      </ul>
    </div>
  </nav>
  <div>
  <router-view v-slot="{ Component }">
    <keep-alive v-bind:include="['findMusicIndex']">
      <component v-bind:is="Component" />
    </keep-alive>
  </router-view>
  </div>
  <div>
    <input type="text" v-model="query">
    <button @click="search">搜索</button>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { ref } from 'vue'

// 定义组件属性
const props = defineProps({
  defaultActive: {
    type: String,
    default: 'discover'
  }
})

const query = ref()

// 定义事件
const emit = defineEmits(['tab-change'])

// 当前激活的标签
const activeTab = ref(props.defaultActive)

// 设置激活标签
const setActiveTab = (tab) => {
  activeTab.value = tab
  emit('tab-change', tab)
}

import { useRoute,useRouter } from 'vue-router'
const route = useRoute()
watch(() => route.query, (newQuey) => {
  console.log(newQuey)
},{
  immediate: true
})

const router = useRouter()
const search = () => {
  router.push({
    path: '/search',
    query: {
      word: query.value
    }
  })
}

</script>

<style scoped>
.music-navbar {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.logo h2 {
  color: #d33a31;
  margin-right: 40px;
}

.nav-menu {
  display: flex;
  list-style: none;
}

.nav-item {
  margin-right: 30px;
}

.nav-link {
  display: block;
  padding: 20px 0;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #d33a31;
}

.nav-link.active {
  color: #d33a31;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #d33a31;
}

.vue-active {
  background-color: black;
  transition: all 0.3s ease;
}
</style>