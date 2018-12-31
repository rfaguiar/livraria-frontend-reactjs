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

  it('should have find all autores when GET_AUTORES type', () => {
    const action = {type: types.GET_AUTORES, payload: autores};
    const valueFromAction = autores;

    Reducer(autorReducer)
      .withState(initialState.autor)
      .expect(action)
      .toReturnState(valueFromAction);
  });

  it('should be add autor to autores list when ADD_AUTOR type ', () => {
    const autorMock = {nome: 'autorTest', email: 'emailtest@email.com'};
    const action = {type: types.ADD_AUTOR, payload: autorMock};
    const autoresMock = [].push(autorMock);
    const valueFromAction = {autores: autoresMock};

    Reducer(autorReducer)
      .withState(initialState.autor)
      .expect(action)
      .toReturnState(valueFromAction);
  });

});