import { createSlice } from "@reduxjs/toolkit";

// ** Création du slice "auth" **
const userSlice = createSlice({
  name: "user",

  // ** Etat initial du slice **
  initialState: {
    firstName: "",
    lastName: "",
    userName: "",
    error: null,
  },

  // ** Reducer pour gérer les actions liées à l'utilisateur**
  reducers: {
    userSuccess: (state, action) => {
      // ** Mise à jour de l'état suite à une connexion réussie **
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.error = null;
    },

    userFail: (state, action) => {
      // ** Mise à jour de l'état suite à une connexion echouée **
      state.firstName = "";
      state.lastName = "";
      state.userName = "";
      state.error = action.payload;
    },

    userLogout: (state) => {
      // ** Réinitialise l'etat à ses valeurs initiale suite à une déconnexion **
      state.firstName = "";
      state.lastName = "";
      state.userName = "";
      state.error = null;
    },
  },
});

export const { userFail, userSuccess, userLogout } = userSlice.actions;

export default userSlice.reducer;
