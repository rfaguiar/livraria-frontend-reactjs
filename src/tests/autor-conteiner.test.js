import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import AutorConteiner from '../components/autor/autor-conteiner';

describe('test AutorConteiner component', () => {

  const wrapper = shallow(<AutorConteiner/>);

  it('should renders without crashing', () => {
    shallow(<AutorConteiner/>);
    const tree = renderer.create(<AutorConteiner />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('AutorConteiner should be contain form', () => {
    expect(wrapper.find('form')).toExist();
  });

  it('should be contains a "Novo Autor" title', () => {
    expect(wrapper.find('h1')).toHaveText('Novo Autor');
  });

  it('should be contains nome input', () => {
    expect(wrapper.find('#autorNome')).toMatchSelector('input');
  });

  it('should be contains email input', () => {
    expect(wrapper.find('#autorEmail')).toMatchSelector('input');
  });

  it('should be contain a button "Gravar Autor" and type submit', () => {
    const button = wrapper.find('#btnGravarAutor');
    expect(button).toHaveProp('type', 'submit');
    expect(button).toHaveText('Gravar Autor');
  });

  it('should be contain a table with title "Autores"', () => {
    const table = wrapper.find('table');
    expect(table.find('caption')).toHaveText('Autores');
  });

  it('should be contain a table with columns Nome, Email', () => {
    const rowsTh = wrapper.find('table').find('thead').find('tr').find('th');
    expect(rowsTh.at(0)).toHaveText('Nome');
    expect(rowsTh.at(1)).toHaveText('Email');
  });

});