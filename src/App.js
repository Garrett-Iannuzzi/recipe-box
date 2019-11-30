import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Feed from './Feed';
import Footer from './Footer';

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

  addRecipe = (recipe) => {
    this.setState( {recipes: [...this.state.recipes, recipe] })
  }
  
  render() {
    return(
      <main>
        <Nav 
        addRecipe={this.addRecipe}
        />
        <Feed 
        recipes={this.state.recipes}
        />
        <Footer />
      </main>
    )
  }
}

export default App;
