import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
      this.state = {
        name: '',
        ingredients: '',
        img: '',
        directions: ''
      }
  }

  render() {
    return(
      <div>
        <form>
          <h3 className='form-h3'>Recipe Name</h3>
          <input className='form-input'
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Recipe Name'
          />
          <h3 className='form-h3'>Ingredients</h3>
          <input className='form-input'
          name='ingredients'
          type='text'
          value={this.state.ingredients}
          placeholder='Recipe Ingredients'
          />
          <h3 className='form-h3'>Image URL</h3>
          <input className='form-input'
          type='text'
          value={this.state.img}
          placeholder='Add An Image'
          name='img'
          />
          <h3 className='form-h3'>Link to Directions</h3>
          <input className='form-input'
          type='text'
          value={this.state.directions}
          placeholder='Recipe Directions'
          name='directions'
          />
          <button className='add-recipe-btn' onClick={ (e) => this.submitRecipe(e) } >Add Recipe</button>
        </form>
      </div>
    )
  }
}

export default Form;