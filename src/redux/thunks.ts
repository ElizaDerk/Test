import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerAccount, login, logout } from '../api';

// Thunk функция для регистрации аккаунта
export const registerAccountThunk = createAsyncThunk(
  'auth/registerAccount',
  async (userData: any) => {
    const response = await registerAccount(userData);
    return response;
  }
);

// Thunk функция для входа в аккаунт
export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials: any) => {
    const response = await login(credentials);
    return response;
  }
);

// Thunk функция для выхода из аккаунта
export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async () => {
    const response = await logout();
    return response;
  }
);
