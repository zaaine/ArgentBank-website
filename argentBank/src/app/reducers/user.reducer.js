// Etat initial du Reducer
const initialState = {
  loading: false,
  userData: null,
};

// Définir le Réducer
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    // SI l'action est de type GET_LOGIN
    case "GET_USER":
      return {
        ...state,
        userData: action.payload,
      };
    // si l'action est de type UPDATE_USER
    case "UPDATE_USER":
      return {
        ...state,
        userData: action.payload,
      };

    // Si l'action est de type ADD_USER
    case "ADD_USER":
      return action.payload;

    // Si l'action est de type USER_LOGOUT
    case "USER_LOGOUT":
      return {
        ...state,
        userData: null,
      };

    // Si l'action n'est aucun des types ci-dessus
    default:
      return state;
  }
}
