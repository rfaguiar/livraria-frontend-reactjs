import {ADD_LIVRO, GET_LIVROS, REMOVE_LIVRO, SELECT_LIVRO, UPDATE_LIVRO} from './actionTypes';

const initialState = {
  livros: [],
  indexSelected: null,
};

const livroReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LIVRO:
      return {
        ...state,
        indexSelected: action.payload.index
      };
    case UPDATE_LIVRO:
      const livros = [
        ...state.livros.slice(0, action.payload.index),
        Object.assign(
          {},
          state.livros[action.payload.index],
          {titulo: action.payload.livro.titulo,
            isbn: action.payload.livro.isbn,
            preco: action.payload.livro.preco,
            dataLancamento: action.payload.livro.dataLancamento,
            autores: action.payload.livro.autores}),
        ...state.livros.slice(action.payload.index + 1)
      ];
      return {
        ...state,
        indexSelected: null,
        livros
      };
    case REMOVE_LIVRO:
      return {
        ...state,
        livros: state.livros.filter(livro => livro !== action.payload)
      };
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