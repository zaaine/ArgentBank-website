// Définition de l'url de base de l'API
const BASE_URL = "http://localhost:3001/api/v1";

// Fonction asychrone pour l'authentification de l'utilisateur
export async function authLogin(props) {
  const response = await fetch(`${BASE_URL}/user/login`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: props.email,
      password: props.password,
    }),
  });
  return await response.json();
}

// Fonction asynchrone pour récupérer les informations de profil de l'utilisateur
export async function userProfile(token) {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
}

// Fonction asynchrone pour mettre à jour le nom d'utilisateur
export async function updateUserProfile(token, username) {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userName: username,
    }),
  });
  return await response.json();
}
