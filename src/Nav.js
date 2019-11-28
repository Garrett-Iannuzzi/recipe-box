import React from 'react';
import'./Nav.css';
import Form from './Form';

const Nav = () => {
  return(
    <nav>
      <h1 className='nav-title'>RecipeBox</h1>
      <Form />
    </nav>
  )
}

export default Nav;