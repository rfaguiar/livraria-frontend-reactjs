import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import {AutorTable} from '../../components/autor/autor-table';
import {autores} from '../../components/autor/mock';

const getAutoresListMock = jest.fn();
const removeAutorMock = jest.fn();
const selectAutorMock = jest.fn();
const component = (
  <AutorTable autores={autores.autores}
    getAutoresList={getAutoresListMock}
    removeAutor={removeAutorMock}
    selectAutor={selectAutorMock}
  />
);

describe('test AutorTable components', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(component);
  });

  it('should renders without crashing', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
    expect(getAutoresListMock).toBeCalled();
  });

  it('should be contain a table with title "Autores"', () => {
    const table = wrapper.find('table').at(0);
    expect(table.find('caption')).toHaveText('Autores');
  });

  it('should be contain a table with columns Nome, Email', () => {
    const rowsTh = wrapper.find('table').find('thead').find('tr').find('th');
    expect(rowsTh.at(0)).toHaveText('Nome');
    expect(rowsTh.at(1)).toHaveText('Email');
  });

  it('should be call props removeAutor when click button remover', () => {
    const rowsTBody = wrapper.find('table').find('tbody').find('tr').find('td');
    const removeButton = rowsTBody.find('button').at(1);

    removeButton.simulate('click');

    expect(removeAutorMock).toBeCalled();
  });

  it('should be call props selectAutor when click button alterar', () => {
    const rowsTBody = wrapper.find('table').find('tbody').find('tr').find('td');
    const alterarButton = rowsTBody.find('button').at(2);

    alterarButton.simulate('click');

    expect(selectAutorMock).toBeCalled();
  });

});
