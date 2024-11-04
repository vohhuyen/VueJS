// src/api.js
import axios from 'axios';
import Cookies from 'js-cookie';

const apiBaseURL = 'http://localhost:8000/api/';

const api = {
  async fetchWithAuth(url, options = {}) {
    const token = Cookies.get('token');
    if (token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return fetch(apiBaseURL + url, options);
  },

  async getDepartments() {
    const response = await this.fetchWithAuth('departments/');
    return response.json();
  },
  async getDepartment(id) {
    const token = Cookies.get('token');
    return axios.get(`${apiBaseURL}departments/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async createDepartment(data) {
    const token = Cookies.get('token');
    return axios.post(`${apiBaseURL}departments/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async updateDepartment(id, data) {
    const token = Cookies.get('token');
    return axios.put(`${apiBaseURL}departments/${id}/update/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async deleteDepartment(id) {
    const token = Cookies.get('token');
    return axios.delete(`${apiBaseURL}departments/${id}/delete/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  async getUsers() {
    const token = Cookies.get('token');
    return axios.get(`${apiBaseURL}users/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async getUser(id) {
    const token = Cookies.get('token');
    return axios.get(`${apiBaseURL}users/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async createUser(data) {
    const token = Cookies.get('token');
    return axios.post(`${apiBaseURL}users/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async updateUser(id, data) {
    const token = Cookies.get('token');
    return axios.put(`${apiBaseURL}users/${id}/update/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async deleteUser(id) {
    const token = Cookies.get('token');
    return axios.delete(`${apiBaseURL}users/${id}/delete/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  // Employees API
  async getEmployees() {
    const token = Cookies.get('token');
    return axios.get(`${apiBaseURL}employees/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async getEmployee(id) {
    const token = Cookies.get('token');
    return axios.get(`${apiBaseURL}employees/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async createEmployee(data) {
    const token = Cookies.get('token');
    return axios.post(`${apiBaseURL}employees/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async updateEmployee(id, data) {
    const token = Cookies.get('token');
    return axios.put(`${apiBaseURL}employees/${id}/update/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async deleteEmployee(id) {
    const token = Cookies.get('token');
    return axios.delete(`${apiBaseURL}employees/${id}/delete/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  // Tasks API
  async getTasks() {
    const token = Cookies.get('token');
    return axios.get(`${apiBaseURL}tasks/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async getTask(id) {
    const token = Cookies.get('token');
    return axios.get(`${apiBaseURL}tasks/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async createTask(data) {
    const token = Cookies.get('token');
    return axios.post(`${apiBaseURL}tasks/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async updateTask(id, data) {
    const token = Cookies.get('token');
    return axios.put(`${apiBaseURL}tasks/${id}/update/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  async deleteTask(id) {
    const token = Cookies.get('token');
    return axios.delete(`${apiBaseURL}tasks/${id}/delete/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

export { api };
