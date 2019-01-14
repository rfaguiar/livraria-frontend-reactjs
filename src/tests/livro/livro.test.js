import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Livro from '../../components/livro/index';
import LivroContainer from '../../components/livro/livro-container';

import initialState from '../util/initial-state';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);
const component = (
  <Provider store={store}>
    <Livro/>
  </Provider>
);

describe('test Livro component', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be render LivroContainer', () => {
    const wrapper = mount(component);
    expect(wrapper.find(LivroContainer)).toExist();
  });
});