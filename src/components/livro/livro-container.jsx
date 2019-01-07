import React from 'react';
import LivroTable from './livro-table';

const LivroContainer = () => {
  return (
    <div>
      <h1>Novo Livro</h1>
      <form>
        <label htmlFor={'livroTitulo'}>Titulo: </label>
        <input id={'livroTitulo'} name={'titulo'}/>
        <br/>
        <label htmlFor={'livroIsbn'}>ISBN: </label>
        <input id={'livroIsbn'} name={'isbn'}/>
        <br/>
        <label htmlFor={'livroPreco'}>Preço: </label>
        <input id={'livroPreco'} name={'preco'}/>
        <br/>
        <label htmlFor={'livroDataLancamento'}>Data de Lançamento: </label>
        <input id={'livroDataLancamento'} name={'dataLancamento'}/>
        <br/>
        <label htmlFor={'livroAutores'}>Selecione o Autor: </label>
        <select id={'livroAutores'} name={'selectAutor'}></select>
        <button id={'btnAddAutor'} type={'button'}>Adicionar Autor</button>
        <br/>
        <label>Autores: </label>
        <ul>
          <li></li>
        </ul>
        <br/>
        <button id={'btnGravar'} type={'submit'}>Gravar Livro</button>
      </form>
      <br/>
      <LivroTable/>
    </div>
  );
}

export default LivroContainer;