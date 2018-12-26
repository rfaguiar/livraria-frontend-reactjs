import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {MemoryRouter} from 'react-router';
import Login, {_loginSubmit} from '../components/login';

describe('test Login component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
    const tree = renderer.create(<MemoryRouter><Login/></MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('test _loginSubmit', () => {

  it('should call fake.authenticate', () => {
    jest.useFakeTimers();
    const eventMock = {target: {
        email: {value: 'test@test'},
        senha: {value: '123456'}
      },
      preventDefault: () => {} };
    const historyMock = { push: jest.fn() };

    _loginSubmit(eventMock, historyMock);
    jest.runAllTimers();

    expect(historyMock.push.mock.calls[0]).toEqual([ ('/livros')]);
  });

});
