import { LOGIN, REGISTER } from "./action.js";

const initialState = {
  user: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case REGISTER:
      return {
        ...state,
        user: action.payload, // puedes guardar también como `newUser` si prefieres
      };

    default:
      return state;
  }
}

export default reducer;
