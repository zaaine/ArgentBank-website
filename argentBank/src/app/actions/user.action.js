import axios from "axios";

// Get USer information

export const getUser = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        config
      );

      dispatch({
        type: "GET_USER",
        payload: res.data.body,
      });
    } catch (err) {
      const message = err.response.data.message;
      alert(message);
    }
  };
};

export const updateUser = (token, username) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = {
    userName: username,
  };

  return async (dispatch) => {
    try {
      const res = await axios.put(
        "ht://localhost:3000/api/v1/user/profile",
        data,
        config
      );

      dispatch({
        type: "UPDATE_USER",
        payload: res.data.body,
      });
    } catch (err) {
      const message = err.response.data.message;
      alert(message);
    }
  };
};

// Logout User

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      sessionStorage.removeItem("token");
      localStorage.removeItem("token");
      dispatch({
        type: "USER_LOGOUT",
      });
    } catch (err) {
      alert("Problème lors de la déconnexion");
    }
  };
};

// Add New User

export const addUser = (email, password, firstName, lastName, userName) => {
  return async () => {
    try {
      await axios.post("http://localhost:3001/api/v1/user/signup", {
        email,
        password,
        firstName,
        lastName,
        userName,
      });
    } catch (err) {
      const message = err.response.data.message;
      alert(message);
    }
  };
};
