<template>
  <div class="department-detail">
    <button @click="viewDepartment()" class="back-btn">Back to List</button>
    <div v-if="department" class="department-content">
      <h2 ref="departmentTitle" class="department-title">{{ formattedDepartmentName }}</h2>
      <p class="department-description">{{ department.description }}</p>
    </div>
    <div v-else class="loading">Loading department details...</div>
  </div>
</template>

<script>
import { api } from '../../api';

export default {
  props: ['id'],
  data() {
    return {
      department: null,
    };
  },
  async created() {
    try {
      const response = await api.getDepartment(this.id);
      this.department = response.data;
    } catch (error) {
      console.error("Failed to load department data:", error);
    }
  },
  computed: {
    formattedDepartmentName() {
      return this.department ? this.department.name.toUpperCase() : '';
    },
  },
  methods: {
    viewDepartment() {
      this.$router.push({ name: 'DepartmentList' });
    },
  },
};
</script>

<style scoped>
.department-detail {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.back-btn {
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 16px;
  font-size: 14px;
  color: #007bff;
  background-color: #f0f8ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.back-btn:hover {
  background-color: #e0f2ff;
}
.department-content {
  text-align: center;
}
.department-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}
.department-description {
  font-size: 16px;
  color: #666;
}
.loading {
  text-align: center;
  font-size: 18px;
  color: #666;
}
</style>
