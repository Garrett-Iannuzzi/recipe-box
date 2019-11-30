import React from 'react';
import'./Nav.css';
import Form from './Form';

const Nav = ( { addRecipe } ) => {
  return(
    <nav>
      <h1 className='nav-title'>RecipeBox</h1>
      <Form
      addRecipe={addRecipe} 
      />
    </nav>
  )
}

export default Nav;