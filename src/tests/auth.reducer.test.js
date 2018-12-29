import { Reducer } from 'redux-testkit';
import initialState from './initial-state';
import authReducer from '../components/auth/reducer';
import * as types from '../components/auth/actionTypes';
import {SIGNOUT} from '../components/auth/actionTypes';

describe('test auth reducer tests', () => {
  it('should have initial state', () => {
    expect(authReducer(initialState.auth, {})).toEqual(initialState.auth);
  });

  it('should have initial state when undefined', () => {
    expect(authReducer(undefined, {})).toEqual(initialState.auth);
  });

  it('should have be isAuthenticated: true and username when AUTHENTICATE type', () => {
    const action = {type: types.AUTHENTICATE, payload: {username: 'userTest'}};
    const valueFromAction = {"authError": "", "isAuthenticated": true, "username": "userTest"};

    Reducer(authReducer)
      .withState(initialState.auth)
      .expect(action)
      .toReturnState(valueFromAction);
  });

  it('should have be isAuthenticated: false and authError: Usuario ou Senha incorretos when AUTH_ERROR type', () => {
    const action = {type: types.AUTH_ERROR};
    const valueFromAction = {"authError": "Usuario ou Senha incorretos", "isAuthenticated": false, "username": ""};

    Reducer(authReducer)
      .withState(initialState.auth)
      .expect(action)
      .toReturnState(valueFromAction);
  });

  it('should have be initialState when SIGNOUT type', () => {
    const action = {type: types.SIGNOUT};
    const valueFromAction = initialState.auth;

    Reducer(authReducer)
      .withState(initialState.auth)
      .expect(action)
      .toReturnState(valueFromAction);
  });
});