import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {livros} from '../../components/livro/mock';
import initialState from '../util/initial-state';
import * as types from '../../components/livro/actionTypes';
import * as actions from '../../components/livro/actions';

const Helper = require('../../components/livro/helper').default;
Helper.prototype.getLivrosList = jest.fn(() => Promise.resolve(livros));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('livro actions tests', () => {

  it('should create an action to GET_LIVROS', () => {

    const store = mockStore(initialState);
    return store.dispatch(actions.getLivrosList())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(types.GET_LIVROS);
        expect(store.getActions()[0].payload).toEqual(livros);
      });
  });

});