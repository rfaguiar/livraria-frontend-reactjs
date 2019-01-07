import { Reducer } from 'redux-testkit';
import initialState from '../util/initial-state';
import {livros} from '../../components/livro/mock';
import * as types from '../../components/livro/actionTypes';
import livroReducer from '../../components/livro/livro-reducer';

describe('livro reducer test', () => {
  it('should have initial state', () => {
    expect(livroReducer(initialState.livro, {})).toEqual(initialState.livro);
  });

  it('should have initial state when undefined', () => {
    expect(livroReducer(undefined, {})).toEqual(initialState.livro);
  });

  it('should have find all livros when GET_LIVROS type', () => {
    const action = {type: types.GET_LIVROS, payload: livros.livros};
    const valueFromAction = {...initialState.livro, livros: [].concat(livros.livros)};

    Reducer(livroReducer)
      .withState(initialState.livro)
      .expect(action)
      .toReturnState(valueFromAction);
  });

});