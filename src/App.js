import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './Nav';
import Feed from './Feed';
import Footer from './Footer';


const App = () => {
  const [ recipes, getRecipies ] = useState([])

  useEffect(() => {
    fetch('http://www.recipepuppy.com/api/')
      .then(response => response.json())
      .then(data => getRecipies(data.results))
  }, []);

  const addRecipe = (newRecipe) => {
    return getRecipies([ ...recipes, newRecipe ])
  }

  return(
    <main>
      <Nav
      addRecipe={addRecipe}
      />
      <Feed 
      recipes={recipes}
      />
      <Footer />
    </main>
  )
}

export default App;
