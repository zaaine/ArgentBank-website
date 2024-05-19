import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.userId = payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
