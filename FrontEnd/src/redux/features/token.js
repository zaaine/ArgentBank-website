import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	value: localStorage.getItem("token") || null,
};
const tokenSlice = createSlice({
	name: "token",
	initialState,
	reducers: {
		getToken: (state, action) => {
			state.value = action.payload;
			localStorage.setItem("token", action.payload);
			console.log("Token set:", action.payload);
		},
		clearToken: (state) => {
			state.value = null;
			localStorage.removeItem("token");
			console.log("Token cleared");
		},
	},
});

export const { getToken, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;
