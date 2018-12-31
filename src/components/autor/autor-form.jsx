import React from 'react';

const AutorForm = () => {
  return (
    <div>
      <form>
        <label htmlFor={'autorNome'}>Nome: </label>
        <input id={'autorNome'} name={'nome'}/>
        <br/>
        <label htmlFor={'autorEmail'}>Email: </label>
        <input id={'autorEmail'} name={'email'}/>
        <br/>
        <button id={'btnGravarAutor'} type={'submit'}>Gravar Autor</button>
      </form>
    </div>
  );
};

export default AutorForm;