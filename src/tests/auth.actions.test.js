import {AUTH_ERROR, AUTHENTICATE, SIGNOUT} from '../components/auth/actionTypes';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import initialState from './initial-state';
import {authenticate, logout} from '../components/auth/actions';
import {fakeAuth} from '../components/auth/fake-auth';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe('auth actions  tests', () => {

  it('should create an action to AUTHENTICATE', () => {
    //Mock methods
    fakeAuth.authenticate = jest.fn(() => Promise.resolve(true));

    const store = mockStore(initialState);

    return store.dispatch(authenticate('userTest', 'passTest'))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(AUTHENTICATE);
        expect(store.getActions()[0].payload).toEqual({username: 'userTest', password: 'passTest'});
      });
  });

  it('should create an action to AUTH_ERROR', () => {
    //Mock methods
    fakeAuth.authenticate = jest.fn(() => Promise.reject(false));

    const store = mockStore(initialState);

    return store.dispatch(authenticate('userTest', 'passTest'))
      .catch(() => {
        expect(store.getActions()[0].type).toEqual(AUTH_ERROR);
      });
  });


  it('should create an action to SIGNOUT', () => {
    //Mock methods
    fakeAuth.signout = jest.fn(() => Promise.resolve(true));

    const store = mockStore(initialState);

    return store.dispatch(logout())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(SIGNOUT);
      });
  });
});