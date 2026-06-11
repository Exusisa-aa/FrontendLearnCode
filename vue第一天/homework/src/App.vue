<script setup>
import { ref } from 'vue'

// 当前城市
const city = ref('北京')

// 当前天气数据
const currentWeather = ref({
  location: '北京',
  temp: 22,
  condition: '晴',
  high: 25,
  low: 18,
  humidity: 45,
  wind: 12
})

// 未来几天天气预报
const forecast = ref([
  { day: '今天', date: '10月21日', condition: '晴', high: 25, low: 18 },
  { day: '明天', date: '10月22日', condition: '多云', high: 23, low: 17 },
  { day: '后天', date: '10月23日', condition: '小雨', high: 20, low: 15 },
  { day: '周四', date: '10月24日', condition: '阴', high: 19, low: 14 },
  { day: '周五', date: '10月25日', condition: '晴', high: 22, low: 16 }
])

// 搜索城市
const searchCity = () => {
  if (city.value.trim()) {
    // 模拟更新天气数据
    currentWeather.value.location = city.value
    // 在实际应用中，这里会调用天气API获取真实数据
  }
}
</script>

<template>
  <div class="weather-app">
    <header class="header">
      <h1>天气预报</h1>
      <div class="search-box">
        <input 
          v-model="city" 
          type="text" 
          placeholder="输入城市名称" 
          class="search-input"
          @keyup.enter="searchCity"
        />
        <button @click="searchCity" class="search-button">搜索</button>
      </div>
    </header>

    <main class="main-content">
      <!-- 当前天气 -->
      <section class="current-weather">
        <div class="location">{{ currentWeather.location }}</div>
        <div class="temperature">{{ currentWeather.temp }}°C</div>
        <div class="condition">{{ currentWeather.condition }}</div>
        <div class="details">
          <span>最高: {{ currentWeather.high }}°C</span>
          <span>最低: {{ currentWeather.low }}°C</span>
          <span>湿度: {{ currentWeather.humidity }}%</span>
          <span>风速: {{ currentWeather.wind }} km/h</span>
        </div>
      </section>

      <!-- 未来几天预报 -->
      <section class="forecast">
        <h2>未来几天预报</h2>
        <div class="forecast-list">
          <div 
            v-for="(item, index) in forecast" 
            :key="index" 
            class="forecast-item"
          >
            <div class="day">{{ item.day }}</div>
            <div class="date">{{ item.date }}</div>
            <div class="condition">{{ item.condition }}</div>
            <div class="temp-range">
              <span class="high">{{ item.high }}°</span> / 
              <span class="low">{{ item.low }}°</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.weather-app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-image: url('../src/assets/images/bg-tv.jpg');
  min-height: 100vh;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
}

.search-box {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.search-input {
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  width: 250px;
  font-size: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.search-button {
  padding: 10px 20px;
  background-color: #ff6b35;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #e55a2b;
}

.current-weather {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  background-image: url('../src/assets/images/Wallpaper.png');
}

.location {
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
}

.temperature {
  font-size: 64px;
  font-weight: bold;
  color: #ff6b35;
  margin: 10px 0;
}

.condition {
  font-size: 24px;
  color: white!important;
  margin-bottom: 20px;
}

.details {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 16px;
  color: #555;
}

.details span {
  background: #f0f0f0;
  padding: 5px 15px;
  border-radius: 15px;
}

.forecast h2 {
  color: white;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.forecast-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.forecast-item {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-image: url('../src/assets/images/Wallpaper.png');
}

.day {
  font-weight: bold;
  font-size: 18px;
  color: white;
  margin-bottom: 5px;
}

.date {
  color: white;
  font-size: 14px;
  margin-bottom: 10px;
}

.condition {
  margin-bottom: 10px;
}

.temp-range .high {
  font-weight: bold;
  color: #ff6b35;
}

.temp-range .low {
  color: #7bbde0;
}
</style>