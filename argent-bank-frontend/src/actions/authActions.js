import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const EDIT_USERNAME_FAILURE = "EDIT_USERNAME_FAILURE";
export const EDIT_USERNAME_SUCCESS = "EDIT_USERNAME_SUCCESS";

export const login = (email, password) => async (dispatch) => {
  try {
    const loginResponse = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      { email, password },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const { token } = loginResponse.data.body;

    const profileResponse = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const { userName } = profileResponse.data.body;

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token, userName },
    });
    return "/profile";
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: { error: error.message } });
  }
};
export const editUserName = (newUserName) => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    const editResponse = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      { userName: newUserName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const updatedUserName = editResponse.data.body.userName;
    dispatch({
      type: EDIT_USERNAME_SUCCESS,
      payload: { token, userName: updatedUserName },
    });
    return "/profile";
  } catch (error) {
    dispatch({
      type: EDIT_USERNAME_FAILURE,
      payload: { error: error.message },
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: {},
  });
};
