import axios from 'axios';

const API_BASE_URL = 'https://expa.fly.dev/api/';


export const registerAccount = async (userData: any) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(`${API_BASE_URL}/auth/register`,  userData, config);
    console.log(response.request._headers);
    return response.data;
  } catch (error:any) {
    if (error.response && error.response.status === 401) {
        console.log(error)
    //   window.location.href = '/auth/login';
    }
    throw error;
  }
};

export const login = async (credentials: any) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials, config);
    console.log(response.request._headers);
    return response.data;
  } catch (error:any) {
    if (error.response && error.response.status === 401) {
      console.log(error)
    //   window.location.href = '/';
    }
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/logout`);
    return response.data;
  } catch (error) {
    throw error;
  }
};