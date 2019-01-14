import {autores} from '../../components/autor/mock';
import initialState from '../util/initial-state';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../components/autor/actions';
import * as types from '../../components/autor/actionTypes';

const Helper = require('../../components/autor/helper').default;
Helper.prototype.getAutoresList = jest.fn(() => Promise.resolve(autores));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('autor actions tests', () => {

  it('should create an action to GET_AUTORES', () => {

    const store = mockStore(initialState);
    return store.dispatch(actions.getAutoresList())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(types.GET_AUTORES);
        expect(store.getActions()[0].payload).toEqual(autores);
      });
  });

  it('should create an action to ADD_AUTOR', () => {

    const store = mockStore(initialState);
    const mockAutor = {nome: 'autorTest', email: 'emailtest@test.com'};
    return store.dispatch(actions.saveAutor(mockAutor))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(types.ADD_AUTOR);
        expect(store.getActions()[0].payload).toEqual(mockAutor);
      });
  });

  it('should create an action to REMOVE_AUTOR', () => {

    const store= mockStore(initialState);
    const mockAutor = {nome: 'autorTest', email: 'emailtest@test.com'};
    const removeMock = jest.fn(() => Promise.resolve({status: 200}));
    Helper.prototype.removeAutor = removeMock;
    return store.dispatch(actions.removeAutor(mockAutor))
      .then(() => {
        expect(removeMock).toBeCalled();
        expect(store.getActions()[0].type).toEqual(types.REMOVE_AUTOR);
        expect(store.getActions()[0].payload).toEqual(mockAutor);
      });
  });

  it('should create an action to UPDATE_AUTOR', () => {

    const store= mockStore(initialState);
    const mockAutor = {nome: 'autorTest', email: 'emailtest@test.com'};
    const saveMock = jest.fn(() => Promise.resolve({status: 200}));
    Helper.prototype.saveAutor = saveMock;
    return store.dispatch(actions.updateAutor(mockAutor, 0))
      .then(() => {
        expect(saveMock).toBeCalled();
        expect(store.getActions()[0].type).toEqual(types.UPDATE_AUTOR);
        expect(store.getActions()[0].payload).toEqual({autor: mockAutor, index: 0});
      });
  });

  it('should create an action to SELECT_AUTOR', async () => {
    const store= mockStore(initialState);
    await store.dispatch(actions.selectAutor(0));
    expect(store.getActions()[0].type).toEqual(types.SELECT_AUTOR);
    expect(store.getActions()[0].payload).toEqual({index: 0});
  });

});