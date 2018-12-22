import React from 'react';

const AutorContainer = () => {
  return(
    <div>
      <h1>Novo Autor</h1>
      <form>
        <label htmlFor={'autorNome'}>Nome: </label>
        <input id={'autorNome'}/>
        <br/>
        <label htmlFor={'autorEmail'}>Email: </label>
        <input id={'autorEmail'}/>
        <br/>
        <button id={'btnGravarAutor'} type={'submit'}>Gravar Autor</button>
      </form>
      <br/>
      <table>
        <caption>Autores</caption>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fulano</td>
            <td>fulano@admin.com</td>
            <td><button>alterar</button></td>
            <td><button>remover</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AutorContainer;