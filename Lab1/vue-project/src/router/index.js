import { createRouter, createWebHistory } from 'vue-router';
import Cookies from 'js-cookie';
import MainLayout from '@/layouts/MainLayout.vue';
import Login from '@/views/Login.vue';
import DepartmentList from '@/components/Department/DepartmentList.vue';
import DepartmentForm from '@/components/Department/DepartmentForm.vue';
import DepartmentDetail from '@/components/Department/DepartmentDetail.vue';

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
