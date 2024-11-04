<template>
  <form @submit.prevent="handleSubmit">
    <input v-focus v-model="title" placeholder="Task Title" required />
    <textarea v-model="description" placeholder="Task Description" required></textarea>
    <button type="submit">Add Task</button>
  </form>
</template>

<script>
import { api } from '../../api';

export default {
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    async handleSubmit() {
      const response = await api.createTask({ title: this.title, description: this.description });
      this.$emit('taskAdded', response.data);
      this.title = '';
      this.description = '';
    },
  },
};
</script>
