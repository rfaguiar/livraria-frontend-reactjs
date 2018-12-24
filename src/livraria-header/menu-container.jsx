import React from 'react';
import './style.css';

const MenuContainer = () => {
  return (
    <nav className={'menu'}>
      <ul>
        <li><a id={'livroItem'} href={'/livros'}>Livros</a></li>
        <li><a id={'autorItem'} href={'/autores'}>Autores</a></li>
        <li><a id={'vendaItem'} href={'/vendas'}>Vendas</a></li>
        <li><a id={'logoutItem'} href={'/login'}>Logout</a></li>
      </ul>
    </nav>
  );
};

export default MenuContainer;