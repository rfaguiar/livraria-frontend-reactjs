import React from 'react';
import LivroTable from './livro-table';
import LivroForm from './livro-form';

const LivroContainer = () => {
  return (
    <div>
      <h1>Novo Livro</h1>
      <LivroForm/>
      <br/>
      <LivroTable/>
    </div>
  );
}

export default LivroContainer;