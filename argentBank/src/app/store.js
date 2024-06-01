import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
  whitelist: ["user"],
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  // ** Réducer principal du store **
  reducer: {
    auth: persistedReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
  // ** Activation de l'extension Redux DevTools (pour le débogage) **
  devTools: true,
});

const persistor = persistStore(store);

// Export du magasin configuré
export { store, persistor };
