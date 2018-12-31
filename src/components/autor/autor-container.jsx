import React from 'react';
import AutorTable from './autor-table';

const AutorContainer = (props) => {
  return(
    <div>
      <h1>Novo Autor</h1>
      <form>
        <label htmlFor={'autorNome'}>Nome: </label>
        <input id={'autorNome'} name={'nome'}/>
        <br/>
        <label htmlFor={'autorEmail'}>Email: </label>
        <input id={'autorEmail'} name={'email'}/>
        <br/>
        <button id={'btnGravarAutor'} type={'submit'}>Gravar Autor</button>
      </form>
      <br/>
      <AutorTable/>
    </div>
  );
};

export default AutorContainer;