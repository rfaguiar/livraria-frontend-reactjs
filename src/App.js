import React, { Component } from 'react';
import './App.css';
import Livro from './components/livro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Livro/>
      </div>
    );
  }
}

export default App;
