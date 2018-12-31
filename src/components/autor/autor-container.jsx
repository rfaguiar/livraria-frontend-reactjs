import React from 'react';
import AutorTable from './autor-table';
import AutorForm from './autor-form';

const AutorContainer = () => {
  return(
    <div>
      <h1>Novo Autor</h1>
      <AutorForm/>
      <br/>
      <AutorTable/>
    </div>
  );
};

export default AutorContainer;