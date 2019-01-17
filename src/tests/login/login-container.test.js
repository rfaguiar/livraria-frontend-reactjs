import React from 'react';
import {MemoryRouter} from 'react-router';
import { Provider } from "react-redux";
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import LoginContainer from '../../components/login/login-container';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import initialState from '../util/initial-state';
import {AUTHENTICATE} from '../../components/auth/actionTypes';
import {createNodeMock} from '../util/mock';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const expectedActions = [
  { type: AUTHENTICATE }
];

const store = mockStore(initialState, expectedActions);

describe('test LoginContainer component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <LoginContainer/>
        </MemoryRouter>
      </Provider>
    );
  });

  it('renders without crashing', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <LoginContainer/>
        </MemoryRouter>
      </Provider>,
      { createNodeMock }).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('LoginContainer should be contain form', () => {
    expect(wrapper.find('form').at(0)).toExist();
  });

  it('LoginContainer should be contain input loginEmail', () => {
    const email = wrapper.find('#loginEmail').at(0);
    expect(email).toMatchSelector('TextField');
    expect(email).toHaveProp('name', 'email');
  });

  it('LoginContainer should be contain input loginSenha', () => {
    const senha = wrapper.find('#loginSenha').at(0);
    expect(senha).toMatchSelector('TextField');
    expect(senha).toHaveProp('name', 'senha');
  });

  it('LoginContainer should be contain button Efetue Login and tyoe submit', () => {
    const button = wrapper.find('button').at(0);
    expect(button).toHaveText('Efetue Login');
  });

});

describe('test submit form', () => {

  it('should submit form and handle prop function', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <LoginContainer/>
        </MemoryRouter>
      </Provider>
    );
    wrapper.find('form').at(0).simulate('submit', { target: { email: 'emailTest', senha: 'senhaTest' } });
  });
});

