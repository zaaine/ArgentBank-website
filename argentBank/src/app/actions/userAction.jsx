// Définir des types d'actions
export const SET_TOKEN = "SET_TOKEN";
export const SET_LOGIN = "SET_LOGIN";
export const SET_USER = "SET_USER";

// Action pour définir l'état de connexion
export const setLogin = (login) => {
  return {
    type: SET_LOGIN,
    payload: login,
  };
};

//Action pour d"inir le token d'authentification
export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

// Action pour définir l'utilisateur
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
