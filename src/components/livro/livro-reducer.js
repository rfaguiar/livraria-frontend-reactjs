import {GET_LIVROS} from './actionTypes';

const initialState = {
  livros: [],
  indexSelected: null,
};

const livroReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIVROS:
      return {
        ...state,
        livros: action.payload
      }
    default:
      return state;
  }
};

export default livroReducer;