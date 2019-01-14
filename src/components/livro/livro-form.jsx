import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAutoresList} from '../autor/actions';
import {saveLivro, updateLivro} from './actions';

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.livro.indexSelected !== null &&
      (this.props.livro.indexSelected !==  nextProps.livro.indexSelected)) {
      this.setState({
        autoresSelected: nextProps.livro.livros[nextProps.livro.indexSelected].autores,
        titulo: nextProps.livro.livros[nextProps.livro.indexSelected].titulo,
        isbn: nextProps.livro.livros[nextProps.livro.indexSelected].isbn,
        preco: nextProps.livro.livros[nextProps.livro.indexSelected].preco,
        dataLancamento: nextProps.livro.livros[nextProps.livro.indexSelected].dataLancamento
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm.bind(this)}>
          <label htmlFor={'livroTitulo'}>Titulo: </label>
          <input id={'livroTitulo'}
            name={'titulo'}
            value={this.state.titulo}
            onChange={this.inputChange.bind(this)}/>
          <br/>
          <label htmlFor={'livroIsbn'}>ISBN: </label>
          <input id={'livroIsbn'}
            name={'isbn'}
            value={this.state.isbn}
            onChange={this.inputChange.bind(this)}/>
          <br/>
          <label htmlFor={'livroPreco'}>Preço: </label>
          <input id={'livroPreco'}
            name={'preco'}
            value={this.state.preco}
            onChange={this.inputChange.bind(this)}/>
          <br/>
          <label htmlFor={'livroDataLancamento'}>Data de Lançamento: </label>
          <input id={'livroDataLancamento'}
            name={'dataLancamento'}
            value={this.state.dataLancamento}
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
          <button id={'btnGravar'} type={'submit'} disabled={!this.validateForm()} >Gravar Livro</button>
        </form>
      </div>
    );
  }

  handleSubmitForm(event) {
    event.preventDefault();
    this.saveOrUpdate().then(() => {
      this.setState({
        selectAutor: '',
        autoresSelected: [],
        titulo: '',
        isbn: '',
        preco: 0.0,
        dataLancamento: ''
      });
    });
  }
  saveOrUpdate() {
    const livro = {
      autores: this.state.autoresSelected,
      titulo: this.state.titulo,
      isbn: this.state.isbn,
      preco: this.state.preco,
      dataLancamento: this.state.dataLancamento
    };
    if (this.props.livro.indexSelected !== null) {
      return this.props.updateLivro(livro,this.props.livro.indexSelected);
    }
    return this.props.saveLivro(livro);
  }

  validateForm() {
    return this.state.titulo.length > 0 &&
      this.state.autoresSelected.length > 0 &&
      this.state.dataLancamento !== '' &&
      this.state.isbn !== '' &&
      this.state.preco > 0.0;
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
  livro: state.livro,
  autores: state.autor.autores
});

const mapDispatchToProps = dispatch => bindActionCreators({
  saveLivro,
  getAutoresList,
  updateLivro
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LivroForm);