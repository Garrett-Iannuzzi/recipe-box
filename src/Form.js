import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
      this.state = {
        input: ''
      }
  }

  render() {
    return(
      <div>
        <form>
          <h3 className='form-h3'>Recipe Name</h3>
          <input className='form-input'
          />
          <h3 className='form-h3'>Ingrdients</h3>
          <input className='form-input'
          />
          <h3 className='form-h3'>Image URL</h3>
          <input className='form-input'
          />
          <h3 className='form-h3'>Link to Directions</h3>
          <input className='form-input'
          />
          <button className='add-recipe-btn'>Add Recipe</button>
        </form>
      </div>
    )
  }
}

export default Form;