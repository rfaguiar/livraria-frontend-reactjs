import React, { Component } from 'react';
import './App.css';
import './index.css';
import {Provider} from 'react-redux';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import LivrariaRouter from './livraria-router';
import authReducer from './components/auth/auth-reducer';
import autorReducer from './components/autor/autor-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  autor: autorReducer
});

const store = createStore(rootReducer, applyMiddleware(multi, thunk));
export {store};

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <LivrariaRouter/>
        </Provider>
      </div>
    );
  }
}
