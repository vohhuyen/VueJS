<template>
  <div>
    <ul>
      <li v-for="(task, index) in tasks" :key="task.id">
        {{ task.title }}
        <button @click="removeTask(task.id, index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { api } from '../../api';

export default {
  props: {
    tasks: Array,
  },
  methods: {
    async removeTask(id, index) {
      await api.deleteTask(id);
      this.$emit('taskDeleted', index);
    },
  },
};
</script>
