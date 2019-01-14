import {GET_AUTORES, ADD_AUTOR, REMOVE_AUTOR, UPDATE_AUTOR, SELECT_AUTOR} from './actionTypes';

const initialState = {
  autores: [],
  indexSelected: null
};

const autorReducer = (state = initialState, action) => {

  switch (action.type) {
    case SELECT_AUTOR:
      return {
        ...state,
        indexSelected: action.payload.index
      };
    case UPDATE_AUTOR:
      const autores = [
        ...state.autores.slice(0, action.payload.index),
        Object.assign(
          {},
          state.autores[action.payload.index],
          {nome: action.payload.autor.nome,
            email: action.payload.autor.email}),
        ...state.autores.slice(action.payload.index + 1)
      ];
      return {
        ...state,
        indexSelected: null,
        autores
      };
    case REMOVE_AUTOR:
      return {
        ...state,
        autores: state.autores.filter(autor => autor !== action.payload)
      };
    case ADD_AUTOR:
      return {
        ...state,
        autores: [...state.autores].concat({
          nome: action.payload.nome,
          email: action.payload.email
        })
      };
    case GET_AUTORES:
      return {
        ...state,
        autores: [].concat(action.payload)
      };
    default:
      return state;
  }
};

export default autorReducer;