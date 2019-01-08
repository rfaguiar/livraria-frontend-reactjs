import React from 'react';
import {mount} from 'enzyme/build/index';
import renderer from 'react-test-renderer';
import {LivroForm} from '../../components/livro/livro-form';
import {autores} from '../../components/autor/mock';

const getAutoresListMock = jest.fn();
const component = (
  <LivroForm
    autores={autores.autores}
    getAutoresList={getAutoresListMock}
  />
);

describe('test livroForm component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(component);
  });

  it('should renders without crashing', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
    expect(getAutoresListMock).toBeCalled();
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

  it('should disabled button Gravar Livro when inputs is empty', () => {
    const button = wrapper.find('#btnGravar').at(0);
    expect(button).toHaveProp('disabled', true);
  });

  it('should select autor when change select value', () => {
    const select = wrapper.find('#livroAutores').at(0);
    select.simulate('change', {target: { value : 0}});
    expect(wrapper.state().selectAutor).toEqual(0);
  });

  it('should add autor do list when click Adicionar Autor button', async () => {
    await wrapper.setState({selectAutor: 0});
    const btnAutor = wrapper.find('#btnAddAutor').at(0);
    btnAutor.simulate('click');

    expect(wrapper.state().autoresSelected.length).toEqual(1);
    expect(wrapper.state().selectAutor).toEqual('');
    expect(wrapper.state().autoresSelected).toContain(autores.autores[0]);
  });

});