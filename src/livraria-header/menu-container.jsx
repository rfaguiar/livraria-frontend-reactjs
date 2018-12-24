import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const MenuContainer = () => {
  return (
    <nav className={'menu'}>
      <ul>
        <li><Link id={'livroItem'} to={'/livros'}>Livros</Link></li>
        <li><Link id={'autorItem'} to={'/autores'}>Autores</Link></li>
        <li><Link id={'vendaItem'} to={'/vendas'}>Vendas</Link></li>
        <li><Link id={'logoutItem'} to={'/login'}>Logout</Link></li>
      </ul>
    </nav>
  );
};

export default MenuContainer;