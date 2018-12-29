import {AUTHENTICATE, AUTH_ERROR, SIGNOUT} from './actionTypes';
import {fakeAuth} from './fake-auth';

export const authenticate = (username, password) => {
  return dispatch => {
    return fakeAuth.authenticate(username, password)
      .then(() => {
        return dispatch({type: AUTHENTICATE, payload: { username, password }});
      }).catch( () => dispatch({type: AUTH_ERROR}));
  };
};

export const logout = () => {
  return dispatch => {
    return fakeAuth.signout()
      .then(() => {
        return dispatch({type: SIGNOUT});
      }).catch();
  };
};