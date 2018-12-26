import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import { MemoryRouter } from 'react-router';
import DefaultLayoutProtected from '../livraria-router/default-layout-protected';

describe('test DefaultLayoutProtected component', () => {


  it('should renders without crashing', () => {
    shallow(<DefaultLayoutProtected/>);
    const tree = renderer.create(
      <MemoryRouter>
        <DefaultLayoutProtected/>
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });


});