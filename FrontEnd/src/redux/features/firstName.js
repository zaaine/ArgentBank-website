import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ""
};

const firstNameSlice = createSlice({
  name: "firstName",
  initialState,
  reducers: {
    getFirstName: (state, action) => {
      console.log("Setting first name:", action.payload);
      state.value = action.payload;
    },
    clearFirstName: (state) => {
      console.log("Clearing first name");
      state.value = "";
    }
  }
});

export const { getFirstName, clearFirstName } = firstNameSlice.actions;
export default firstNameSlice.reducer;
