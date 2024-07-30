import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authSlice from "../redux/slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
