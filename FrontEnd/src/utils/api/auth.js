import PropTypes from "prop-types";

const BASE_URL = "http://localhost:3001/api/v1/";
const ERROR_MESSAGE = "Error. Please retry later.";

export function getLoginData(data) {
  if (data) {
    if (data.status !== 400 && data.status !== 401 && data.status !== 500) {
      return {
        status: data.status,
        message: data.message,
        token: data.body.token,
      };
    } else {
      return {
        status: data.status,
        message: data.message,
      };
    }
  }
}

getLoginData.propTypes = {
  data: PropTypes.object.isRequired,
};

export const getLogin = async (credentials) => {
  const API_URL = `${BASE_URL}user/login`;

  try {
    const loginResponse = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!loginResponse.ok) {
      throw new Error(`HTTP error! status: ${loginResponse.status}`);
    }
    const loginResponseJson = await loginResponse.json();
    return getLoginData(loginResponseJson);
  } catch (error) {
    alert(ERROR_MESSAGE);
    return null;
  }
};

getLogin.propTypes = {
  credentials: PropTypes.object.isRequired,
};
