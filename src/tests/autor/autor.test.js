import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Autor from '../../components/autor/index';
import AutorContainer from '../../components/autor/autor-container';

import initialState from '../util/initial-state';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('test Autor component', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Autor/>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render autor AutorContainer', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Autor/>
      </Provider>
    );
    expect(wrapper.find(AutorContainer)).toExist();
  });
});