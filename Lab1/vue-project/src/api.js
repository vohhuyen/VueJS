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
};

export { api };
