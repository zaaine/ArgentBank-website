import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/authActions";

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
    case LOGOUT:
      return { ...state, token: null, error: null, userName: null };
    default:
      return state;
  }
};

export default authReducer;
