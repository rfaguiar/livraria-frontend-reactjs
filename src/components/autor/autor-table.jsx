import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAutoresList} from './actions';

class AutorTable extends Component {

  componentWillMount() {
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
                  <td><button>alterar</button></td>
                  <td><button>remover</button></td>
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

const mapDispatchToProps = dispatch => bindActionCreators({ getAutoresList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AutorTable);