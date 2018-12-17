import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import LoginContainer from '../components/login/login-container';

describe('test LoginContainer component', () => {

  const wrapper = shallow(<LoginContainer />);

  it('renders without crashing', () => {
    shallow(<LoginContainer />);
    const tree = renderer.create(<LoginContainer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('LoginContainer should be contain form', () => {
    expect(wrapper.find('form')).toExist();
  });

  it('LoginContainer should be contain input loginEmail', () => {
    expect(wrapper.find('#loginEmail')).toMatchSelector('input');
  });

  it('LoginContainer should be contain input loginSenha', () => {
    expect(wrapper.find('#loginSenha')).toMatchSelector('input');
  });

  it('LoginContainer should be contain button Efetue Login and tyoe submit', () => {
    const button = wrapper.find('button');
    expect(button).toHaveText('Efetue Login');
  })

});
