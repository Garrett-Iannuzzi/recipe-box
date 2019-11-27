import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Feed from './Feed';
import Footer from './Footer';
import './Feed';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <main>
        <Nav />
        <Feed />
        <Footer />
      </main>
    )
  }
}

export default App;
