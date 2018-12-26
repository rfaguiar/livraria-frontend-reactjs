import React from 'react';
import { withRouter } from 'react-router'
import LoginContainer from './login-container';
import {fakeAuth} from '../auth';

const Login = (props) => {
  return (
    <LoginContainer {...props} loginSubmit={_loginSubmit}/>
  );
};

export const _loginSubmit = (event, history) => {
  event.preventDefault();
  fakeAuth.authenticate(() => {
    history.push('/livros');
  }, event.target.email.value);
};

export default withRouter(Login);