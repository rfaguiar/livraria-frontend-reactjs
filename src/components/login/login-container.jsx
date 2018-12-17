import React from 'react';

const LoginContainer = () => {
  return (
    <div>
      <span id="messages"></span>
      <form onSubmit={(event) => event.preventDefault()}>
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
}

export default LoginContainer;