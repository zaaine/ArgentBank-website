import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';
import { tokenReducer, firstNameReducer, lastNameReducer } from './reducers';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    firstName: firstNameReducer,
    lastName: lastNameReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});
