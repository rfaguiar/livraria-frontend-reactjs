import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import MenuContainer, {_handleLogout} from '../livraria-header/menu-container';
import { MemoryRouter } from 'react-router';
import {fakeAuth} from '../components/auth';


describe('test MenuContainer component', () => {

  const wrapper = shallow(<MenuContainer/>);

  it('should renders without crashing ', () => {
    shallow(<MenuContainer/>);
    const tree = renderer.create(<MemoryRouter><MenuContainer/></MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be menu item Livro', () => {
    const livro = wrapper.find('#livroItem');
    expect(livro).toMatchSelector('Link');
    expect(livro).toHaveProp('children', 'Livros');
    expect(livro).toHaveProp('to', '/livros');
  });

  it('should be menu item Autores', () => {
    const autor = wrapper.find('#autorItem');
    expect(autor).toMatchSelector('Link');
    expect(autor).toHaveProp('children', 'Autores');
    expect(autor).toHaveProp('to', '/autores');
  });

  it('should be menu item Vendas', () => {
    const venda = wrapper.find('#vendaItem');
    expect(venda).toMatchSelector('Link');
    expect(venda).toHaveProp('children', 'Vendas');
    expect(venda).toHaveProp('to', '/vendas');
  });

  it('should be menu item Logout', () => {
    const logout = wrapper.find('#logoutItem');
    expect(logout).toMatchSelector('Link');
    expect(logout).toHaveProp('children', 'Logout');
    expect(logout).toHaveProp('to', '/');
  });

});

describe('test logout menu', () => {

  it('should call fakeauth.signout when logout', () => {

    //given
    const signoutAuthMock = jest.fn();
    fakeAuth.signout = signoutAuthMock;

    //when
    _handleLogout();

    //then
    expect(signoutAuthMock).toBeCalled();

  });

});