import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AutorTable from '../components/autor/autor-table';
import * as types from '../components/autor/actionTypes';


var Helper = require('../components/autor/helper').default;
Helper.prototype.getAutoresList = jest.fn(() => Promise.resolve(autores));

import initialState from './initial-state';
import {autores} from '../components/autor/mock';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const expectedActions = [
  { type: types.GET_AUTORES }
];
const store = mockStore(initialState, expectedActions);

describe('test AutorTable components', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <AutorTable />
      </Provider>
    );
  });

  it('should renders without crashing', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <AutorTable />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('should renders without crashing with call componentWillMount', () => {

    // const mockFetch = jest.fn();
    //
    // const wrapper = mount(
    //   <Provider store={store} getAutoresList={mockFetch} >
    //     <AutorTable />
    //   </Provider>
    // );
    //
    // expect(wrapper).toBeDefined();
    // expect(mockFetch).toHaveBeenCalled();
  // });

  it('should be contain a table with title "Autores"', () => {
    const table = wrapper.find('table').at(0);
    expect(table.find('caption')).toHaveText('Autores');
  });

  it('should be contain a table with columns Nome, Email', () => {
    const rowsTh = wrapper.find('table').at(0).find('thead').find('tr').find('th');
    expect(rowsTh.at(0)).toHaveText('Nome');
    expect(rowsTh.at(1)).toHaveText('Email');
  });

});
