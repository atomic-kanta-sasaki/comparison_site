<template>
  <div class="calendar">
    <div class="week">
      <div class="day" v-for="day in week" :key="day.date">
        <div class="date-header">
          <p>{{ day.dayOfWeek }}</p>
          <p>{{ day.date }}</p>
        </div>
        <div class="hours" v-for="hour in hours" :key="hour">
          <p>{{ hour < 10 ? `0${hour}:00` : `${hour}:00` }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const week = ref([]);
const hours = Array.from({ length: 24 }, (_, i) => i);

const getWeek = () => {
  let now = new Date();
  let firstDayOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
  for (let i = 0; i < 7; i++) {
    let day = new Date(firstDayOfWeek);
    day.setDate(day.getDate() + i);
    week.value.push({
      date: day.getDate(),
      dayOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day.getDay()]
    });
  }
};

onMounted(getWeek);
</script>

<style scoped>
.calendar {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0 10px;
  box-sizing: border-box;
}
.week {
  display: flex;
  width: 100%;
  height: 100%;
}
.day {
  flex: 1;
  border-right: 1px solid #ddd;
  padding: 10px;
  box-sizing: border-box;
  overflow: auto;
}
.date-header {
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.hours {
  border-bottom: 1px solid #eee;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}
.hours p {
  margin: 0;
  font-size: 14px;
  color: #999;
}
</style>
