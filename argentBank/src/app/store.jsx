import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";

// configuration de la persistance
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Création du store Redux en utilisant configureStore
const store = configureStore({
  reducer: persistedReducer, // Utiliser le reducer persistant comme reducer principal
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  devTools: true, // Activr l'extension de devTools
});

// Création du persistor en utilisant persistStore avec le store
const persistor = persistStore(store);

export { store, persistor }; // Exporter le persistor et le store;
