import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLogin } from "../../utils/api.js";

const initialState = {
  value: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  'token/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await getLogin(credentials);
      if (response && response.token) {
        return response.token;
      } else {
        return rejectWithValue("Login failed, no token received");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("token", action.payload);
    },
    clearToken: (state) => {
      state.value = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
        localStorage.setItem("token", action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setToken, clearToken, setLoading, setError } = tokenSlice.actions;
export default tokenSlice.reducer;
