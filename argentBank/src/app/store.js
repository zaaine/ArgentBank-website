import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  // ** Réducer principal du store **
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
  // ** Activation de l'extension Redux DevTools (pour le débogage) **
  devTools: true,
});

// Export du magasin configuré
export default store;
