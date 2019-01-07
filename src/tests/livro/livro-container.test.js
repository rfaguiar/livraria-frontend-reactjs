import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LivroContainer from '../../components/livro/livro-container';

import initialState from '../util/initial-state';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);
const component = (
  <Provider store={store}>
    <LivroContainer/>
  </Provider>
);

describe('test LivroConteiner component', () => {

  const wrapper = mount(component);

  it('should renders without crashing ', () => {
    const tree = renderer.create(component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be "Novo Livro" h1 title ', () => {
    expect(wrapper.find('h1').first()).toHaveText('Novo Livro');
  });

  it('should be input titulo do livro', () => {
    const titulo = wrapper.find('#livroTitulo');
    expect(titulo).toMatchSelector('input');
    expect(titulo).toHaveProp('name', 'titulo');
  });

  it('should be input isbn do livro', () => {
    const isbn = wrapper.find('#livroIsbn');
    expect(isbn).toMatchSelector('input');
    expect(isbn).toHaveProp('name', 'isbn');
  });

  it('should be input Preço', () => {
    const preco = wrapper.find('#livroPreco');
    expect(preco).toMatchSelector('input');
    expect(preco).toHaveProp('name', 'preco');
  });

  it('should be input Data Lançamento', () => {
    const dataLancamento = wrapper.find('#livroDataLancamento');
    expect(dataLancamento).toMatchSelector('input');
    expect(dataLancamento).toHaveProp('name', 'dataLancamento');
  });

  it('should be multiselect Autor', () => {
    const autores = wrapper.find('#livroAutores');
    expect(autores).toMatchSelector('select');
    expect(autores).toHaveProp('name', 'selectAutor');
  });

  it('should be button adicionar autor', () => {
    const btnAutor = wrapper.find('#btnAddAutor');
    expect(btnAutor).toMatchSelector('button');
    expect(btnAutor).toHaveProp('type', 'button');
    expect(btnAutor).toHaveText('Adicionar Autor');
  });

  it('should be form to submit livro', () => {
    expect(wrapper.find('form')).toExist();
  });

  it('should be button submit Gravar Livro', () => {
    const button = wrapper.find('#btnGravar');
    expect(button).toMatchSelector('button');
    expect(button).toHaveProp('type', 'submit');
    expect(button).toHaveText('Gravar Livro');
  });

});