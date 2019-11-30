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

  // deleteRecipe = (cardToDelete) => {
  //   const matchedCard = this.state.recipes.filter(recipe => )
  // }
  
  render() {
    return(
      <main>
        <Nav 
        addRecipe={this.addRecipe}
        />
        <Feed 
        recipes={this.state.recipes}
        // deleteRecipe={this.deleteRecipe}
        />
        <Footer />
      </main>
    )
  }
}

export default App;
