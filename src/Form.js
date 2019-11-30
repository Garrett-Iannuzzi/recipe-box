import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
      this.state = {
        title: '',
        ingredients: '',
        img: '',
        directions: ''
      }
  }

  handleChange = (e) => {
    this.setState( { [e.target.name]: e.target.value })
  }

  submitRecipe = (e) => {
    e.preventDefault();
    const newRecipe = { id: Date.now(), ...this.state };
    this.props.addRecipe(newRecipe);
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState( { title: '', ingredients: '', img: '', directions: '' })
  }

  render() {
    return(
      <div>
        <form>
          <h3 className='form-h3'>Recipe Name</h3>
          <input className='form-input'
          key='title'
          type='text'
          name='title'
          value={this.state.name}
          placeholder='Recipe Name'
          onChange={ e => this.handleChange(e) }
          />
          <h3 className='form-h3'>Ingredients</h3>
          <input className='form-input'
          key='ingredients'
          name='ingredients'
          type='text'
          value={this.state.ingredients}
          placeholder='Recipe Ingredients'
          onChange={ e => this.handleChange(e) }
          />
          <h3 className='form-h3'>Image URL</h3>
          <input className='form-input'
          key='img'
          name='img'
          type='text'
          value={this.state.img}
          placeholder='Add An Image'
          onChange={ e => this.handleChange(e) }
          />
          <h3 className='form-h3'>Link to Directions</h3>
          <input className='form-input'
          key='directions'
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