import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {logout} from '../components/auth';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const MenuContainer = (props) => {
  return (
    <nav className={'menu'}>
      <ul>
        <li><Link id={'livroItem'} to={'/livros'}>Livros</Link></li>
        <li><Link id={'autorItem'} to={'/autores'}>Autores</Link></li>
        <li><Link id={'vendaItem'} to={'/vendas'}>Vendas</Link></li>
        <li><Link id={'logoutItem'} to={'/'} onClick={props.logout}>Logout</Link></li>
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  authError: state.auth.authError
});

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);