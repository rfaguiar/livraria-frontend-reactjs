import React from 'react';

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
      <table>
        <caption>Livros</caption>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>ISBN</th>
            <th>Preço</th>
            <th>Data Lançamento</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default LivroContainer;