l<template>
  <div class="department-list">
    <h1>Users</h1>
    <button @click="openForm()" class="add-btn">Add User</button>
    <ul class="department-items">
      <li v-for="(user, index) in users" :key="user.id" class="department-item">
        <span class="department-name">{{ user.first_name }} {{ user.last_name }}</span>
        <div class="action-buttons">
          <button @click="viewUser(user.id)" class="view-btn">View</button>
          <button @click="editUser(user)" class="edit-btn">Edit</button>
          <button @click="removeUser(user.id, index)" class="delete-btn">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { api } from '../../api';
import UserForm from './UserForm.vue';
import UserDetail from './UserDetail.vue';

export default {
  data() {
    return {
      users: [],
    };
  },
  async mounted(){
    const res = await api.getUsers();
    this.users = res.data;
  },
  methods: {
    async removeUser(id, index) {
      await api.deleteUser(id);
      this.$emit('userDeleted', index);
    },
    openForm(){
      this.$router.push({name: "UserCreate"});
    },
    viewUser(id){
      this.$router.push({name: "UserDetail", params: {id}});
    },
    editUser(user){
      this.$router.push({name: "UserEdit", params: {id: user.id}});
    }
  },
};
</script>
<style scoped>
.department-list {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
h1 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}
.add-btn {
  display: block;
  margin: 0 auto 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.add-btn:hover {
  background-color: #45a049;
}
.department-items {
  list-style-type: none;
  padding: 0;
}
.department-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.department-name {
  font-size: 18px;
  color: #333;
}
.action-buttons button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.view-btn {
  background-color: #2196F3;
  color: #fff;
}
.view-btn:hover {
  background-color: #1E88E5;
}
.edit-btn {
  background-color: #FF9800;
  color: #fff;
}
.edit-btn:hover {
  background-color: #FB8C00;
}
.delete-btn {
  background-color: #f44336;
  color: #fff;
}
.delete-btn:hover {
  background-color: #e53935;
}
</style>
