import { SET_LOGIN, SET_TOKEN, SET_USER } from "../actions/userAction";

// Etat initial du Reducer
const initialState = {
  user: "",
  token: null,
  login: false,
};

// Définir le Réducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // SI l'action est de type SET_LOGIN
    case SET_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    // si l'action est de type SET_TOKEN
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    // Si l'action est de type SET_USER
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    // Si l'action n'est d'aucun des types ci-dessus
    default:
      return state;
  }
};

export default userReducer;
