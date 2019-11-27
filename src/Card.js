import React from 'react';
import './Card.css'

const Card = ({ title, link, ingredients, img }) => {
  
  return(
    <article className='article-card'>
      <h3>{title}</h3>
      <img src={img} />
      <a href={link}><button className='see-btn'>Directions</button></a>
      <ul>
        <li>{ingredients}</li>
      </ul>
      <button className='delete-recipe-btn'>GROSS!</button>
    </article>
  )

}

export default Card;  