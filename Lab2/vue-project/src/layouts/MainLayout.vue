<template>
  <div class="layout">
    <header>
      <slot name="header">
        <h1>Department Management</h1>
      </slot>
    </header>

    <main>
      <div class="flex">
        <div class="profile clearfix">
          <div class="profile-pic">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile Picture"
            />
          </div>
          <div class="profile_info">
            <span>Welcome,</span>
            <b>{{ userName }}</b>
          </div>
          <nav>
            <router-link v-if="permissions.viewDepartment" to="/departments" class="nav-link">Department</router-link>
            <router-link v-if="permissions.viewUser" to="/users" class="nav-link">User</router-link>
            <router-link v-if="permissions.viewEmployee" to="/employees" class="nav-link">Employees</router-link>
            <router-link v-if="permissions.viewTask" to="/tasks" class="nav-link">Tasks</router-link>
            <button @click="logout" class="logout-btn">Logout</button>
          </nav>
        </div>
        <div class="content">
          <keep-alive>
            <router-view />
          </keep-alive>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      permissions: this.permissions,
    };
  },
  data() {
    return {
      userName: "John Doe",
      permissions: {
        viewDepartment: true,
        viewUser: true,
        viewEmployee: true,
        viewTask: true,
      },
    };
  },
};
</script>

<style scoped>
/* General Layout */
.layout {
  font-family: Arial, sans-serif;
  background-color: #f4f6f9;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  padding: 1rem;
  background-color: #324a5f;
  color: white;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

header h1 {
  margin: 0;
  font-size: 24px;
}

.flex {
  display: flex;
  flex: 1;
}

.profile {
  width: 250px;
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.1);
}

.profile-pic img {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 2px solid #ecf0f1;
}

.profile_info {
  text-align: center;
  margin-top: 1rem;
}

.profile_info span {
  font-size: 14px;
  color: #bdc3c7;
}

.profile_info b {
  font-size: 16px;
  color: #ecf0f1;
}

/* Navigation */
nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
}

.nav-link {
  padding: 10px;
  color: #ecf0f1;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  border-radius: 4px;
  transition: background 0.3s ease;
}

.nav-link:hover {
  background-color: #34495e;
}

.logout-btn {
  padding: 10px;
  margin-top: 1rem;
  font-size: 16px;
  color: #ecf0f1;
  background-color: #e74c3c;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.logout-btn:hover {
  background-color: #c0392b;
}

/* Content */
.content {
  flex: 1;
  padding: 20px;
  background-color: #fff;
  overflow-y: auto;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .flex {
    flex-direction: column;
  }

  .profile {
    width: 100%;
    padding: 15px;
    text-align: center;
  }

  .content {
    width: 100%;
  }
}
</style>
