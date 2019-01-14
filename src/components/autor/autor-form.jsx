import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveAutor, updateAutor} from './actions';

export class AutorForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.autor.indexSelected !== null &&
      (this.props.autor.indexSelected !==  nextProps.autor.indexSelected)) {
      this.setState({
        nome: nextProps.autor.autores[nextProps.autor.indexSelected].nome,
        email: nextProps.autor.autores[nextProps.autor.indexSelected].email
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm.bind(this)}>
          <label htmlFor={'autorNome'}>Nome: </label>
          <input id={'autorNome'} value={this.state.nome}
            onChange={(event) => this.inputChange(event)}
            name={'nome'}/>
          <br/>
          <label htmlFor={'autorEmail'}>Email: </label>
          <input id={'autorEmail'} value={this.state.email}
            onChange={(event) => this.inputChange(event)}
            name={'email'}/>
          <br/>
          <button id={'btnGravarAutor'} type={'submit'} disabled={!this.validateForm()}>Gravar Autor</button>
        </form>
      </div>
    );
  }

  handleSubmitForm(event) {
    event.preventDefault();
    this.saveOrUpdate()
      .then(() => {
      this.setState({
        nome: '',
        email: ''
      });
    });
  }

  saveOrUpdate() {
    const autor = {
      nome: this.state.nome,
      email: this.state.email
    };
    if (this.props.autor.indexSelected !== null) {
      return this.props.updateAutor(autor,this.props.autor.indexSelected);
    }
    return this.props.saveAutor(autor);
  }

  inputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  validateForm() {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return this.state.nome.length > 0 &&
      emailPattern.test(String(this.state.email).toLowerCase());
  }
}
const mapStateToProps = state => ({
  autor: state.autor
});

const mapDispatchToProps = dispatch => bindActionCreators({ saveAutor, updateAutor }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AutorForm);