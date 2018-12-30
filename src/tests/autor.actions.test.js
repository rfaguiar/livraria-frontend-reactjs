import {autores} from '../components/autor/mock';
import initialState from './initial-state';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../components/autor/actions';
import * as types from '../components/autor/types';

var Helper = require('../components/autor/helper').default;
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
});