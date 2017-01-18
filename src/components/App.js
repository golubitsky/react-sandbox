import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ControlPanel from './ControlPanel'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ControlPanel />
        <Footer />
      </div>
    );
  }
}

export default App;
