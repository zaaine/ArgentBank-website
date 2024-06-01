import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    token: null,
    user: {
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
    },
  },

  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setNewUsername: (state, action) => {
      state.user.userName = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = "";
    },
  },
});

export const { setToken, setUserInfo, setNewUsername, logout } =
  authSlice.actions;

export default authSlice.reducer;
