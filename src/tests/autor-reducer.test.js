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
    const action = {type: types.GET_AUTORES, payload: autores.autores};
    const valueFromAction = {...initialState.autor, autores: [].concat(autores.autores)};

    Reducer(autorReducer)
      .withState(initialState.autor)
      .expect(action)
      .toReturnState(valueFromAction);
  });

  it('should be add autor to autores list when ADD_AUTOR type ', () => {
    const autorMock = {nome: 'autorTest', email: 'emailtest@email.com'};
    const action = {type: types.ADD_AUTOR, payload: autorMock};
    const valueFromAction = {...initialState.autor, autores: [].concat(autorMock)};

    Reducer(autorReducer)
      .withState(initialState.autor)
      .expect(action)
      .toReturnState(valueFromAction);
  });

  it('should be remove autor to autores list when REMOVE_AUTOR type', () => {
    const autorMock = {nome: 'autorTest', email: 'emailtest@email.com'};
    const action = {type: types.REMOVE_AUTOR, payload: autorMock};
    const valueFromAction = {...initialState.autor, autores: []};
    initialState.autor.autores.concat(autorMock);

    Reducer(autorReducer)
      .withState(initialState.autor)
      .expect(action)
      .toReturnState(valueFromAction);
  });

  it('should be not remove autor to autores list when REMOVE_AUTOR type and autor not equal', () => {
    const autorMock = {nome: 'autorTest1', email: 'emailtest@email.com'};
    const action = {type: types.REMOVE_AUTOR, payload: autorMock};
    initialState.autor.autores.concat(autorMock);
    const stateMock = {
      "autores": [
        {"email": "fulano@fulano.com", "nome": "fulano"},
        {"email": "ciclano@ciclano.com", "nome": "ciclano"}
      ]
    };

    Reducer(autorReducer)
      .withState(stateMock)
      .expect(action)
      .toReturnState(stateMock);
  });

  it('should be update autor to autores list when UPDATE_AUTOR type', () => {
    const autorMock = {nome: 'autorTestUpdated', email: 'emailtestupdated@email.com'};
    const action = {type: types.UPDATE_AUTOR, payload: {autor: autorMock, index: 0}};
    const valueFromAction = {...initialState.autor, autores: [autorMock]};
    const stateMock = {
      "autores": [
        {nome: 'autorTest', email: 'emailtest@email.com'}
      ]
    };

    Reducer(autorReducer)
      .withState(stateMock)
      .expect(action)
      .toReturnState(valueFromAction);
  });

  it('should be update autor to autores list when SELECT_AUTOR type', () => {
    const action = {type: types.SELECT_AUTOR, payload: {index: 0}};
    const valueFromAction = {...initialState.autor, indexSelected: 0};

    Reducer(autorReducer)
      .withState(initialState.autor)
      .expect(action)
      .toReturnState(valueFromAction);
  });

});