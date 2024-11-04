import { createRouter, createWebHistory } from 'vue-router';
import Cookies from 'js-cookie';
import MainLayout from '@/layouts/MainLayout.vue';
import Login from '@/views/Login.vue';
import DepartmentList from '@/components/Department/DepartmentList.vue';
import DepartmentForm from '@/components/Department/DepartmentForm.vue';
import DepartmentDetail from '@/components/Department/DepartmentDetail.vue';
import UserList from '@/components/User/UserList.vue';
import UserForm from '@/components/User/UserForm.vue';
import UserDetail from '@/components/User/UserDetail.vue';
import EmployeeList from '@/components/Employee/EmployeeList.vue';
import EmployeeForm from '@/components/Employee/EmployeeForm.vue';
import EmployeeDetail from '@/components/Employee/EmployeeDetail.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      { path: 'departments', component: DepartmentList, name: 'DepartmentList' },
      { path: 'departments/new', component: DepartmentForm, name: 'DepartmentCreate' },
      { path: 'departments/:id/edit', component: DepartmentForm, name: 'DepartmentEdit', props: true },
      { path: 'departments/:id', component: DepartmentDetail, name: 'DepartmentDetail', props: true },
      { path: 'users', component: UserList, name: 'UserList' },
      { path: 'users/new', component: UserForm, name: 'UserCreate' },
      { path: 'users/:id/edit', component: UserForm, name: 'UserEdit', props: true},
      { path: 'users/:id', component: UserDetail, name: 'UserDetail', props: true},
      { path: 'employees', component: EmployeeList, name: 'EmployeeList' },
      { path: 'employees/new', component: EmployeeForm, name: 'EmployeeCreate' },
      { path: 'employees/:id/edit', component: EmployeeForm, name: 'EmployeeEdit', props: true},
      { path: 'employees/:id', component: EmployeeDetail, name: 'EmployeeDetail', props: true},
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = Cookies.get('token'); 

  if (to.matched.some((record) => record.meta.requiresAuth) && !token) {
    next('/login'); 
  } else {
    next(); 
  }
});

export default router;
