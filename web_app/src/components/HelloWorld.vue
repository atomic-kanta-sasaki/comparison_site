<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">An error occurred: {{ error }}</div>
    <div v-else>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const data = ref(null)
const loading = ref(false)
const error = ref(null)
const fetchData = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await axios.get('http://localhost:3000/users')
    console.log(response)
    data.value = response.data
  } catch (err) {
    console.log(err)
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>