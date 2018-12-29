import React from 'react';
import  {Router, Route, Switch} from 'react-router-dom';
import Login from '../components/login';
import Vendas from '../components/venda';
import Autor from '../components/autor';
import Livro from '../components/livro';
import DefaultLayoutProtected from './default-layout-protected';
import createHashHistory from 'history/createHashHistory';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

const LivrariaRouter = () => {
  return (
    <Router history={hashHistory}>
      <Switch>
        <DefaultLayoutProtected path={'/livros'} exact component={Livro}/>
        <DefaultLayoutProtected path={'/autores'} exact component={Autor}/>
        <DefaultLayoutProtected path={'/vendas'} exact component={Vendas}/>
        <Route path={'*'} exact component={Login}/>
      </Switch>
    </Router>
  );
};

export default LivrariaRouter;