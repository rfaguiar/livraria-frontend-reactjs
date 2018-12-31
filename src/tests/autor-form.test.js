import React from 'react';
import renderer from 'react-test-renderer';
import AutorForm from '../components/autor/autor-form';
import {mount} from 'enzyme/build/index';

describe('test autorForm component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<AutorForm />);
  });

  it('should renders without crashing', () => {
    const tree = renderer.create(<AutorForm />).toJSON();
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

});