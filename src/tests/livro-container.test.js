import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import LivroContainer from '../components/livro/livro-container';

describe('test LivroConteiner component', () => {

  const wrapper = shallow(<LivroContainer/>);

  it('should renders without crashing ', () => {
    shallow(<LivroContainer/>);
    const tree = renderer.create(<LivroContainer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be "Novo Livro" h1 title ', () => {
    expect(wrapper.find('h1')).toHaveText('Novo Livro');
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

  it('should be table with columns Titulo, ISBN, Preço, Data Lançamento', () => {
    const table = wrapper.find('table');
    const thead = table.find('thead').find('tr').find('th');
    expect(table.find('caption')).toHaveText('Livros');
    expect(thead.at(0)).toHaveText('Titulo');
    expect(thead.at(1)).toHaveText('ISBN');
    expect(thead.at(2)).toHaveText('Preço');
    expect(thead.at(3)).toHaveText('Data Lançamento');
  });


});