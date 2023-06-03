<template>
  <Header />
  <div class="main">
    <Sidebar />
    <router-view />
    <div class="content">
      <!-- Your content goes here -->
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar.vue';

// Components for App.vue
const components = {
  Header,
  Footer,
  Sidebar
}
</script>

<style scoped>
.main {
  display: flex;
}
.content {
  flex-grow: 1;
}
</style>
