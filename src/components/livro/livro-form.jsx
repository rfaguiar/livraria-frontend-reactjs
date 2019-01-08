import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAutoresList} from '../autor/actions';

export class LivroForm extends Component{

  constructor(props) {
    super(props);
    this.state = {
      selectAutor: '',
      autoresSelected: [],
      titulo: '',
      isbn: '',
      preco: 0.0,
      dataLancamento: ''
    }
  }

  componentDidMount() {
    this.props.getAutoresList();
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor={'livroTitulo'}>Titulo: </label>
          <input id={'livroTitulo'}
            name={'titulo'}
            onChange={this.inputChange.bind(this)}/>
          <br/>
          <label htmlFor={'livroIsbn'}>ISBN: </label>
          <input id={'livroIsbn'}
            name={'isbn'}
            onChange={this.inputChange.bind(this)}/>
          <br/>
          <label htmlFor={'livroPreco'}>Preço: </label>
          <input id={'livroPreco'}
            name={'preco'}
            onChange={this.inputChange.bind(this)}/>
          <br/>
          <label htmlFor={'livroDataLancamento'}>Data de Lançamento: </label>
          <input id={'livroDataLancamento'}
            name={'dataLancamento'}
            onChange={this.inputChange.bind(this)}/>
          <br/>
          <label htmlFor={'livroAutores'}>Selecione o Autor: </label>
          <select id={'livroAutores'}
            name={'selectAutor'}
            value={this.state.selectAutor}
            onChange={this.handleChange.bind(this)}>
            <option value={''}>Selecione</option>
            {
              this.props.autores.map((autor, index) => {
                return (
                  <option key={index} value={index}>{autor.nome}</option>
                );
              })
            }
          </select>
          <button id={'btnAddAutor'} type={'button'} onClick={this.addAutorToList.bind(this)}>Adicionar Autor</button>
          <br/>
          <label>Autores: </label>
          <ul>
            {
              this.state.autoresSelected.map((autor, index) => {
                return (
                  <li key={index}>{autor.nome}</li>
                );
              })
            }
          </ul>
          <br/>
          <button id={'btnGravar'} type={'submit'} disabled={true}>Gravar Livro</button>
        </form>
      </div>
    );
  }

  addAutorToList() {
    let autoresSelected = [...this.state.autoresSelected].concat(this.props.autores[this.state.selectAutor]);
    this.setState({
      autoresSelected,
      selectAutor: ''
    });
  }

  handleChange(event) {
    this.setState({
      selectAutor: event.target.value
    });
  }

  inputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
}

const mapStateToProps = state => ({
  autores: state.autor.autores
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAutoresList
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LivroForm);