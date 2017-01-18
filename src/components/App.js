import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'

import ChangingColorSquare from './../containers/ChangingColorSquare'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ChangingColorSquare />
        <Footer />
      </div>
    );
  }
}

export default App;
