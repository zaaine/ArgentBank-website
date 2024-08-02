import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateUserName = createAsyncThunk(
  "user/updateUserName",
  async (newUserName, { rejectWithValue, getState }) => {
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
        console.log("Profile updated successfully");
        return { userName: newUserName };
      } else {
        return rejectWithValue("failled to update user Name");
      }
    } catch (error) {
      if (error.response) {
        console.error(`Error : ${error.response.data.message}`);
        return rejectWithValue(error.response.data.message);
      } else {
        console.error("Error: ", error.message);
        return rejectWithValue("An unexpected error occurred");
      }
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

        // Accède à l'état utilisateur et met à jour le userName
        const userProfileState =
          JSON.parse(localStorage.getItem("userProfile")) || {};
        userProfileState.userName = action.payload.userName;
        localStorage.setItem("userProfile", JSON.stringify(userProfileState));
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default editProfileSlice.reducer;
