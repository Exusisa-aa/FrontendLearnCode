<script setup>
import { useChannelStore } from './stores/channel'
const channelStore = useChannelStore()

</script>

<template>
  <div>{{ channelStore.number }} + {{ channelStore.doubleNumber }} + {{ channelStore.thirdNumber}}</div>
  <div>
    <button @click="channelStore.getList">获得列表数据</button>
    <ul>
      <li v-for="item in channelStore.list" v-bind:key="item.id">
        {{ item.id }} . {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
