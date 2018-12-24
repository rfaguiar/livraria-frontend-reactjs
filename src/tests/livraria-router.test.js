import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import LivrariaRouter from '../livraria-router';

describe('test LivrariaRouter component', () => {

  const wrapper = shallow(<LivrariaRouter/>);

  it('should renders without crashing ', () => {
    shallow(<LivrariaRouter/>);
    const tree = renderer.create(<LivrariaRouter/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});