import React, { Component } from 'react';
import './App.css';
import LivrariaRouter from './livraria-router';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <LivrariaRouter/>
      </div>
    );
  }
}
