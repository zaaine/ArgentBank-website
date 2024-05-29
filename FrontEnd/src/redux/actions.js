import { createAsyncThunk } from '@reduxjs/toolkit';
import { getLogin } from '../utils/api/auth.js';

export const login = createAsyncThunk(
  'token/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await getLogin(credentials);
      if (response && response.token) {
        if (credentials.rememberMe) {
          localStorage.setItem("token", response.token);
        }
        return response.token;
      } else {
        return rejectWithValue("Login failed, no token received");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
