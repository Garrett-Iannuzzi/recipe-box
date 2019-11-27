import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Feed from './Feed';
import Footer from './Footer';
import './Feed';

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    }
  }
  
  componentDidMount() {
    fetch('http://www.recipepuppy.com/api/')
    .then(response => response.json())
    .then(data => this.setState({ recipes: data.results }))
  }
  
  render() {
    console.log(this.state)
    return(
      <main>
        <Nav />
        <Feed 
        recipes={this.state.recipes}
        />
        <Footer />
      </main>
    )
  }
}

export default App;
