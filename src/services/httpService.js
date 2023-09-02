const axios = require('axios');

const baseURL = 'http://127.0.0.1:4000'; // Replace with your API base URL

const httpService = axios.create({
  baseURL,
  timeout: 10000,
});

export const get = async (url, headers = {}) => {
  const response = await httpService.get(url, { headers });
  return response.data;
};

export const post = async (url, data, headers = {}) => {
  const response = await httpService.post(url, data, { headers });
  return response.data;
};

export const del = async (url, headers = {}) => {
  const response = await httpService.delete(url, { headers });
  return response.data;
};

export const patch = async (url, data, headers = {}) => {
  const response = await httpService.patch(url, data, { headers });
  return response.data;
};
