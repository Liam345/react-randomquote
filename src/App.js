import React, { Component } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">" Quotes "</h1>
        <div>
          <QuoteBox>swdws</QuoteBox>
          </div>
      </div>
    );
  }
}

export default App;
