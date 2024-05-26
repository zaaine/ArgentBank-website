import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

const store = configureStore({
  // ** Réducer principal du store **
  reducer: {
    auth: authReducer,
  },
  // ** Activation de l'extension Redux DevTools (pour le débogage) **
  devTools: true,
});

// Export du magasin configuré
export default store;
