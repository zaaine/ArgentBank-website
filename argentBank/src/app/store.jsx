import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers";
import putReducer from "./reducers/putReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    put: putReducer,
  },
});
