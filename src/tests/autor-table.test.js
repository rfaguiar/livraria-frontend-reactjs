import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import {AutorTable} from '../components/autor/autor-table';
import {autores} from '../components/autor/mock';

const getAjutoresListMock = jest.fn();

describe('test AutorTable components', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<AutorTable autores={autores.autores} getAutoresList={getAjutoresListMock} />);
  });

  it('should renders without crashing', () => {
    const tree = renderer.create(
        <AutorTable autores={autores.autores} getAutoresList={getAjutoresListMock}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
    expect(getAjutoresListMock).toBeCalled();
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

});
