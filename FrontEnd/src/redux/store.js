import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';
import { tokenReducer, firstNameReducer, lastNameReducer, userNameReducer } from './reducers';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
	userName: userNameReducer,
    firstName: firstNameReducer,
    lastName: lastNameReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});
