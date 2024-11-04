<template>
  <div v-if="!loading" class="department-form">
    <h2>{{ isEditMode ? 'Edit' : 'Add' }} Department</h2>
    <form @submit.prevent="handleSubmit">
      <input
        v-model="name"
        placeholder="Department Name"
        required
        :class="{ 'input-error': hasError }"
        class="input-field"
      />
      <button
        type="submit"
        :class="{ 'submit-btn': true, 'disabled-btn': !name }"
        :disabled="!name"
      >
        {{ isEditMode ? 'Update' : 'Add' }} Department
      </button>
    </form>
    <button @click="goBack()" class="back-btn">Back</button>
  </div>
  <div v-else class="loading">
    Loading...
  </div>
</template>

<script>
import { api } from '../../api';

export default {
  props: {
    department: { type: Object, default: null },
    id: { type: String, default: null },
  },
  data() {
    return {
      name: '',
      hasError: false,
      loading: true,
    };
  },
  computed: {
    isEditMode() {
      return !!this.id;
    },
  },
  async created() {
    if (this.isEditMode) {
      try {
        const department = await api.getDepartment(this.id);
        if (department) {
          console.log("Department data:", department);
          this.name = department.data.name;
        }
      } catch (error) {
        console.error("Failed to load department data:", error);
        this.hasError = true;
      } finally {
        this.loading = false;
      }
    } else {
      this.loading = false;
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.isEditMode) {
          await api.updateDepartment(this.id, { name: this.name });
        } else {
          await api.createDepartment({ name: this.name });
        }
        this.$router.push({ name: 'DepartmentList' });
      } catch (error) {
        this.hasError = true;
      }
    },
    goBack() {
      this.$router.push({ name: 'DepartmentList' });
    },
  },
};
</script>

<style scoped>
.department-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}
h2 {
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
}
.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 16px;
}
.input-error {
  border-color: red;
}
.submit-btn {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.submit-btn:hover {
  background-color: #0069d9;
}
.disabled-btn {
  background-color: #ccc;
  cursor: not-allowed;
}
.back-btn {
  margin-top: 10px;
  font-size: 14px;
  color: #007bff;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
}
.back-btn:hover {
  color: #0056b3;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 18px;
  color: #333;
}
</style>
