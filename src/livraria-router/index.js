import React from 'react';
import  {Route, Router, Switch} from 'react-router-dom';
import Login from '../components/login';
import Vendas from '../components/venda';
import Autor from '../components/autor';
import Livro from '../components/livro';
import createHashHistory from 'history/createHashHistory';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

const LivrariaRouter = () => {
  return (
    <Router history={hashHistory} basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={'/livros'} exact component={Livro}/>
        <Route path={'/autores'} exact component={Autor}/>
        <Route path={'/vendas'} exact component={Vendas}/>
        <Route path={'*'} exact component={Login}/>
      </Switch>
    </Router>
  );
};

export default LivrariaRouter;