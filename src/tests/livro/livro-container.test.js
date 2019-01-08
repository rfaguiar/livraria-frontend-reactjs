import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LivroContainer from '../../components/livro/livro-container';
import LivroTable from '../../components/livro/livro-table';
import LivroForm from '../../components/livro/livro-form';

import initialState from '../util/initial-state';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);
const component = (
  <Provider store={store}>
    <LivroContainer/>
  </Provider>
);

describe('test LivroConteiner component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(component);
  });

  it('should renders without crashing ', () => {
    const tree = renderer.create(component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be "Novo Livro" h1 title ', () => {
    expect(wrapper.find('h1').first()).toHaveText('Novo Livro');
  });

  it('should be render LivroForm', () => {
    expect(wrapper.find(LivroForm)).toExist();
  });

  it('should be render LivroTable', () => {
    expect(wrapper.find(LivroTable)).toExist();
  });

});