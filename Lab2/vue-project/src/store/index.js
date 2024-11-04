import { createStore } from 'vuex';

export default createStore({
  state: {
    departments: [],
  },
  mutations: {
    setDepartments(state, departments) {
      state.departments = departments;
    },
    addDepartment(state, department) {
      state.departments.push(department);
    },
    removeDepartment(state, id) {
      state.departments = state.departments.filter(dep => dep.id !== id);
    },
  },
  actions: {
    async fetchDepartments({ commit }) {
      const response = await api.getDepartments();
      commit('setDepartments', response.data);
    },
    async addDepartment({ commit }, departmentData) {
      const response = await api.createDepartment(departmentData);
      commit('addDepartment', response.data);
    },
    async deleteDepartment({ commit }, id) {
      await api.deleteDepartment(id);
      commit('removeDepartment', id);
    },
  },
  getters: {
    allDepartments: (state) => state.departments,
  },
});
