import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Autor from '../components/autor';
import AutorContainer from '../components/autor/autor-conteiner';


describe('test Autor component', () => {
  it('renders without crashing', () => {
    shallow(<Autor/>);
    const tree = renderer.create(<Autor/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render autor AutorContainer', () => {
    const wrapper = shallow(<Autor/>);
    expect(wrapper.find(AutorContainer)).toExist();
  });
});