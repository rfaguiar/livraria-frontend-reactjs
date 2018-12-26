import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {fakeAuth} from '../components/auth';

const MenuContainer = () => {
  return (
    <nav className={'menu'}>
      <ul>
        <li><Link id={'livroItem'} to={'/livros'}>Livros</Link></li>
        <li><Link id={'autorItem'} to={'/autores'}>Autores</Link></li>
        <li><Link id={'vendaItem'} to={'/vendas'}>Vendas</Link></li>
        <li><Link id={'logoutItem'} to={'/'} onClick={_handleLogout}>Logout</Link></li>
      </ul>
    </nav>
  );
};

export const _handleLogout = () => {
  fakeAuth.signout();
}

export default MenuContainer;