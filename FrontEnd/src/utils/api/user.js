import PropTypes from "prop-types";

const BASE_URL = "http://localhost:3001/api/v1/";
const ERROR_MESSAGE = "Error. Please retry later.";

export function getLoginFetchData(data) {
  if (data) {
    return {
      id: data.body.id,
      status: data.status,
      email: data.body.email,
      firstName: data.body.firstName,
      lastName: data.body.lastName,
    };
  } else {
    return {
      id: null,
      status: 0,
      email: "",
      firstName: "",
      lastName: "",
    };
  }
}

getLoginFetchData.propTypes = {
  data: PropTypes.object.isRequired,
};

export const getLoginFetch = async (token) => {
  const API_URL = `${BASE_URL}user/profile`;

  try {
    const loginFetchResponse = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!loginFetchResponse.ok) {
      throw new Error(`HTTP error! status: ${loginFetchResponse.status}`);
    }
    const loginFetchResponseJson = await loginFetchResponse.json();
    return getLoginFetchData(loginFetchResponseJson);
  } catch (error) {
    alert(ERROR_MESSAGE);
    return null;
  }
};

getLoginFetch.propTypes = {
  token: PropTypes.string.isRequired,
};

export const saveUserProfileData = (data) => {
  if (data) {
    return {
      status: data.status,
      message: data.message,
    };
  } else {
    return {
      status: data.status,
      message: data.message,
    };
  }
};

saveUserProfileData.propTypes = {
  data: PropTypes.object.isRequired,
};

export const saveUserProfile = async (token, userProfile) => {
  const API_URL = `${BASE_URL}user/profile`;

  try {
    const saveUserProfileResponse = await fetch(API_URL, {
      method: "PUT",
      body: JSON.stringify(userProfile),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!saveUserProfileResponse.ok) {
      throw new Error(`HTTP error! status: ${saveUserProfileResponse.status}`);
    }
    const saveUserProfileResponseJson = await saveUserProfileResponse.json();
    return saveUserProfileData(saveUserProfileResponseJson);
  } catch (error) {
    alert(ERROR_MESSAGE);
    return null;
  }
};

saveUserProfile.propTypes = {
  token: PropTypes.string.isRequired,
  userProfile: PropTypes.object.isRequired,
};
