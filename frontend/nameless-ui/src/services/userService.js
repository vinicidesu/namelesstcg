import axios from 'axios';

const API_BASE_URL = '/api'; 

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsers = async () => {
  try {
    const response = await apiClient.get('/users/');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('userService: Erro ao buscar usuários', error.response || error.message);
    throw error;
  }
};