import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  EDIT_USERNAME_SUCCESS,
  EDIT_USERNAME_FAILURE,
} from "../actions/authActions";

const initialState = {
  token: null,
  error: null,
  userName: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        error: null,
        userName: action.payload.userName,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        error: action.payload.error,
        userName: null,
      };
    case EDIT_USERNAME_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        error: null,
        userName: action.payload.userName,
      };
    case EDIT_USERNAME_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case LOGOUT:
      return { ...state, token: null, error: null, userName: null };
    default:
      return state;
  }
};

export default authReducer;
