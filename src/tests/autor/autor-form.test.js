import React from 'react';
import renderer from 'react-test-renderer';
import {AutorForm} from '../../components/autor/autor-form';
import {mount} from 'enzyme/build/index';

const mockSubmit = jest.fn(() => Promise.resolve(true));
const mockUpdateAutor = jest.fn(() => Promise.resolve(true));
const autorComponent = (
  <AutorForm
    saveAutor={mockSubmit}
    updateAutor={mockUpdateAutor}
    autor={{indexSelected: null}}/>
);

describe('test autorForm component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(autorComponent);
  });

  it('should renders without crashing', () => {
    const tree = renderer.create(autorComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('AutorConteiner should be contain form', () => {
    expect(wrapper.find('form').at(0)).toExist();
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

  it('should disabled button Gravar Autor when inputs nome and email is empty', () => {
    const button = wrapper.find('#btnGravarAutor').at(0);
    expect(button).toHaveProp('disabled', true);
  });

  it('should disabled false button Gravar Autor when inputs nome and email is not empty', () => {

    const nome = wrapper.find('#autorNome').at(0);
    const email = wrapper.find('#autorEmail').at(0);

    nome.simulate('change', {target: {name: 'nome', value: 'nomeTest'}});
    email.simulate('change', {target: {name: 'email', value: 'emailtest@email.com'}});

    expect(wrapper.state().nome).toEqual('nomeTest');
    expect(wrapper.state().email).toEqual('emailtest@email.com');

    const button = wrapper.find('#btnGravarAutor').at(0);
    expect(button).toHaveProp('disabled', false);
  });

  it('should submit form', () => {

    wrapper.find("form").simulate("submit");
    expect(mockSubmit).toBeCalled();
  });

  it('should update Autor when submit form', async () => {
    await wrapper.setProps({autor:{indexSelected: 0, autores:[{nome: 'nomeTest', email: 'nometest@email.com'}]}});
    expect(wrapper.state().nome).toEqual('nomeTest');
    expect(wrapper.state().email).toEqual('nometest@email.com');
    wrapper.find("form").simulate("submit");
    expect(mockSubmit).toBeCalled();
  });

  it('should save Autor when nextprops to equal', async () => {
    await wrapper.setProps({autor:{indexSelected: null, autores:[{nome: 'nomeTest', email: 'nometest@email.com'}]}});
    wrapper.find("form").simulate("submit");
    expect(mockSubmit).toBeCalled();
  });

});