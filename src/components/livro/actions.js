import {GET_LIVROS, ADD_LIVRO, REMOVE_LIVRO} from '../livro/actionTypes';
import Helper from '../livro/helper';
import {SELECT_LIVRO, UPDATE_LIVRO} from './actionTypes';

export const getLivrosList = () => {
  const helper = new Helper();
  return dispatch => {
    return helper.getLivrosList()
      .then((data) => {
        return dispatch({type: GET_LIVROS, payload: data});
      }).catch();
  };
};

export const saveLivro = livro => {
  const helper = new Helper();
  return dispatch => {
    return helper.saveLivro(livro)
      .then(() => {
        return dispatch({type: ADD_LIVRO, payload: livro});
      })
  };
};

export const removeLivro = livro => {
  const helper = new Helper();
  return dispatch => {
    return helper.removeLivro(livro)
      .then(() => {
        return dispatch({type: REMOVE_LIVRO, payload: livro});
      });
  };
};

export const updateLivro = (livro, index) => {
  const helper = new Helper();
  return dispatch => {
    return helper.saveLivro(livro)
      .then(() => {
        return dispatch({type: UPDATE_LIVRO, payload: {livro, index}});
      });
  };
};

export const selectLivro = index => {
  return {type: SELECT_LIVRO, payload: {index}};
};