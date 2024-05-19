import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { userSlice } from "./slices/userSlice";

const store = configureStore({
  // ** Réducer principal du store **
  reducer: {
    // ** Enregistrement du slice "auth" sous la propriété "auth" du store**
    auth: authSlice,
    // ** Enregistrement du slice "user" sous la propriété "user" du store**
    user: userSlice,
  },
  // ** Activation de l'extension Redux DevTools (pour le débogage) **
  devTools: true,
});

// Export du magasin configuré
export default store;
