import axios from 'axios';

const authAxios = axios.create({
  baseURL: '/api/v1'
});

export default authAxios;
