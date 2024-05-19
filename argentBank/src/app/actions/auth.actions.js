import axios from "axios";
import { getUser } from "./user.action";

export const getToken = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:3001/api/v1/user/login", {
        email,
        password,
      });

      const token = res.data.body.token;

      dispatch({
        type: "Get_TOKEN",
        payload: token,
      });

      dispatch(getUser(token));
    } catch (err) {
      if (err.response) {
        const message = err.response.data.message;

        alert(message);
      } else {
        alert("Server is not responding. Please try again Later.");
      }
    }
  };
};

export const rememberMe = () => {
  return {
    type: "REMEMBER_ME",
  };
};
