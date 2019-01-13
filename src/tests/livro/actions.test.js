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

  it('should save autor in backserver and create an action to ADD_LIVRO', () => {
    const store = mockStore(initialState);
    const livroMock = {
      titulo: 'reactjs',
      isbn: '12345678',
      preco: 20.0,
      dtLancamento: '11/05/2018',
      autores: [
        {nome: 'fulano', email: 'fulano@email.com'}
      ]
    };
    return store.dispatch(actions.saveLivro(livroMock))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(types.ADD_LIVRO);
        expect(store.getActions()[0].payload).toEqual(livroMock);
      });

  });
});