import React from 'react';
import {mount} from 'enzyme/build/index';
import renderer from 'react-test-renderer';
import {LivroForm} from '../../components/livro/livro-form';
import {autores} from '../../components/autor/mock';
import * as mockResponse from '../../components/livro/mock';

const getAutoresListMock = jest.fn();
const mockSubmit = jest.fn(() => Promise.resolve(true));
const mockUpdateLivro = jest.fn(() => Promise.resolve(true));
const component = (
  <LivroForm
    saveLivro={mockSubmit}
    updateLivro={mockUpdateLivro}
    autores={autores.autores}
    getAutoresList={getAutoresListMock}
    livro={{indexSelected: null}}
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

  it('should enable button Gravar Livro when inputs is not empty', async () => {
    await wrapper.setState({
      autoresSelected: [autores.autores[0]],
      titulo: 'tituloTest',
      isbn: '123456789',
      preco: 130.0,
      dataLancamento: '11/12/2019'
    });

    const button = wrapper.find('#btnGravar').at(0);
    expect(button).toHaveProp('disabled', false);

  });

  it('should change value to state when input value', () => {

    expect(wrapper.state().titulo).toEqual('');
    expect(wrapper.state().isbn).toEqual('');
    expect(wrapper.state().preco).toEqual(0.0);
    expect(wrapper.state().dataLancamento).toEqual('');

    const titulo = wrapper.find('#livroTitulo').at(0);
    titulo.simulate('change', {target: {name: 'titulo', value : 'tituloTeste'}});
    const isbn = wrapper.find('#livroIsbn').at(0);
    isbn.simulate('change', {target: {name: 'isbn', value : '123456789'}});
    const preco = wrapper.find('#livroPreco').at(0);
    preco.simulate('change', {target: {name: 'preco', value : 130.0}});
    const dataLancamento = wrapper.find('#livroDataLancamento').at(0);
    dataLancamento.simulate('change', {target: {name: 'dataLancamento', value : '11/12/2019'}});

    expect(wrapper.state().titulo).toEqual('tituloTeste');
    expect(wrapper.state().isbn).toEqual('123456789');
    expect(wrapper.state().preco).toEqual(130.0);
    expect(wrapper.state().dataLancamento).toEqual('11/12/2019');

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

  it('should submit form', () => {

    wrapper.find("form").simulate("submit");
    expect(mockSubmit).toBeCalled();
  });

  it('should update Livro when submit form', async () => {
    await wrapper.setProps({livro:{indexSelected: 0, livros: mockResponse.livros.livros}});
    expect(wrapper.state().titulo).toEqual(mockResponse.livros.livros[0].titulo);
    expect(wrapper.state().isbn).toEqual(mockResponse.livros.livros[0].isbn);
    expect(wrapper.state().preco).toEqual(mockResponse.livros.livros[0].preco);
    expect(wrapper.state().dataLancamento).toEqual(mockResponse.livros.livros[0].dataLancamento);
    expect(wrapper.state().autoresSelected).toEqual(mockResponse.livros.livros[0].autores);
    wrapper.find("form").simulate("submit");
    expect(mockUpdateLivro).toBeCalled();
  });

  it('should save Livro when nextprops to equal', async () => {
    await wrapper.setProps({livro:{indexSelected: null, livros: mockResponse.livros.livros}});
    wrapper.find("form").simulate("submit");
    expect(mockSubmit).toBeCalled();
  });

});