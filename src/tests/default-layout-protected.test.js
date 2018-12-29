import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DefaultLayoutProtected from '../livraria-router/default-layout-protected';


import initialState from './initial-state';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('test DefaultLayoutProtected component', () => {

  it('should renders without crashing', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <DefaultLayoutProtected/>
        </MemoryRouter>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});