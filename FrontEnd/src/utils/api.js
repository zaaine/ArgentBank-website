import PropTypes from "prop-types";

const BASE_URL = "http://localhost:3001/api-docs/";
const ERROR_MESSAGE = "Error. Please retry later.";

// Fonction pour traiter les données de login
export function getLoginData(data) {
	if (data) {
		if (data.status !== 400 && data.status !== 401 && data.status !== 500) {
			const obj = {
				status: data.status,
				message: data.message,
				token: data.body.token,
			};
			console.log("Successful login:", obj);
			return obj;
		} else {
			const obj = {
				status: data.status,
				message: data.message,
			};
			console.log("Failed login:", obj);
			return obj;
		}
	}
}

getLoginData.propTypes = {
	data: PropTypes.object.isRequired,
};

// Fonction pour traiter les données de profil utilisateur
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
			console.log("Fetched user profile:", obj);
			return obj;
		} else {
			console.log("Unauthorized access:", data.status);
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

// Fonction pour traiter les données de sauvegarde du profil utilisateur
export function saveUserProfileData(data) {
	if (data) {
		if (data.status !== 400 && data.status !== 401 && data.status !== 500) {
			const obj = {
				status: data.status,
				message: data.message,
			};
			console.log("Profile saved successfully:", obj);
			return obj;
		} else {
			const obj = {
				status: 404,
				message: "Error",
			};
			console.log("Failed to save profile:", obj);
			return obj;
		}
	}
}

saveUserProfileData.propTypes = {
	data: PropTypes.object.isRequired,
};

// Fonction pour effectuer le login via l'API
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
		const loginResponseJson = await loginResponse.json();
		console.log("Login API response:", loginResponseJson);
		return getLoginData(loginResponseJson);
	} catch (error) {
		console.error("Error fetching login:", error);
		alert(ERROR_MESSAGE);
		return null;
	}
};

getLogin.propTypes = {
	credentials: PropTypes.object.isRequired,
};

// Fonction pour récupérer le profil utilisateur via l'API
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
		const loginFetchResponseJson = await loginFetchResponse.json();
		console.log("Fetch profile API response:", loginFetchResponseJson);
		return getLoginFetchData(loginFetchResponseJson);
	} catch (error) {
		console.error("Error fetching user profile:", error);
		alert(ERROR_MESSAGE);
		return null;
	}
};

getLoginFetch.propTypes = {
	token: PropTypes.string.isRequired,
};

// Fonction pour sauvegarder le profil utilisateur via l'API
export const saveUserProfile = async (token, fullName) => {
	const API_URL = `${BASE_URL}user/profile`;

	try {
		const saveUserProfileResponse = await fetch(API_URL, {
			method: "PUT",
			body: JSON.stringify(fullName),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		const saveUserProfileResponseJson = await saveUserProfileResponse.json();
		console.log("Save profile API response:", saveUserProfileResponseJson);
		return saveUserProfileData(saveUserProfileResponseJson);
	} catch (error) {
		console.error("Error saving user profile:", error);
		alert(ERROR_MESSAGE);
		return null;
	}
};

saveUserProfile.propTypes = {
	token: PropTypes.string.isRequired,
	fullName: PropTypes.object.isRequired,
};