import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAutoresList, removeAutor, selectAutor} from './actions';

export class AutorTable extends Component {

  componentDidMount() {
    this.props.getAutoresList();
  }

  render() {
    return (
      <div>
        <table>
          <caption>Autores</caption>
          <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.autores.map((autor, index) => {
              return (
                <tr key={index}>
                  <td>{autor.nome}</td>
                  <td>{autor.email}</td>
                  <td><button onClick={() => this.props.selectAutor(index)}>alterar</button></td>
                  <td><button onClick={() => this.props.removeAutor(autor)}>remover</button></td>
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
  autores: state.autor.autores
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAutoresList,
  removeAutor,
  selectAutor
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AutorTable);