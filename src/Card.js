import React from 'react';
import './Card.css'

const Card = ({ title, link, ingredients, img }) => {
  
  return(
    <article className='article-card'>
      <h3 className='card-title'>{title}</h3>
      <img src={img} className='card-img'/>
      <a href={link}><button className='directions-btn'>Directions</button></a>
      <ul className='card-ul'>
        <li className='card-li'>{ingredients}</li>
      </ul>
      <button className='delete-recipe-btn'>GROSS!</button>
    </article>
  )

}

export default Card;  