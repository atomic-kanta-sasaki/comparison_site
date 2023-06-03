<template>
  <div class="sidebar">
     <PrimeSidebar v-model:visible="visible">
        <h2>Sidebar</h2>
        <template #header>
            <div class="flex">
                <button class="p-sidebar-icon p-link mr-2">
                    <span class="pi pi-print" />
                </button>
                <button class="p-sidebar-icon p-link mr-2">
                    <span class="pi pi-search" />
                </button>
            </div>
        </template>
    </PrimeSidebar>
    <Button icon="pi pi-plus" @click="visible = true" />
  </div>
</template>

<script setup>
import { defineExpose } from 'vue'
import Button from 'primevue/button';
import PrimeSidebar from 'primevue/sidebar';
import { ref } from "vue";

const visible = ref(false);

defineExpose({ visible });

</script>

<style scoped>
.sidebar {
  background-color: #f8f9fa;
  padding: 20px;
  width: 200px;
}
</style>