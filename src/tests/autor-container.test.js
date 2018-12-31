import React from 'react';
import renderer from 'react-test-renderer';
import AutorConteiner from '../components/autor/autor-container';
import { mount } from 'enzyme';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import initialState from './initial-state';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('test AutorConteiner component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <AutorConteiner />
      </Provider>
    );
  });

  it('should renders without crashing', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <AutorConteiner />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('AutorConteiner should be contain form', () => {
    expect(wrapper.find('form').at(0)).toExist();
  });

  it('should be contains a "Novo Autor" title', () => {
    expect(wrapper.find('h1').at(0)).toHaveText('Novo Autor');
  });

  it('should be contains nome input', () => {
    const nome = wrapper.find('#autorNome').at(0);
    expect(nome).toMatchSelector('input');
    expect(nome).toHaveProp('name', 'nome');
  });

  it('should be contains email input', () => {
    const email = wrapper.find('#autorEmail').at(0);
    expect(email).toMatchSelector('input');
    expect(email).toHaveProp('name', 'email');
  });

  it('should be contain a button "Gravar Autor" and type submit', () => {
    const button = wrapper.find('#btnGravarAutor').at(0);
    expect(button).toHaveProp('type', 'submit');
    expect(button).toHaveText('Gravar Autor');
  });

});