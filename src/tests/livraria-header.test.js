import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme/build/index';
import { MemoryRouter } from 'react-router';
import LivrariaHeader from '../livraria-header';
import MenuContainer from '../livraria-header/menu-container';

describe('test LivrariaHeader component', () => {
  it('renders without crashing', () => {
    shallow(<LivrariaHeader/>);
    const tree = renderer.create(<MemoryRouter><LivrariaHeader/></MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render MenuContainer', () => {
    const wrapper = shallow(<LivrariaHeader/>);
    expect(wrapper.find(MenuContainer)).toExist();
  });
});