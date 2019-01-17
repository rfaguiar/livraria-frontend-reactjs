import React from 'react';
import {authenticate} from '../auth';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {styles} from './styles';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import {MuiThemeProvider} from 'material-ui';

const LoginContainer = (props) => {
  return (
    <div>
      <MuiThemeProvider>
        <div style={styles.loginContainer}>
          <Paper style={styles.paper}>
            <span id="messages">{props.authError}</span>
            <form onSubmit={event => props.handleSubmit(event, props.history)}>
              <TextField hintText={'Email'}
                floatingLabelText={'Email'} fullWidth={true}
                name={'email'} type="email" id="loginEmail" />
              <TextField type={'password'} hintText={'Senha'}
                floatingLabelText={'Senha'} fullWidth={true}
                name={'senha'} id="loginSenha" />
              <div>
                <Checkbox
                  label="Lembrar me"
                  style={styles.checkRemember.style}
                  labelStyle={styles.checkRemember.labelStyle}
                  iconStyle={styles.checkRemember.iconStyle}
                />
                <RaisedButton label="Efetue Login"
                  primary={true}
                  type={'submit'}
                  style={styles.loginBtn}/>
              </div>
            </form>
          </Paper>
        </div>
      </MuiThemeProvider>
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