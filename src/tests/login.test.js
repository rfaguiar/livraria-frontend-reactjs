import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Login from '../components/login';
import LoginContainer from '../components/login/login-container';


describe('test Login component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
    const tree = renderer.create(<Login />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders three LoginContainer component', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find(LoginContainer)).toExist();
  });

});