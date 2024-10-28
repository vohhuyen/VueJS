<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:8000/api/token/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        if (response.status == 200) {
          const data = await response.json();
          Cookies.set('token', data.access, { expires: 7 }); 
          this.$router.push('/');  
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Style cho trang login */
</style>
