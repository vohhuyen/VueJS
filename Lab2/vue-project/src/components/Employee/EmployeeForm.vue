<template>
  <div v-if="!loading" class="department-form">
    <h2>{{isEditMode ? 'Edit' : 'Add'}} Employee</h2>
    <form @submit.prevent="handleSubmit">
      <input v-focus v-model="name" placeholder="Employee Name" class="input-field" required />
      <input v-focus v-model="position" placeholder="Position" class="input-field" required />
      <button type="submit" :class="{ 'submit-btn': true, 'disabled-btn': !name }"
        :disabled="!name">{{ isEditMode ? 'Update' : 'Add' }} Employee</button>
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
    employee: { type: Object, default: null },
    id: { type: String, default: null },
  },
  data() {
    return {
      name: '',
      position: '',
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
        const employee = await api.getEmployee(this.id);
        if (employee) {
          console.log("employee data:", employee);
          this.name = employee.data.name;
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
        if(this.isEditMode){
          await api.updateEmployee(this.id, { name: this.name })
        } else {
          await api.createEmployee({ name: this.name });
        }
        this.$router.push({ name: 'EmployeeList' });
      } catch (error) {
        this.hasError = true;
      }
    },
    goBack() {
      this.$router.push({ name: 'EmployeeList' });
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
