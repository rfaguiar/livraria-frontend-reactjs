import Helper from './helper';
import {GET_AUTORES, SAVE_AUTOR} from './actionTypes';

export const getAutoresList = () => {
  const helper = new Helper();
  return dispatch => {
    return helper.getAutoresList()
      .then((data) => {
        return dispatch({type: GET_AUTORES, payload: data});
      }).catch();
  };
};

export const saveAutor = autor => {
  const helper = new Helper();
  return dispatch => {
    return helper.saveAutor(autor)
      .then(data => {
        return dispatch({type: SAVE_AUTOR, payload: autor});
      })
  }

}

