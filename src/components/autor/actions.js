import Helper from './helper';
import {GET_AUTORES, ADD_AUTOR, REMOVE_AUTOR} from './actionTypes';

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
      .then(() => {
        return dispatch({type: ADD_AUTOR, payload: autor});
      });
  }
};

export const removeAutor = autor => {
  const helper = new Helper();
  return dispatch => {
    return helper.removeAutor(autor)
      .then(() => {
        return dispatch({type: REMOVE_AUTOR, payload: autor});
      });
  };
};

