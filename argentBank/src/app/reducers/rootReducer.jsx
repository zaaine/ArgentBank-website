import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";

// Utiliser combineReducer pour combiner tous vs reducers en un seul
export default combineReducers({
  user: userReducer,
});
