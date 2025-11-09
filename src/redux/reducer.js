import {
  CREATE_USER,
  GET_USERS,
  CREATE_PRESUPUESTO,
  GET_PHOTOS,
  CREATE_PHOTO,
} from "./action.js";

const initialState = {
  presupuesto: [],
  user: [],
  photos: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case GET_USERS:
      return {
        ...state,
        user: action.payload,
      };

    case CREATE_PRESUPUESTO:
      return {
        ...state,
        presupuesto: [...state.presupuesto, action.payload],
      };
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    case CREATE_PHOTO:
      return {
        ...state,
        photos: [...state.photos, action.payload],
      };

    default:
      return state;
  }
}

export default reducer;
