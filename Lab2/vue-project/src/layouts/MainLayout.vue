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
              src=""
              alt="Profile Picture"
              style="width: 50px; height: 50px; border-radius: 50%;"
            />
          </div>
          <div class="profile_info">
            <span>Welcome,</span>
            <b>{{ userName }}</b>
          </div>
          <nav>
            <router-link v-if="permissions.viewDepartment" to="/departments">Department</router-link>
            <router-link v-if="permissions.viewUser" to="/users">User</router-link>
            <router-link v-if="permissions.viewEmployee" to="/employees">Employees</router-link>
            <router-link v-if="permissions.viewTask" to="/tasks">Tasks</router-link>
            <button @click="logout">Logout</button>
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
      },
    };
  },
};
</script>


<style scoped>
.flex {
  display: flex;
}

.profile {
  width: 20%;
  padding: 1rem;
  border-right: 1px solid #ddd;
}

.profile-pic img {
  display: block;
}

.profile_info {
  margin-top: 0.5rem;
}

nav {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.content {
  flex: 1;
  padding: 1rem;
}
</style>