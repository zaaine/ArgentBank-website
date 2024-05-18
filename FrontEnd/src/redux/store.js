import { configureStore } from "@reduxjs/toolkit"
import firstNameReducer from "./features/firstName.js"
import lastNameReducer from "./features/lastName.js"
import tokenReducer from "./features/token.js"

export const store = configureStore({
  reducer: {
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    token: tokenReducer,
  },
});