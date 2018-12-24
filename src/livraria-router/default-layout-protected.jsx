import React from 'react';
import {Route} from 'react-router-dom';
import LivrariaHeader from '../livraria-header';

const DefaultLayoutProtected = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => <LivrariaHeader><Component {...matchProps} /></LivrariaHeader>} />
  )
};


export default DefaultLayoutProtected;