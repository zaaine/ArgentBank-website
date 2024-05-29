import { createSlice } from '@reduxjs/toolkit';
import { login } from './actions';

const initialTokenState = {
  value: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState: initialTokenState,
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("token", action.payload);
    },
    clearToken: (state) => {
      state.value = null;
      localStorage.removeItem("token");
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
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
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const initialNameState = { value: "" };

const firstNameSlice = createSlice({
  name: "firstName",
  initialState: initialNameState,
  reducers: {
    setFirstName: (state, action) => {
      state.value = action.payload;
    },
    clearFirstName: (state) => {
      state.value = "";
    },
  },
});

const lastNameSlice = createSlice({
  name: "lastName",
  initialState: initialNameState,
  reducers: {
    setLastName: (state, action) => {
      state.value = action.payload;
    },
    clearLastName: (state) => {
      state.value = "";
    },
  },
});

export const { setToken, clearToken, setLoading, setError } = tokenSlice.actions;
export const { setFirstName, clearFirstName } = firstNameSlice.actions;
export const { setLastName, clearLastName } = lastNameSlice.actions;

export const tokenReducer = tokenSlice.reducer;
export const firstNameReducer = firstNameSlice.reducer;
export const lastNameReducer = lastNameSlice.reducer;