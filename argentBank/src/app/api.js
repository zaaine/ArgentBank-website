// services/api.js
import axios from "axios";

// Définition de la variable `BASE_URL` en fonction de la valeur de `VITE_API_URL` provenant de l'environnement Vite
const BASE_URL = import.meta.env.VITE_API_URL;
// Fonction pour s'inscrire en utilisant les données utilisateur
export const signup = async (userData) => {
  // Envoi d'une requête POST pour l'inscription avec les données utilisateur à l'URL de base
  const response = await axios.post(`${BASE_URL}/user/signup`, userData);
  return response.data.body; // Retourne la réponse du serveur
};

// Fonction pour se connecter en utilisant les informations d'identification
export const login = async (credentials) => {
  // Envoi d'une requête POST pour la connexion avec les informations d'identification à l'URL de base
  const response = await axios.post(`${BASE_URL}/user/login`, credentials);
  return response.data.body.token; // Retourne le jeton d'authentification de la réponse
};

// Fonction pour récupérer le profil utilisateur en utilisant un jeton d'authentification
export const fetchUserProfile = async (token) => {
  // Envoi d'une requête POST pour récupérer le profil utilisateur avec le jeton d'authentification dans les en-têtes
  const response = await axios.post(
    `${BASE_URL}/user/profile`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data.body; // Retourne le profil utilisateur de la réponse
};

// Fonction pour mettre à jour le profil utilisateur en utilisant les données utilisateur et un jeton d'authentification
export const updateUserProfile = async (userData, token) => {
  // Envoi d'une requête PUT pour mettre à jour le profil utilisateur avec les données utilisateur et le jeton d'authentification dans les en-têtes
  const response = await axios.put(`${BASE_URL}/user/profile`, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.body; // Retourne la réponse du serveur après la mise à jour du profil
};
