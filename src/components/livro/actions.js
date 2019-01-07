import {GET_LIVROS} from '../livro/actionTypes';
import Helper from '../livro/helper';

export const getLivrosList = () => {
  const helper = new Helper();
  return dispatch => {
    return helper.getLivrosList()
      .then((data) => {
        return dispatch({type: GET_LIVROS, payload: data});
      }).catch();
  };
};