import {GET_AUTORES} from './actionTypes';

const initialState = {
  autores: []
};

const autorReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_AUTORES:
      return {
        ...state,
        autores: action.payload.autores
      }
    default:
      return state;
  }
};

export default autorReducer;