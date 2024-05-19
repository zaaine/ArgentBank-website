import PropTypes from "prop-types";

const BASE_URL = "http://localhost:3001/api/v1/";
const ERROR_MESSAGE = "Error. Please retry later.";

// Function to handle login data
export function getLoginData(data) {
    if (data) {
        if (data.status !== 400 && data.status !== 401 && data.status !== 500) {
            const obj = {
                status: data.status,
                message: data.message,
                token: data.body.token,
            };
            return obj;
        } else {
            const obj = {
                status: data.status,
                message: data.message,
            };
            return obj;
        }
    }
}

getLoginData.propTypes = {
    data: PropTypes.object.isRequired,
};

// Function to handle fetched user profile data
export function getLoginFetchData(data) {
    if (data) {
        if (data.body !== undefined) {
            const obj = {
                id: data.body.id,
                status: data.status,
                email: data.body.email,
                firstName: data.body.firstName,
                lastName: data.body.lastName,
            };
            return obj;
        } else {
            const obj = {
                id: null,
                status: 0,
                email: "",
                firstName: "",
                lastName: "",
            };
            return obj;
        }
    }
}

getLoginFetchData.propTypes = {
    data: PropTypes.object.isRequired,
};

// Function to handle saving user profile data
export function saveUserProfileData(data) {
    if (data) {
        if (data.status !== 400 && data.status !== 401 && data.status !== 500) {
            const obj = {
                status: data.status,
                message: data.message,
            };
            return obj;
        } else {
            const obj = {
                status: data.status,
                message: data.message,
            };
            return obj;
        }
    }
}

saveUserProfileData.propTypes = {
    data: PropTypes.object.isRequired,
};

// Function to perform login via the API
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

// Function to fetch the user profile via the API
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

// Function to save the user profile via the API
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
