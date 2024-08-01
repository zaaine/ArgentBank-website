import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token || localStorage.getItem("token");

      if (!token) {
        throw new Error("Token is missing");
      }
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("success status 200");
        localStorage.setItem("userProfile", JSON.stringify(response.data.body));
        return response.data.body;
      }
    } catch (error) {
      if (error.response) {
        const errorStatus = error.response.status;
        console.log(`error ${errorStatus}`);
        return rejectWithValue("failed to fetch user Profile");
      }
    }
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    id: null,
    email: null,
    firstName: "",
    userName: "",
    error: null,
  },
  reducers: {
    clearUserProfile: (state) => {
      state.id = null;
      state.email = null;
      state.firstName = "";
      state.lastName = "";
      localStorage.removeItem("userProfile");
      localStorage.removeItem("token");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.userName = action.payload.userName;
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload; // caption of error in the store
      });
  },
});

export const { clearUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
