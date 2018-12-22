import React from 'react';

const LivroContainer = () => {
  return (
    <div>
      <h1>Novo Livro</h1>
      <label htmlFor={'livroTitulo'}>Titulo: </label>
      <input id={'livroTitulo'} name={'titulo'}/>
      <br/>
      <label htmlFor={'livroIsbn'}>ISBN: </label>
      <input id={'livroIsbn'} name={'isbn'}/>

    </div>
  );
}

export default LivroContainer;