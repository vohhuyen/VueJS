<template>
  <div v-if="employee">
    <h2>{{ employee.name }}</h2>
    <p>Position: {{ employee.position }}</p>
  </div>
</template>

<script>
import { api } from '../../api';

export default {
  props: ['employeeId'],
  data() {
    return {
      employee: null,
    };
  },
  async created() {
    const response = await api.getEmployee(this.employeeId);
    this.employee = response.data;
  },
};
</script>
