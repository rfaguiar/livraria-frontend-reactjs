import React, { Component } from 'react';
import './App.css';
import LivrariaRouter from './livraria-router';
import LivrariaHeader from './livraria-header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LivrariaHeader/>
        <LivrariaRouter/>
      </div>
    );
  }
}

export default App;
