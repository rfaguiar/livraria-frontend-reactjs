import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Livro from '../../components/livro/index';
import LivroContainer from '../../components/livro/livro-container';

describe('test Livro component', () => {
  it('renders without crashing', () => {
    shallow(<Livro/>);
    const tree = renderer.create(<Livro/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be render LivroContainer', () => {
    const wrapper = shallow(<Livro/>);
    expect(wrapper.find(LivroContainer)).toExist();
  });
});