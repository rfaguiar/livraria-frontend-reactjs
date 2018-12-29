import React from 'react';
import {authenticate} from '../auth';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

const LoginContainer = (props) => {
  return (
    <div>
      <span id="messages">{props.authError}</span>
      <form onSubmit={event => props.handleSubmit(event, props.history)
      }>
        <fieldset>
          <legend>Login</legend>
            <label htmlFor="loginEmail">Email:<span>*</span></label>
            <input id="loginEmail" name="email" type="email" />
            <br/>
            <label htmlFor="loginSenha">Senha:<span>*</span></label>
            <input id="loginSenha" name="senha" type="password" />
            <br/>
            <button type="submit">Efetue Login</button>
        </fieldset>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  authError: state.auth.authError
});

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (event, history) => {
      event.preventDefault();
      dispatch(
        authenticate(event.target.email.value, event.target.senha.value)

      ).then(() => history.push('/livros'))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));