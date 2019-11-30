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

  handleChange = (e) => {
    this.setState( { [e.target.name]: e.target.value })
  }

  submitRecipe = (e) => {

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
          onChange={ e => this.handleChange(e) }
          />
          <h3 className='form-h3'>Ingredients</h3>
          <input className='form-input'
          name='ingredients'
          type='text'
          value={this.state.ingredients}
          placeholder='Recipe Ingredients'
          onChange={ e => this.handleChange(e) }
          />
          <h3 className='form-h3'>Image URL</h3>
          <input className='form-input'
          name='img'
          type='text'
          value={this.state.img}
          placeholder='Add An Image'
          onChange={ e => this.handleChange(e) }
          />
          <h3 className='form-h3'>Link to Directions</h3>
          <input className='form-input'
          name='directions'
          type='text'
          value={this.state.directions}
          placeholder='Recipe Directions'
          onChange={ e => this.handleChange(e) }
          />
          <button className='add-recipe-btn' onClick={ (e) => this.submitRecipe(e) } >Add Recipe</button>
        </form>
      </div>
    )
  }
}

export default Form;