<template>
  <div id="app">
    <h2>Today's Live Artists</h2>
    <div class="live-artists">
      <!-- You should replace these with actual data -->
      <div class="artist">Artist 1</div>
      <div class="artist">Artist 2</div>
      <div class="artist">Artist 3</div>
    </div>

    <h2>Live Reports</h2>
    <div class="live-reports">
      <Card v-for="report in reports" :key="report.id" class="report-card">
        <template #title>
          <img :src="report.image" alt="Report Image" class="report-image" />
          <div class="report-title">{{ report.title }}</div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
import { ref } from 'vue';

const reports = ref([
  // You should replace these with actual data
  { id: 1, image: 'https://pbs.twimg.com/media/FxXiEENacAEI6nQ?format=jpg&name=large', title: '民族ハッピー組オンラインライブ' },
  { id: 1, image: 'https://pbs.twimg.com/media/FxXiEENacAEI6nQ?format=jpg&name=large', title: '民族ハッピー組オンラインライブ' },
  { id: 1, image: 'https://pbs.twimg.com/media/FxXiEENacAEI6nQ?format=jpg&name=large', title: '民族ハッピー組オンラインライブ' },
  { id: 1, image: 'https://pbs.twimg.com/media/FxXiEENacAEI6nQ?format=jpg&name=large', title: '民族ハッピー組オンラインライブ' },
  { id: 1, image: 'https://pbs.twimg.com/media/FxXiEENacAEI6nQ?format=jpg&name=large', title: '民族ハッピー組オンラインライブ' },
  { id: 1, image: 'https://pbs.twimg.com/media/FxXiEENacAEI6nQ?format=jpg&name=large', title: '民族ハッピー組オンラインライブ' },
  { id: 1, image: 'https://pbs.twimg.com/media/FxXiEENacAEI6nQ?format=jpg&name=large', title: '民族ハッピー組オンラインライブ' },
  { id: 1, image: 'https://pbs.twimg.com/media/FxXiEENacAEI6nQ?format=jpg&name=large', title: '民族ハッピー組オンラインライブ' },
]);
</script>

<style>
#app {
  text-align: center;
}

.live-artists {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1em;
}

.live-reports {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.report-card {
  width: 200px;
  margin-bottom: 1em;
}

.report-image {
  width: 100%;
  height: 150px;
}

.report-title {
  text-align: left;
  font-size: 0.6em;
}
</style>