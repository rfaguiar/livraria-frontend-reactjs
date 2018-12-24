import React from 'react';
import  {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../components/login';
import Vendas from '../components/venda';
import Autor from '../components/autor';
import Livro from '../components/livro';

const LivrariaRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/livros'} exact component={Livro}/>
        <Route path={'/autores'} exact component={Autor}/>
        <Route path={'/vendas'} exact component={Vendas}/>
        <Route path={'*'} exact component={Login}/>
      </Switch>
    </BrowserRouter>
  );
};

export default LivrariaRouter;