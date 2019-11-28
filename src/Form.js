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
      <form>
        <input 
        />
        <input 
        />
        <input 
        />
        <button className='add-recipe-btn'>Add Recipe</button>
      </form>
    )
  }
}

export default Form;