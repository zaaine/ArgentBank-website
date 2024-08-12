import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/slices/authSlice";
import userProfileReducer from "../redux/slices/userProfileSlice";
import editProfileReducer from "../redux/slices/editProfilSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    userProfile: userProfileReducer,
    editProfile: editProfileReducer,
  },
});
