import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import {MemoryRouter} from 'react-router';
import Login from '../../components/login/index';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import initialState from '../util/initial-state';
import {createNodeMock} from '../util/mock';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('test Login component', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Login/>
        </MemoryRouter>
      </Provider>,
      { createNodeMock }).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
