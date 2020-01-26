import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
  
  const { addRecipe } = props;
  const [ title, setTitle ] = useState('');
  const [ ingredients, setIngredients ] = useState('');
  const [ img, setImg ] = useState('');
  const [ directions, setDirections ] = useState('');

  const submitRecipe = (e) => {
    e.preventDefault();
    const newRecipe = { id: Date.now(), title, ingredients, img, directions };
    addRecipe(newRecipe);
    clearInputs()
  }

  const clearInputs = () => {
    setTitle('');
    setIngredients('');
    setDirections('');
    setImg('');
  }

  return(
    <div>
      <form>
        <h3 className='form-h3'>Recipe Name</h3>
        <input className='form-input'
        key='title'
        type='text'
        name='title'
        value={title}
        placeholder='Recipe Name'
        onChange={ e => setTitle(e.target.value) }
        />
        <h3 className='form-h3'>Ingredients</h3>
        <input className='form-input'
        key='ingredients'
        name='ingredients'
        type='text'
        value={ingredients}
        placeholder='Recipe Ingredients'
        onChange={ e => setIngredients(e.target.value) }
        />
        <h3 className='form-h3'>Image URL</h3>
        <input className='form-input'
        key='img'
        name='img'
        type='text'
        value={img}
        placeholder='Add An Image'
        onChange={ e => setImg(e.target.value) }
        />
        <h3 className='form-h3'>Link to Directions</h3>
        <input className='form-input'
        key='directions'
        name='directions'
        type='text'
        value={directions}
        placeholder='Recipe Directions'
        onChange={ e => setDirections(e) }
        />
        <button className='add-recipe-btn' onClick={ (e) => submitRecipe(e) } >Add Recipe</button>
      </form>
    </div>
  )
}

export default Form;