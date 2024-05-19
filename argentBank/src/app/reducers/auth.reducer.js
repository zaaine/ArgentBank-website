const initialState = {
  isAuth: "false",
  token: null,
};

// Définir le Réducer
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    // SI l'action est de type SET_LOGIN
    case "GET_TOKEN":
      return {
        ...state,
        isAuth: true,
        token: action.payload,
      };
    // si l'action est de type SET_TOKEN
    case "USER_LOGOUT":
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    // Si l'action est de type SET_USER
    case "REMEMBER_ME":
      return {
        ...state,
        isAuth: true,
      };
    // Si l'action n'est d'aucun des types ci-dessus
    default:
      return state;
  }
}
