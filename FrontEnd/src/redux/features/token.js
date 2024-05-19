import { createSlice } from "@reduxjs/toolkit";
import { getLogin } from "../../utils/api.js";

const initialState = {
  value: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setToken, clearToken, setLoading, setError } = tokenSlice.actions;
export default tokenSlice.reducer;

// Thunk async action creator to handle login
export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await getLogin(credentials);
    dispatch(setToken(response.token));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};
