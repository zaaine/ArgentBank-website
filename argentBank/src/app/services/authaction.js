import Axios from "axios";
import { setToken } from "../Slices/authSlice";

// GET TOKEN

export const loginUser = (userCredentials) => async (dispatch) => {
  try {
    const response = await Axios.post(
      `http://localhost:3001/api/v1/user/login`,
      userCredentials
    );
    const token = response.data.body.token;
    dispatch(setToken(token));
  } catch (error) {
    alert("Error entering identifiers");
    console.error("Error entering identifiers : ", error);
  }
};
