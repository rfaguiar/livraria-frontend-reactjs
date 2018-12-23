import React from 'react';
import './style.css';

const MenuContainer = () => {
  return (
    <nav className={'menu'}>
      <ul>
        <li><a id={'livroItem'} href={'#'}>Livros</a></li>
        <li><a id={'autorItem'} href={'#'}>Autores</a></li>
        <li><a id={'vendaItem'} href={'#'}>Vendas</a></li>
        <li><a id={'logoutItem'} href={'#'}>Logout</a></li>
      </ul>
    </nav>
  );
};

export default MenuContainer;