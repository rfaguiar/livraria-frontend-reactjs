import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import LivrariaHeader from '../livraria-header';
import {store} from '../App';

const DefaultLayoutProtected = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => {
      if (store.getState().auth.isAuthenticated) {
        return (<LivrariaHeader><Component {...matchProps} /></LivrariaHeader>);
      } else {
        return (<Redirect to='/'/>);
      }
    }} />
  )
};


export default DefaultLayoutProtected;