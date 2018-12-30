import Helper from './helper';
import {GET_AUTORES} from './actionTypes';

export const getAutoresList = () => {
  const helper = new Helper();
  return dispatch => {
    return helper.getAutoresList()
      .then((data) => {
        return dispatch({type: GET_AUTORES, payload: data});
      }).catch();
  };
};

