import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const firstNameSlice = createSlice({
  name: "firstName",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.value = action.payload;
    },
    clearFirstName: (state) => {
      state.value = "";
    },
  },
});

export const { setFirstName, clearFirstName } = firstNameSlice.actions;
export default firstNameSlice.reducer;
