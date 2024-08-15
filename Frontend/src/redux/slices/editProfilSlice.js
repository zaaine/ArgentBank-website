import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setUserName } from "./userProfileSlice";

export const updateUserName = createAsyncThunk(
  "user/updateUserName",
  async (newUserName, { rejectWithValue, getState, dispatch }) => {
    try {
      const state = getState();
      const token = state.auth.token || localStorage.getItem("token");

      if (!token) {
        throw new Error("Token is missing");
      }
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { userName: newUserName },

        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        dispatch(setUserName(newUserName));
        return { userName: newUserName };
      } else {
        return rejectWithValue("failled to update user Name");
      }
    } catch (error) {
      console.error(`Error : ${error.response.data.message}`);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const editProfileSlice = createSlice({
  name: "editProfile",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default editProfileSlice.reducer;
