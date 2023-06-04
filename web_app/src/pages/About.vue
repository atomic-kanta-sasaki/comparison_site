<template>
  <div>about</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex'
import { computed } from 'vue'
import axios from 'axios'

const token = ref('');
const store = useStore()
onMounted(async() => {
  try{
    const response = await axios.get('http://localhost:3000/users/protected',
    {
      withCredentials: true
    })
    console.log(response)
  } catch (e) {
    console.log(e)
  }
})

token.value = computed(() => store.getters.token)
</script>

<style>

</style>