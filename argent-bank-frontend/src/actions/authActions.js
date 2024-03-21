import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

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

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
