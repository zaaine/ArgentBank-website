import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	value: "",
};
const lastNameSlice = createSlice({
	name: "lastName",
	initialState,
	reducers: {
		setLastName: (state, action) => {
			state.value = action.payload;
		},
		clearLastName: (state) => {
			state.value = "";
		},
	},
});

export const { setLastName, clearLastName } = lastNameSlice.actions;
export default lastNameSlice.reducer;
