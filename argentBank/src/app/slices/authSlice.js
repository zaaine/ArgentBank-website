import { createSlice } from "@reduxjs/toolkit";

// ** Création du slice "auth" **
const authSlice = createSlice({
  name: "auth",

  // ** Etat initial du slice **
  initialState: {
    isAuthenticated: false,
    token: "",
    error: null,
  },

  // ** Reducer pour gérer les actions liées à l'authentification **
  reducers: {
    loginSuccess: (state, action) => {
      // ** Mise à jour de l'état suite à une connexion réussie **
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.error = null;
    },

    loginFail: (state, action) => {
      // ** Mise à jour de l'état suite à une connexion echouée **
      state.isAuthenticated = false;
      state.token = null;
      state.error = action.payload;
    },

    logout: (state) => {
      // ** Réinitialise l'etat à ses valeurs initiale suite à une déconnexion **
      state.isAuthenticated = false;
      state.token = null;
      state.error = null;
    },
  },
});

export const { loginFail, loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
