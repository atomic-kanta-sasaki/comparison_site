<template>
  <div class="login-form">
    <h2>Login</h2>
    <InputText v-model="email" placeholder="Email" />
    <InputText v-model="password" placeholder="Password" type="password" />
    <Button label="Login" @click="login" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import axios from 'axios'
import { useStore } from 'vuex'
import { computed } from 'vue'

const email = ref('');
const password = ref('');
const router = useRouter();
const store = useStore()

const login = async() => {
 try {
   axios.defaults.withCredentials = true;
    const response = await axios.post('http://localhost:3000/users/login',
    {
      email: email.value,
      password: password.value
    },
    {
      credentials: 'include'
    },);
    // this.$store.dispatch('setToken', response.token);
    // store.dispatch('setToken', response.data.token)
    router.push('/about');
  } catch (error) {
    // エラーハンドリングをここで行います。
    console.error(error);
  }
};

</script>

<style scoped>
.login-form {
  width: 300px;
  margin: auto;
  padding: 20px;
}

.login-form h2 {
  text-align: center;
  margin-bottom: 20px;
}

.login-form .p-inputtext {
  width: 100%;
  margin-bottom: 10px;
}

.login-form .p-button {
  width: 100%;
}
</style>