import React from 'react';
import {MemoryRouter} from 'react-router';
import { Provider } from "react-redux";
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import MenuContainer from '../../livraria-header/menu-container';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import initialState from '../util/initial-state';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('test MenuContainer component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <MenuContainer />
        </MemoryRouter>
      </Provider>
    );
  });

  it('should renders without crashing ', () => {
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <MenuContainer />
        </MemoryRouter>
      </Provider>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should be menu item Livro', () => {
    const livro = wrapper.find('#livroItem').at(0);
    expect(livro).toMatchSelector('Link');
    expect(livro).toHaveProp('children', 'Livros');
    expect(livro).toHaveProp('to', '/livros');
  });

  it('should be menu item Autores', () => {
    const autor = wrapper.find('#autorItem').at(0);
    expect(autor).toMatchSelector('Link');
    expect(autor).toHaveProp('children', 'Autores');
    expect(autor).toHaveProp('to', '/autores');
  });

  it('should be menu item Vendas', () => {
    const venda = wrapper.find('#vendaItem').at(0);
    expect(venda).toMatchSelector('Link');
    expect(venda).toHaveProp('children', 'Vendas');
    expect(venda).toHaveProp('to', '/vendas');
  });

  it('should be menu item Logout', () => {
    const logout = wrapper.find('#logoutItem').at(0);
    expect(logout).toMatchSelector('Link');
    expect(logout).toHaveProp('children', 'Logout');
    expect(logout).toHaveProp('to', '/');
  });

});
