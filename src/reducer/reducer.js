import { LOGIN, REGISTER } from "./action.js";

const initialState = {
  user: null,
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
        user: action.payload,
      };

    default:
      return state;
  }
}


export default reducer;
