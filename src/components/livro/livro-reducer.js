import {ADD_LIVRO, GET_LIVROS} from './actionTypes';

const initialState = {
  livros: [],
  indexSelected: null,
};

const livroReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIVRO:
      return {
        ...state,
        livros: [...state.livros].concat(action.payload)
      };
    case GET_LIVROS:
      return {
        ...state,
        livros: [].concat(action.payload)
      };
    default:
      return state;
  }
};

export default livroReducer;