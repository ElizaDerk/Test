import axios from 'axios';

const API_BASE_URL = 'https://expa.fly.dev';

// Функция для выполнения POST-запроса на регистрацию аккаунта
export const registerAccount = async (userData: any) => {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    return response.data;
};

// Функция для выполнения POST-запроса на вход в аккаунт
export const login = async (credentials: any) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
    return response.data;
};

// Функция для выполнения POST-запроса на выход из аккаунта
export const logout = async () => {
    const response = await axios.post(`${API_BASE_URL}/auth/logout`);
    return response.data;

};
