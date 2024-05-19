// Import de la fonction configureStore de Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import du réducteur authReducer depuis le fichier "authSlice.js"
import authReducer from "./slice/authSlice";

// Configuration du magasin Redux en utilisant configureStore
const store = configureStore({
  reducer: {
    auth: authReducer, //Ajout du réducteur "authReducer" sous le nom "auth" dans le magasin
  },
});

// Export du magasin configuré
export default store;
