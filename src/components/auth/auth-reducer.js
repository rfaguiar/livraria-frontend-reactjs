import {AUTH_ERROR, AUTHENTICATE, SIGNOUT} from './actionTypes';

const initialState = {
  isAuthenticated: false,
  authError: '',
  username: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username
      };
    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        authError: 'Usuario ou Senha incorretos'
      };
    case SIGNOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;