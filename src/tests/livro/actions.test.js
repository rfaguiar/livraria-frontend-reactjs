import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {livros} from '../../components/livro/mock';
import initialState from '../util/initial-state';
import * as types from '../../components/livro/actionTypes';
import * as actions from '../../components/livro/actions';
import * as mockResponse from '../../components/livro/mock';

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

  it('should save autor in backserver and create an action to ADD_LIVRO', () => {
    const store = mockStore(initialState);
    return store.dispatch(actions.saveLivro(mockResponse.livros.livros[0]))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(types.ADD_LIVRO);
        expect(store.getActions()[0].payload).toEqual(mockResponse.livros.livros[0]);
      });
  });

  it('should create an action to REMOVE_LIVRO', () => {

    const store= mockStore(initialState);
    const removeMock = jest.fn(() => Promise.resolve({status: 200}));
    Helper.prototype.removeLivro = removeMock;
    return store.dispatch(actions.removeLivro(mockResponse.livros.livros[0]))
      .then(() => {
        expect(removeMock).toBeCalled();
        expect(store.getActions()[0].type).toEqual(types.REMOVE_LIVRO);
        expect(store.getActions()[0].payload).toEqual(mockResponse.livros.livros[0]);
      });
  });

});