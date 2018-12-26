import React from 'react';
import  {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../components/login';
import Vendas from '../components/venda';
import Autor from '../components/autor';
import Livro from '../components/livro';
import DefaultLayoutProtected from './default-layout-protected';

const LivrariaRouter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <DefaultLayoutProtected path={'/livros'} exact component={Livro}/>
        <DefaultLayoutProtected path={'/autores'} exact component={Autor}/>
        <DefaultLayoutProtected path={'/vendas'} exact component={Vendas}/>
        <Route path={'*'} exact component={Login}/>
      </Switch>
    </BrowserRouter>
  );
};

export default LivrariaRouter;