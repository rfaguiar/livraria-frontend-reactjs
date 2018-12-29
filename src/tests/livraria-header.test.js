import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme/build/index';
import { MemoryRouter } from 'react-router';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LivrariaHeader from '../livraria-header';
import MenuContainer from '../livraria-header/menu-container';

import initialState from './initial-state';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('test LivrariaHeader component', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <LivrariaHeader />
        </MemoryRouter>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render MenuContainer', () => {
    const wrapper = shallow(<LivrariaHeader store={store}/>);
    expect(wrapper.find(MenuContainer)).toExist();
  });
});