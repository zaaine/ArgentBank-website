import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; 
import logger from 'redux-logger';
import firstNameReducer from './features/firstName';
import lastNameReducer from './features/lastName';
import tokenReducer from './features/token';

export const store = configureStore({
  reducer: {
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    token: tokenReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});