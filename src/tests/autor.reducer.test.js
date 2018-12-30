import { Reducer } from 'redux-testkit';
import initialState from './initial-state';
import autorReducer from '../components/autor/autor-reducer';
import * as types from '../components/autor/actionTypes';
import {autores} from '../components/autor/mock';

describe('autor reducer test', () => {
  it('should have initial state', () => {
    expect(autorReducer(initialState.autor, {})).toEqual(initialState.autor);
  });

  it('should have initial state when undefined', () => {
    expect(autorReducer(undefined, {})).toEqual(initialState.autor);
  });

  it('should have be isAuthenticated: true and username when GET_AUTORES type', () => {
    const action = {type: types.GET_AUTORES, payload: autores};
    const valueFromAction = autores;

    Reducer(autorReducer)
      .withState(initialState.autor)
      .expect(action)
      .toReturnState(valueFromAction);
  });

});