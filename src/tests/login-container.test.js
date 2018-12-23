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
    const email = wrapper.find('#loginEmail');
    expect(email).toMatchSelector('input');
    expect(email).toHaveProp('name', 'email');
  });

  it('LoginContainer should be contain input loginSenha', () => {
    const senha = wrapper.find('#loginSenha');
    expect(senha).toMatchSelector('input');
    expect(senha).toHaveProp('name', 'senha');
  });

  it('LoginContainer should be contain button Efetue Login and tyoe submit', () => {
    const button = wrapper.find('button');
    expect(button).toHaveText('Efetue Login');
  })

});
