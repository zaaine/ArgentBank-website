import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import authReducer from "./auth.reducer";

// Utiliser combineReducer pour combiner tous vs reducers en un seul
export default combineReducers({
  auth: authReducer,
  user: userReducer,
});
