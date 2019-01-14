import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLivrosList, removeLivro, selectLivro} from './actions';

export class LivroTable extends Component {

  componentDidMount() {
    this.props.getLivrosList();
  }

  render() {
    return(
      <div>
        <table>
          <caption>Livros</caption>
          <thead>
          <tr>
            <th>Titulo</th>
            <th>ISBN</th>
            <th>Preço</th>
            <th>Data Lançamento</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.livros.map((livro, index) => {
              return (
                <tr key={index}>
                  <td>{livro.titulo}</td>
                  <td>{livro.isbn}</td>
                  <td>{livro.preco}</td>
                  <td>{livro.dataLancamento}</td>
                  <td><button onClick={() => this.props.selectLivro(index)} >alterar</button></td>
                  <td><button onClick={() => this.props.removeLivro(livro)} >remover</button></td>
                </tr>
              );
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  livros: state.livro.livros
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getLivrosList,
  removeLivro,
  selectLivro
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LivroTable);