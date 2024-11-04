<template>
  <div v-if="task">
    <h2>{{ task.title }}</h2>
    <p>Description: {{ task.description }}</p>
  </div>
</template>

<script>
import { api } from '../../api';

export default {
  props: ['taskId'],
  data() {
    return {
      task: null,
    };
  },
  async created() {
    const response = await api.getTask(this.taskId);
    this.task = response.data;
  },
};
</script>
